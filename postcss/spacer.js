/**
 * @type {import('postcss').PluginCreator}
 **/

const spaceRe = /space\(((?:[0-9]*\.[0-9]+)|[0-9]+)\)/g;

const replaceSpaces = (s, value) =>
  value.replace(spaceRe, `calc(${s} * $1)`);

module.exports = (_opts) => {
  return {
    postcssPlugin: `spacer`,
    prepare(_result) {
      let value = null;

      return {
        AtRule: {
          'define-space': rule =>
          {
            if(!rule.params) {
              throw rule.error(`define-space requires a value`);
            }

            value = rule.params;
          }
        },
        Declaration: {
          '*': decl => {
            // It will not tell you if you put something weird in the function
            // call. Which I, for one, think is very CSS-like
            if(spaceRe.test(decl.value)) {
              decl.value = replaceSpaces(value, decl.value);
            }
          }
        }
      };
    }
  };
}

module.exports.postcss = true;
