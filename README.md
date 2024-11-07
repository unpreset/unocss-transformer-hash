<p align="center">
<img src="logo" alt='logo' style="width:100px;" />
</p>

<h1 align="center">unocss-transformer-starter</h1>

<p align="center">A Unocss transformer starter template.</p>

<p align="center">
<a>
<img src="https://img.shields.io/npm/v/unocss-transformer-starter?style=flat&colorA=080f12&colorB=1fa669" alt="npm version" />
</a>
<a>
<img src="https://img.shields.io/npm/dm/unocss-transformer-starter?style=flat&colorA=080f12&colorB=1fa669" alt="npm downloads" />
</a>
<a>
<img src="https://img.shields.io/github/license/unpreset/unocss-transformer-starter.svg?style=flat&colorA=080f12&colorB=1fa669" alt="License" />
</a>
</p>

## Install
```shell
pnpm i -D unocss-transformer-starter
```

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import transformerAlias from 'unocss-transformer-starter'

export default defineConfig({
  // ...
  transformers: [
    transformerAlias(),
  ],
})
```

## License

MIT License &copy; 2023-PRESENT [Chris](https://github.com/zyyv)
