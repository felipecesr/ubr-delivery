module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
  settings: {
    "import/resolver": {
      alias: [
        ["@components", "./src/components"],
        ["@layouts", "./src/layouts"],
        ["@pages", "./src/pages"],
        ["@templates", "./src/templates"],
        ["@styles", "./src/styles"],
      ],
    },
  },
}
