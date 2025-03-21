import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"

import robotsTxt from "astro-robots-txt"

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://martibusquets.cat/',
  output: 'server',

  i18n: {
    locales: ["ca", "en", "es"],
    defaultLocale: "en",
  },

  adapter: vercel()
})