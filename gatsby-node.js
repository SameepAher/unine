const path = require("path")
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        atoms: path.resolve(__dirname, "src/components/atoms"),
        molecules: path.resolve(__dirname, "src/components/molecules"),
        organisms: path.resolve(__dirname, "src/components/organisms"),
        components: path.resolve(__dirname, "src/components"),
      },
    },
  })
}
