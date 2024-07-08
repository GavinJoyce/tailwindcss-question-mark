const plugin = require("tailwindcss/plugin");

module.exports = plugin.withOptions(
	({
		 animationDuration = "0.6s",
		 enableAnimation = true,
		 defaultHighlightColorStart = "#f16bc9",
		 defaultHighlightColorEnd = "#f71fb6",
		 defaultWidthStart = "8px",
		 defaultWidthEnd = "12px",
	 } = {}) => {
		return function ({addUtilities, e, theme}) {
			const ANIMATION_NAME = "wobble";
			const OUTLINE_STYLE = "solid";

			// Utility generator functions
			const createColorUtility = (color, colorName) => {
				return {
					[`.${e(`?-${colorName}`)}`]: {
						"outline-color": color,
					},
				};
			};

			const createWidthUtility = (width, prefix) => {
				return {
					[`.${e(`?-${prefix}-${width}`)}`]: {
						"outline-width": `${width}px`,
					},
				};
			};

			// Default utilities
			const defaultUtilities = {
				[`.?`]: {
					"outline-style": OUTLINE_STYLE,
					"outline-width": defaultWidthStart,
					"outline-color": defaultHighlightColorStart,
					"box-shadow": `inset 0 0 ${defaultWidthStart} ${defaultHighlightColorStart}, inset 0 0 ${defaultWidthStart} ${defaultHighlightColorStart}`,
					animation: enableAnimation ? `${ANIMATION_NAME} ${animationDuration} ease-in-out alternate infinite` : "none",
				},
			};

			// Custom color utilities
			const customColors = theme('colors');
			let customUtilities = {};
			Object.keys(customColors).forEach(colorName => {
				const colorValue = customColors[colorName][400] || customColors[colorName];
				Object.assign(customUtilities, createColorUtility(colorValue, colorName));
			});

			// Width utilities
			const widths = Array.from({length: 20}, (_, i) => i + 1); // Support widths 1 through 20
			widths.forEach(width => {
				Object.assign(customUtilities, createWidthUtility(width, "start"), createWidthUtility(width, "end"));
			});

			addUtilities({...defaultUtilities, ...customUtilities});
		};
	}
);
