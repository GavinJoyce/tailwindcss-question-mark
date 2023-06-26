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
    highlightColorStart = "#f16bc9",
    highlightColorEnd = "#f71fb6",
    widthStart = "8px",
    widthEnd = "12px",
  } = {}) => {
    return function ({ addUtilities, e }) {
      const ANIMATION_NAME = "wobble";
      const OUTLINE_STYLE = "solid";

      const widthStartPx = `${parsePx(widthStart, 8) / 2}px`;
      const widthEndPx = `${parsePx(widthEnd, 12) / 2}px`;

      const boxShadowStart = `inset ${widthStartPx} ${widthStartPx} ${highlightColorStart}, inset -${widthStartPx} -${widthStartPx} ${highlightColorStart}`;
      const boxShadowEnd = `inset ${widthEndPx} ${widthEndPx} ${highlightColorEnd}, inset -${widthEndPx} -${widthEndPx} ${highlightColorEnd}`;

      const animation = enableAnimation
        ? `${e(
            "?"
          )}${ANIMATION_NAME} ${animationDuration} ease-in-out alternate infinite`
        : "none";

      addUtilities({
        [`.${e("?")}`]: {
          "outline-style": OUTLINE_STYLE,
          "outline-width": widthStartPx,
          "outline-color": highlightColorStart,
          "box-shadow": boxShadowStart,
          animation: animation,
        },
        [`@keyframes ${e("?")}${ANIMATION_NAME}`]: {
          "0%": {
            "outline-width": widthStartPx,
            "outline-color": highlightColorStart,
            "box-shadow": boxShadowStart,
          },
          "100%": {
            "outline-width": widthEndPx,
            "outline-color": highlightColorEnd,
            "box-shadow": boxShadowEnd,
          },
        },
      });
    };
  }
);
