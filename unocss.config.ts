import { presetVarlet } from '@varlet/preset-unocss'
import { defineUsefulConfig } from 'unocss-preset-useful'

export default defineUsefulConfig({
  icons: {
    cdn: 'https://esm.sh/'
  },
  remToPx: false,
}, {
  presets: [
    presetVarlet()
  ]
})
