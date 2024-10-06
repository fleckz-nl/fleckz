// Replace your-renderer with the renderer you are using (e.g., react, vue3, angular, etc.)
import { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: 'Primary', value: 'hsl(var(--primary))' },
        { name: 'Secondary', value: 'hsl(var(--secondary))' },
        { name: 'Background', value: 'hsl(var(--background))' },
      ],
      default: 'Primary',
    },
  },
};

export default preview;
