import type { UnoGenerator } from 'unocss'
import MagicString from 'magic-string'
import { createGenerator, presetUno } from 'unocss'
import { expect, it } from 'vitest'
import { transformStarter } from '../src'

const uno = createGenerator({
  presets: [presetUno()],
})

function createTransformer() {
  return async (code: string, _uno: UnoGenerator = uno) => {
    const s = new MagicString(code)
    await transformStarter(s, _uno, {})
    return s.toString()
  }
}

it('basic', async () => {
  const transform = createTransformer()
  const code = `hello UnoCSS`

  expect(await transform(code)).toMatchInlineSnapshot(`"hello UnoCSS is awesome"`)
})
