import type MagicString from 'magic-string'
import type { SourceCodeTransformer, UnoGenerator } from 'unocss'

export interface TransformerStarterOptions {

}

export default function transformerAlias(options?: TransformerStarterOptions): SourceCodeTransformer {
  return {
    name: 'unocss-transformer-starter',
    enforce: 'pre',
    async transform(code, _, { uno }) {
      await transformStarter(code, uno, options)
    },
  }
}

export async function transformStarter(
  code: MagicString,
  uno: UnoGenerator,
  // eslint-disable-next-line unused-imports/no-unused-vars
  options: TransformerStarterOptions = {},
) {
  // Your logic here
  code.replace('UnoCSS', 'UnoCSS is awesome')
}
