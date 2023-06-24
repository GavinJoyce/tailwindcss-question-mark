const plugin = require("tailwindcss/plugin");

module.exports = plugin.withOptions(
  ({
    animationDuration = "0.6s",
    animationName = "wobble",
    boxShadowInsetStart = "4px",
    boxShadowInsetEnd = "6px",
    enableAnimation = true,
    highlightColor = "#f16bc9",
    outlineWidthStart = "4px",
    outlineWidthEnd = "6px",
    outlineStyle = "solid",
  } = {}) => {
    return function ({ addUtilities, e }) {
      const animation = enableAnimation
        ? `${e(
            "?"
          )}${animationName} ${animationDuration} ease-in-out alternate infinite`
        : "none";

      addUtilities({
        [`.${e("?")}`]: {
          "outline-style": outlineStyle,
          "outline-width": outlineWidthStart,
          "outline-color": highlightColor,
          "box-shadow": `inset ${boxShadowInsetStart} ${boxShadowInsetStart} ${highlightColor}, inset -${boxShadowInsetStart} -${boxShadowInsetStart} ${highlightColor}`,
          animation: animation,
        },
        [`@keyframes ${e("?")}${animationName}`]: {
          "0%": {
            "outline-width": outlineWidthStart,
            "outline-color": highlightColor,
            "box-shadow": `inset ${boxShadowInsetStart} ${boxShadowInsetStart} ${highlightColor}, inset -${boxShadowInsetStart} -${boxShadowInsetStart} ${highlightColor}`,
          },
          "100%": {
            "outline-width": outlineWidthEnd,
            "outline-color": highlightColor,
            "box-shadow": `inset ${boxShadowInsetEnd} ${boxShadowInsetEnd} ${highlightColor}, inset -${boxShadowInsetEnd} -${boxShadowInsetEnd} ${highlightColor}`,
          },
        },
      });
    };
  }
);
