export default {
  // eslint-disable-next-line no-undef
  base: process.env.CI ? "/front-end-entrance-exam/" : "./",
  build: {
    emptyOutDir: true,
    rollupOptions: {
      treeshake: {
        annotations: false,
      },
    },
  },
  server: {
    host: true,
    port: 5000,
    open: true,
  },
};
