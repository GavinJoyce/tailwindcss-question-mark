const plugin = require("tailwindcss/plugin");

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
      const BOX_SHADOW_INSET_START = "4px";
      const BOX_SHADOW_INSET_END = "6px";
      const ANIMATION_NAME = "wobble";
      const OUTLINE_STYLE = "solid";

      const animation = enableAnimation
        ? `${e(
            "?"
          )}${ANIMATION_NAME} ${animationDuration} ease-in-out alternate infinite`
        : "none";

      addUtilities({
        [`.${e("?")}`]: {
          "outline-style": OUTLINE_STYLE,
          "outline-width": widthStart,
          "outline-color": highlightColorStart,
          "box-shadow": `inset ${BOX_SHADOW_INSET_START} ${BOX_SHADOW_INSET_START} ${highlightColorStart}, inset -${BOX_SHADOW_INSET_START} -${BOX_SHADOW_INSET_START} ${highlightColor}`,
          animation: animation,
        },
        [`@keyframes ${e("?")}${ANIMATION_NAME}`]: {
          "0%": {
            "outline-width": widthStart,
            "outline-color": highlightColorStart,
            "box-shadow": `inset ${BOX_SHADOW_INSET_START} ${BOX_SHADOW_INSET_START} ${highlightColorStart}, inset -${BOX_SHADOW_INSET_START} -${BOX_SHADOW_INSET_START} ${highlightColor}`,
          },
          "100%": {
            "outline-width": widthEnd,
            "outline-color": highlightColorEnd,
            "box-shadow": `inset ${BOX_SHADOW_INSET_END} ${BOX_SHADOW_INSET_END} ${highlightColorEnd}, inset -${BOX_SHADOW_INSET_END} -${BOX_SHADOW_INSET_END} ${highlightColor}`,
          },
        },
      });
    };
  }
);
