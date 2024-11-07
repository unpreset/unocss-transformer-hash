import {
  defineConfig,
  presetUno,
} from 'unocss'
import transformerStarter from 'unocss-transformer-starter'

export default defineConfig({
  presets: [
    presetUno(),
  ],
  transformers: [
    transformerStarter(),
  ],
})
