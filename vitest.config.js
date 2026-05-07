import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'node:path';
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./src/test/setup.ts'],
        include: ['src/**/*.test.{ts,tsx}'],
        exclude: ['tests/e2e/**', 'node_modules/**'],
        css: true,
        coverage: {
            provider: 'v8',
            reporter: ['text', 'html'],
            exclude: ['**/*.test.{ts,tsx}', '**/*.config.{ts,js}', 'src/test/**', 'tests/**'],
        },
    },
});
