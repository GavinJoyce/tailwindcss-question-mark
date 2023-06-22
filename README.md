# tailwindcss-question-mark

A plugin that provides a helpful `?` dev time utility.

**Demo**: https://play.tailwindcss.com/FszQ6xCV4N

![example](https://user-images.githubusercontent.com/2526/100670452-ca598300-3356-11eb-8743-5d4d3c7b740f.gif)

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

**Demo**: https://play.tailwindcss.com/FszQ6xCV4N