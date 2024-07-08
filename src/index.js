const plugin = require("tailwindcss/plugin");

function parsePx(input, defaultValue) {
	let value = input.match(/\d+px/);
	if (value) {
		return parseInt(value[0], 10);
	}
	return defaultValue;
}

module.exports = plugin.withOptions(
	({
		 animationDuration = "0.6s",
		 enableAnimation = true,
		 defaultHighlightColorStart = "#f16bc9",
		 defaultHighlightColorEnd = "#f71fb6",
		 widthStart = "2px",
		 widthEnd = "4px",
	 } = {}) => {

		/**
		 * This fork introduces the addition of the `createUtilitiesForColor` function, which dynamically generates utilities colors specified in the tailwind.config.
		 * The function uses the `theme` object to parse the plain-language color names used in tailwind.
		 * Minor changes were made to the `widthStart` and `widthEnd` default values to distinguish between elements that are close in proximity to each other.
		 */
		return function ({addUtilities, e, theme}) {
			const ANIMATION_NAME = "wobble";
			const OUTLINE_STYLE = "solid";

			const createUtilitiesForColor = (colorStart, colorEnd, colorName) => {
				const className = colorName ? `?-${colorName}` : '?';
				const widthStartPx = `${parsePx(widthStart, 8) / 2}px`;
				const widthEndPx = `${parsePx(widthEnd, 12) / 2}px`;

				const boxShadowStart = `inset ${widthStartPx} ${widthStartPx} ${colorStart}, inset -${widthStartPx} -${widthStartPx} ${colorStart}`;
				const boxShadowEnd = `inset ${widthEndPx} ${widthEndPx} ${colorEnd}, inset -${widthEndPx} -${widthEndPx} ${colorEnd}`;

				const animation = enableAnimation
					? `${e(className)}${ANIMATION_NAME} ${animationDuration} ease-in-out alternate infinite`
					: "none";

				return {
					[`.${e(className)}`]: {
						"outline-style": OUTLINE_STYLE,
						"outline-width": widthStartPx,
						"outline-color": colorStart,
						"box-shadow": boxShadowStart,
						animation: animation,
					},
					[`@keyframes ${e(className)}${ANIMATION_NAME}`]: {
						"0%": {
							"outline-width": widthStartPx,
							"outline-color": colorStart,
							"box-shadow": boxShadowStart,
						},
						"100%": {
							"outline-width": widthEndPx,
							"outline-color": colorEnd,
							"box-shadow": boxShadowEnd,
						},
					},
				};
			};

			const defaultUtilities = createUtilitiesForColor(defaultHighlightColorStart, defaultHighlightColorEnd);

			const customColors = theme('colors');
			const customUtilities = Object.keys(customColors).reduce((acc, colorName) => {
				const colorValueStart = customColors[colorName][400] || customColors[colorName];
				const colorValueEnd = customColors[colorName][600] || customColors[colorName];
				const utilities = createUtilitiesForColor(colorValueStart, colorValueEnd, colorName);
				return {...acc, ...utilities};
			}, {});

			addUtilities({...defaultUtilities, ...customUtilities});
		};
	}
);
