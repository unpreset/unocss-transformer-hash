import {
  defineConfig,
  presetAttributify,
  presetUno,
} from 'unocss'
import transformerHash from 'unocss-transformer-hash'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
  ],
  transformers: [
    transformerHash(),
  ],
})
