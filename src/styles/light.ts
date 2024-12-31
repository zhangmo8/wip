import { Themes } from '@varlet/ui'

export const lightTheme = Themes.toViewport({
  ...Themes.md3Light
},
{
  viewportWidth: 750,
  viewportUnit: 'vw',
  unitPrecision: 4,
})
