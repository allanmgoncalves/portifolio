import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        dashboard: 'minmax(18rem, 20rem) 1fr',
      },
    },
  },
  plugins: [],
}
export default config
