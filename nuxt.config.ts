import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'

export default defineNuxtConfig({
  compatibilityDate: '2024-07-08',
  ssr: false,
  spaLoadingTemplate: false,
  devtools: { enabled: false },
  vite: {
    plugins: [topLevelAwait()],
    optimizeDeps: {
      exclude: ['@journeyapps/wa-sqlite', '@powersync/web'],
      include: ['@powersync/web > js-logger'], // <-- Include `js-logger` when it isn't installed and imported.
    },
    worker: {
      format: 'es',
      plugins: () => [wasm(), topLevelAwait()],
    },
  },
})
