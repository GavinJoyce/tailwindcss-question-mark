# tailwindcss-question-mark

A plugin that provides a helpful `?` dev time utility.

**Demo**: https://play.tailwindcss.com/fXhD65EpG4?layout=horizontal

![example](https://user-images.githubusercontent.com/2526/247880985-887a22f4-f5f5-42d0-89d9-7e49037490cf.gif)

## Installation

Install the plugin from npm:

```sh
# Using npm
npm install tailwindcss-question-mark

# Using Yarn
yarn add tailwindcss-question-mark
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwindcss-question-mark'),
    // ...
  ],
}
```

## Usage

Simply add the `?` utility class to any element that you'd like to highlight.

**Demo**: https://play.tailwindcss.com/fXhD65EpG4?layout=horizontal