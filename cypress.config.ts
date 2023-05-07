import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000/',
    
  },
  env: {
    email: "lvk01@yandex.ru",
    password: '123456',
  }
});
