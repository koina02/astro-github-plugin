import { defineConfig } from "astro/config";
import github from "@astrojs/github";

export default defineConfig({
  integrations: [github()],
  base: "/ushauri-bora-site/", // your GitHub repo name
});
