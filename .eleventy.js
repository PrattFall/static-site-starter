const PostCSSPlugin = require("eleventy-plugin-postcss");

module.exports = config => {
  config.addPlugin(PostCSSPlugin);
  config.setServerOptions({
    liveReload: true,
    domDiff: true,
    port: 8080
  });
  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist"
    }
  };
}
