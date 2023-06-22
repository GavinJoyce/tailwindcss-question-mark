const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addUtilities, e }) {
  addUtilities({
    [`.${e('?')}`]: {
      'outline-style': 'solid',
      'animation': `${e('?')}wobble 0.6s ease-in-out alternate infinite`
    },
    [`@keyframes ${e('?')}wobble`]: {
      '0%': {
        'outline-width': '4px',
        'outline-color': '#f16bc9',
        'box-shadow': 'inset 4px 4px #f16bc9, inset -4px -4px #f16bc9'
      },
      '100%': {
        'outline-width': '6px',
        'outline-color': '#f71fb6',
        'box-shadow': 'inset 6px 6px #f71fb6, inset -6px -6px #f71fb6'
      },
    }
  });
});
