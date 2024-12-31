import { Themes } from '@varlet/ui'

export const darkTheme = Themes.toViewport({
  // varlet
  ...Themes.md3Dark
},
  {
    viewportWidth: 750,
    viewportUnit: 'vw',
    unitPrecision: 4,
  })
