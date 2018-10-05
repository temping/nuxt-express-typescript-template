module.exports = function() {
  // Add .ts extension for store, middleware and more
  this.nuxt.options.extensions = ["ts", "tsx"].concat(this.nuxt.options.extensions);
    
  // Extend build
  this.extendBuild((config, { isDev, isClient }) => {
    config.resolve.extensions = [".ts", ".tsx"].concat(config.resolve.extensions);
    
    const tsLoader = {
      loader: "ts-loader",
      options: {
        appendTsSuffixTo: [/\.vue$/],
        transpileOnly:true
      }
    }
    
    // Add TypeScript loader
    config.module.rules.push({
      test: /\.tsx?$/,
      loader: tsLoader
    })
    
    // Add TypeScript loader for vue files
    for (let rule of config.module.rules) {
      if (rule.loader === "vue-loader") {
        !rule.options.loaders && (rule.options.loaders = {})
        rule.options.loaders.ts = tsLoader
      }
    }
    // Add .ts extension in webpack resolve
    if (config.resolve.extensions.indexOf(".ts") === -1) {
      config.resolve.extensions.push(".ts")
    }
  })
}
