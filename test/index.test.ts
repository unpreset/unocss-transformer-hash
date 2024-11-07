import type { UnoGenerator } from 'unocss'
import MagicString from 'magic-string'
import { createGenerator, presetUno } from 'unocss'
import { expect, it } from 'vitest'
import { transform } from '../src'

const uno = createGenerator({
  presets: [presetUno()],
})

function createTransformer() {
  return async (code: string, _uno: UnoGenerator = uno) => {
    const s = new MagicString(code)
    await transform(s, _uno, {})
    return s.toString()
  }
}

it('basic', async () => {
  const code = `<div attr='bar' class="flex items-center foo justify-center sm:hover:text-red"></div>`

  const transform = createTransformer()

  expect(await transform(code)).toMatchInlineSnapshot(`"<div attr='bar' class="222f 7155 foo a503 sm:hover:5d96"></div>"`)
})
