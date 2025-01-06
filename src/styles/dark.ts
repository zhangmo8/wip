import { Themes } from '@varlet/ui'

export const darkThemeMobile = Themes.toViewport({
  // varlet
  ...Themes.md3Dark
},
  {
    viewportWidth: 750,
    viewportUnit: 'vw',
    unitPrecision: 4,
  })

export const darkTheme = Themes.toViewport({
  // varlet
  ...Themes.md3Dark
},
  {
    viewportWidth: 1480,
    viewportUnit: 'rem',
    unitPrecision: 4,
  })

