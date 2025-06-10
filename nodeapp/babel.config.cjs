module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
  plugins: [
    // Plugin mejorado para transformar import.meta durante los tests
    function () {
      return {
        visitor: {
          MetaProperty(path) {
            if (
              path.node.meta.name === "import" &&
              path.node.property.name === "meta"
            ) {
              path.replaceWithSourceString(
                'Object.assign(Object.create(null), { url: "file:///mock-url", dirname: "." })'
              );
            }
          },
        },
      };
    },
  ],
};
