# tailwindcss-question-mark

A plugin that provides a helpful `?` dev time utility.

**Demo**: https://play.tailwindcss.com/fXhD65EpG4?layout=horizontal

![example](https://user-images.githubusercontent.com/2526/248293688-da86d4e7-0955-40fb-8fb2-f892b270a9a8.gif)

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
    require("tailwindcss-question-mark"),
    // ...
  ],
};
```

## Usage

Simply add the `?` utility class to any element that you'd like to highlight.

**Demo**: https://play.tailwindcss.com/fXhD65EpG4?layout=horizontal

## Customizing

Below is an example of how you can customize the plugin with the available configuration options and their defaults.

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require("tailwindcss-question-mark")({
      animationDuration: "0.6s",
      enableAnimation: true,
      highlightColorStart: "#f16bc9",
      highlightColorEnd: "#f71fb6",
      widthStart: "8px",
      widthEnd: "12px",
    }),
    // ...
  ],
};
```
