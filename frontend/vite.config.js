import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'

export default defineConfig({
	build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        stafft: resolve(__dirname, 'admin/index.html')
      }
    }
  },
  plugins: [
    vue(),
		{
      name: "middleware",
      apply: "serve",
      configureServer(viteDevServer) {
        return () => {
          viteDevServer.middlewares.use(async (req, res, next) => {
            if (req.originalUrl === "/admin") {
							res.writeHead(302, { Location: "/admin/" });
							res.end();
						} else if (req.originalUrl.startsWith("/admin")) {
							req.url = "/admin/index.html";
						}
            next();
          });
        };
      }
    }
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
