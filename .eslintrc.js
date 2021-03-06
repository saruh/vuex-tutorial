module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    // Stylistic Issues
    'operator-linebreak': ["error", "before"]
  },
  'globals': {
    // 'localStorage': true,
    // '$chat': true,
    // 'alert': true, //一時的に後で外す
    'FormData': true //,
    // 'Audio': true,
    // 'componentHandler': true  /* Material Design Lite */
  }
}
