// eslint.config.mjs
import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu(
  {
    type: 'lib',
    stylistic: {
      indent: 2,
      quotes: 'single',
    },
    typescript: true,
    vue: true,
    jsonc: false,
    yaml: false,
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      'src-tauri'
    ],
  },
  ...compat.config({
    extends: [
      'eslint:recommended',
    ],
  })
)
