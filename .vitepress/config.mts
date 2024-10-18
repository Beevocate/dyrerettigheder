import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dyrerettigheder",
  description: "",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      
    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    sidebar: []
  },
  locales: {
    root: {
      label: "Dansk",
      lang: 'da-DK',
      title: 'Har Planter Følelser?',
      description: ''
    },
    en: {
      label: "English",
      lang: 'en-US',
      title: 'Do Plants Have Feelings?',
      description: ''
    }
  }
})
