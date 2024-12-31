export default {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 750,
      viewportUnit: 'vmin',
      fontViewportUnit: 'vmin',
      unitPrecision: 4,
      unitToConvert: 'px',
      propList: ['*'],
      selectorBlackList: ['var-elevation']
    }
  }
}
