import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://tusmm-astro-test.netlify.app/",
  integrations: [preact()]
});