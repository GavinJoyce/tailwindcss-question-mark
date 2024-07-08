# tailwindcss-question-mark

> This is a forked version of the
original [`tailwindcss-question-mark`](https://github.com/GavinJoyce/tailwindcss-question-mark) plugin.
> See [Usage](#usage) for more info.

- - - -

A plugin that provides a helpful `?` dev time utility.

**Demo**: https://play.tailwindcss.com/fXhD65EpG4?layout=horizontal

![example](https://user-images.githubusercontent.com/2526/248293688-da86d4e7-0955-40fb-8fb2-f892b270a9a8.gif)

## [Installation](#installation "Goto Installation")

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

## [Usage](#usage "Goto Usage")

Simply add the `?` utility class to any element that you'd like to highlight.
By default, the utility will animate the element with a pink highlight.

Optionally, you can specify a color by using the `?-{color}` utility class with `{color}` being the semantic name. For
example, `?-blue` will highlight the element with a blue color.

![example](https://i.ibb.co/LvXtxLG/twcssqm-colors.gif)

**Demo**: https://play.tailwindcss.com/fXhD65EpG4?layout=horizontal

## [Customizing](#customizing "Goto Customizing")

Here's an example of how you can customize the plugin with the available configuration options and their defaults.

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

**Demo with customization**: https://play.tailwindcss.com/4Y4TsxcrNU?file=config
