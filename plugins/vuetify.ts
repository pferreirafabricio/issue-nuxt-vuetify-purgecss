import { createVuetify } from "vuetify";

export default defineNuxtPlugin((nuxtConfig) => {
  const vuetify = createVuetify({
    ssr: true,
  });

  nuxtConfig.vueApp.use(vuetify);
});
