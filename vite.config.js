import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'baseline-widely-available',
    rolldownOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        privacy: resolve(import.meta.dirname, 'privacy.html'),
        networking: resolve(import.meta.dirname, 'networking/index.html'),
        surveillance: resolve(import.meta.dirname, 'surveillance/index.html'),
        accessControl: resolve(import.meta.dirname, 'access-control/index.html'),
        designGuide: resolve(import.meta.dirname, 'design-guide/index.html'),
        prototype: resolve(import.meta.dirname, 'prototype/index.html'),
      },
    },
  },
});
