// routes.ts
import {
  rootRoute,
  index,
  physical
} from '@tanstack/virtual-file-routes'


export const routes = rootRoute('__root.tsx', [
  index('index.tsx'),
  physical('auth', '@repo/auth/routes'),
  // physical('auth', '../../packages/auth/src/routes.ts'),
])