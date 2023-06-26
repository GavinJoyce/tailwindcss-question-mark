const plugin = require("tailwindcss/plugin");

module.exports = plugin.withOptions(
  ({
    animationDuration = "0.6s",
    enableAnimation = true,
    highlightColor = "#f16bc9",
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
          "outline-color": highlightColor,
          "box-shadow": `inset ${BOX_SHADOW_INSET_START} ${BOX_SHADOW_INSET_START} ${highlightColor}, inset -${BOX_SHADOW_INSET_START} -${BOX_SHADOW_INSET_START} ${highlightColor}`,
          animation: animation,
        },
        [`@keyframes ${e("?")}${ANIMATION_NAME}`]: {
          "0%": {
            "outline-width": widthStart,
            "box-shadow": `inset ${BOX_SHADOW_INSET_START} ${BOX_SHADOW_INSET_START} ${highlightColor}, inset -${BOX_SHADOW_INSET_START} -${BOX_SHADOW_INSET_START} ${highlightColor}`,
          },
          "100%": {
            "outline-width": widthEnd,
            "box-shadow": `inset ${BOX_SHADOW_INSET_END} ${BOX_SHADOW_INSET_END} ${highlightColor}, inset -${BOX_SHADOW_INSET_END} -${BOX_SHADOW_INSET_END} ${highlightColor}`,
          },
        },
      });
    };
  }
);
