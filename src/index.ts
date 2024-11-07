import type MagicString from 'magic-string'
import type { SourceCodeTransformer, UnoGenerator } from 'unocss'
import { createHash } from 'node:crypto'

export interface TransformerHashOptions {
  /**
   * Custom hash function
   */
  hashfn?: (input: string) => string
}

export default function transformerHash(options?: TransformerHashOptions): SourceCodeTransformer {
  return {
    name: 'unocss-transformer-hash',
    enforce: 'pre',
    async transform(code, _, { uno }) {
      await transform(code, uno, options)
    },
  }
}

export async function transform(
  code: MagicString,
  uno: UnoGenerator,
  options: TransformerHashOptions = {},
) {
  const { hashfn = getHash } = options
  const cache = new Map<string, string>()
  const classRegex = /(?:class|className)\s*=\s*[{"'`]([^"'`{}]+)["'`}]/g
  const classValueRegex = /\S+/g

  for (const match of code.original.matchAll(classRegex)) {
    const idx = match.index + match[0].indexOf(match[1])

    for (const clsMatch of match[1].matchAll(classValueRegex)) {
      const cls = clsMatch[0]
      const applied = await uno.matchVariants(cls)
      if (!applied || uno.isBlocked(applied[1]))
        continue

      const currentSelector = applied[1]
      const variantOffset = cls.indexOf(currentSelector)

      const parsed = await uno.parseToken(currentSelector)
      if (!parsed)
        continue

      const hash = hashfn(cls)
      if (cache.get(currentSelector)) {
        code.overwrite(idx + clsMatch.index, idx + clsMatch.index + cls.length, cache.get(currentSelector)!)
        continue
      }

      cache.set(currentSelector, hash)
      uno.config.shortcuts.push([hash, currentSelector])
      code.overwrite(idx + clsMatch.index + variantOffset, idx + clsMatch.index + variantOffset + currentSelector.length, hash)
    }
  }
}

function getHash(input: string, length = 4) {
  return createHash('sha256')
    .update(input)
    .digest('hex')
    .slice(0, length)
}
