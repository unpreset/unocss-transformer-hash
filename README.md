<h1 align="center">unocss-transformer-hash</h1>

<p align="center">A Unocss transformer hash template.</p>

<p align="center">
<a>
<img src="https://img.shields.io/npm/v/unocss-transformer-hash?style=flat&colorA=080f12&colorB=1fa669" alt="npm version" />
</a>
<a>
<img src="https://img.shields.io/npm/dm/unocss-transformer-hash?style=flat&colorA=080f12&colorB=1fa669" alt="npm downloads" />
</a>
<a>
<img src="https://img.shields.io/github/license/unpreset/unocss-transformer-hash.svg?style=flat&colorA=080f12&colorB=1fa669" alt="License" />
</a>
</p>

## Install
```shell
pnpm i -D unocss-transformer-hash
```

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import transformerHash from 'unocss-transformer-hash'

export default defineConfig({
  // ...
  transformers: [
    transformerHash({
      // options
    }),
  ],
})
```

## Usage

```html
<div class="flex items-center justify-center hover:text-red"></div>
```

Will be transformed to:

```html
<div class="222f 7155 a503 hover:5d96"></div>
```

## Options

```ts
export interface TransformerHashOptions {
  /**
   * Custom hash function
   */
  hashfn?: (input: string) => string
}
```

## License

MIT License &copy; 2023-PRESENT [Chris](https://github.com/zyyv)
