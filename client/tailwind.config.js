module.exports = {
      content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
      prefix: 'tw-',
      theme: {
            extend: {
                  colors: {},
                  gridTemplateColumns: {
                        lg: 'repeat(auto-fill, minmax(160px, 1fr))',
                        sm: 'repeat(auto-fill, minmax(130px, 1fr))',
                  },
            },
      },
      plugins: [],
};
