# ✨ Vite + Vue 3 + ThreeJS ⚡

使用Cloud Studio 在线运行 Vite 搭建的项目！本项目采用 Vite + Vue 3 + ThreeJS，毫秒级别启动！纵享丝滑开发体验！


[![NPM Package][npm]][npm-url]
[![Build Size][build-size]][build-size-url]
[![NPM Downloads][npm-downloads]][npmtrends-url]
[![Discord][discord]][discord-url]
[![Twitter][twitter]][twitter-url]
<!-- [![Support][support]][support-url] -->

[npm]: https://img.shields.io/npm/v/troisjs
[npm-url]: https://www.npmjs.com/package/troisjs
[build-size]: https://badgen.net/bundlephobia/minzip/troisjs
[build-size-url]: https://bundlephobia.com/result?p=troisjs
[npm-downloads]: https://img.shields.io/npm/dw/troisjs
[npmtrends-url]: https://www.npmtrends.com/troisjs
[discord]: https://img.shields.io/discord/828384755778846772
[discord-url]: https://discord.gg/5G3msGwyqQ
[support]: https://img.shields.io/badge/support-hicetnunc-lightgrey
[support-url]: https://www.hicetnunc.xyz/tz/tz1XWVAgiiLBPstq5saWXKZqPHbsvq4Qdb4C
[twitter]: https://img.shields.io/twitter/follow/soju22?label=&style=social
[twitter-url]: https://twitter.com/soju22


- 💻 Examples (wip) : https://troisjs.github.io/ ([sources](https://github.com/troisjs/troisjs.github.io/tree/master/src/components))
- 📖 Doc (wip) : https://troisjs.github.io/guide/ ([repo](https://github.com/troisjs/troisjs.github.io))
- 🚀 Codepen examples : https://codepen.io/collection/AxoWoz

## 如何运行

```
yarn 
yarn run dev 
```

打开预览窗口即可！

## 案例

TroisJS is really simple and easy to use :

```html
<div id="app">
  <renderer ref="renderer" antialias orbit-ctrl resize="window">
    <camera :position="{ z: 10 }"></camera>
    <scene>
      <point-light :position="{ y: 50, z: 50 }"></point-light>
      <box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
        <lambert-material></lambert-material>
      </box>
    </scene>
  </renderer>
</div>

<script type="module">
  import { createApp } from 'https://unpkg.com/troisjs@0.3.2/build/trois.module.cdn.min.js';
  createApp({
    mounted() {
      const renderer = this.$refs.renderer;
      const box = this.$refs.box.mesh;
      renderer.onBeforeRender(() => {
        box.rotation.x += 0.01;
      });
    }
  }).mount('#app');;
</script>
```

Read more on https://troisjs.github.io/guide/
