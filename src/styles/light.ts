import { Themes } from '@varlet/ui'

export const lightThemeMobile = Themes.toViewport({
  ...Themes.md3Light
},
{
  viewportWidth: 750,
  viewportUnit: 'vw',
  unitPrecision: 4,
})

export const lightTheme = Themes.toViewport({
  ...Themes.md3Light
},
{
  viewportWidth: 1480,
  viewportUnit: 'rem',
  unitPrecision: 4
})
