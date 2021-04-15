module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['~components', './src/components'],
          // ['~containers', './src/containers'],
          ['~styles', './src/styles'],
          ['~img', './src/assets/img/'],
          ['~fonts', './src/assets/fonts/'],
          ['~images', './src/images'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
}
