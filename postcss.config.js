module.exports = {
  plugins: [
    require("postcss-import"),
    require("./postcss/spacer"),
    require("postcss-preset-env")({
      stage: 2,
      features: {
        "custom-media": true,
        "nesting-rules": true,
        "custom-selectors": true,
      }
    }),
    require("postcss-for"),
    require("postcss-mixins"),
    require("autoprefixer"),
    require("cssnano")
  ]
}
