import { defineConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: 'src/components/index.ts',
            formats: ['es']
        },
        rollupOptions: {
            external: [/^lit/]
        }
    }
})