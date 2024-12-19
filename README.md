# vue-essentials

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm create vue@latest .
pnpm install
```

## VSCode Prep

install Vue Offical

## Tailwind Setup

```sh
pnpm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
```

Follow guide <https://v2.tailwindcss.com/docs/guides/vue-3-vite>

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

### Order to study

1. OptionsApi
2. CompositionApi
3. CompositionApiReduced
4. TasksVue
5. router - vue router can be understood by going into src/router/index.js, main.js and app.vue.
6. Setting proxy for url (localhost:5000) can be done in vite.config.js
