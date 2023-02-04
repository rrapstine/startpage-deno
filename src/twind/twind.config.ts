import { defineConfig } from '@twind/core';
import presetAutoprefix from '@twind/preset-autoprefix';
import presetTailwind from '@twind/preset-tailwind';

export default defineConfig({
  theme: {
    extend: {
      fontSize: {
        lg: '1.5rem',
      },
      backgroundImage: {
        home: "url('./src/assets/images/bg-image.webp')",
      },
      colors: {
        gray: '#BBBBBB',
      },
    },
  },
  presets: [presetAutoprefix(), presetTailwind()],
});
