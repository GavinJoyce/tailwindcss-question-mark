const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addUtilities, e }) {
  addUtilities({
    [`.${e('?')}`]: {
      'animation': `${e('?')}wobble 0.5s ease-in-out alternate infinite`
    },
    [`@keyframes ${e('?')}wobble`]: {
      '0%': {
        'box-shadow': 'inset 4px 4px rgb(236, 15, 170), inset -4px -4px rgb(236, 15, 170)'
      },
      '100%': {
        'box-shadow': 'inset 8px 8px rgb(236, 15, 170), inset -8px -8px rgb(236, 15, 170)'
      },
    }
  });
});
