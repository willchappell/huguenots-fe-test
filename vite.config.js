import { dirname } from "node:path"

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const __dirname = dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
    base: 'huguenots-fe-test',
    plugins: [vue()],
    resolve: {
        alias: {
            '~bootstrap': __dirname + '/node_modules/bootstrap',
        }
    }
})
