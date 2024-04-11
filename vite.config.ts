import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [
        react({
            include: [/\.tsx$/, /\.json$/],
        }),
        {
            name: 'markdown-loader',
            transform(code, id) {
                if (id.slice(-3) === '.json') {
                    // For .md files, get the raw content
                    return `export default ${JSON.stringify(code)};`
                }
            },
        },
    ],
})
