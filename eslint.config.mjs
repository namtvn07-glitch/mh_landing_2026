// Next 16 đã gỡ `next lint` — lint chạy thẳng qua ESLint CLI với flat config.
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTypeScript,
  globalIgnores([
    // Mặc định của eslint-config-next, phải nhắc lại vì defineConfig ở đây
    // ghi đè phần ignores của nó.
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Artifact build, không phải nguồn.
    "public/**",
  ]),
]);
