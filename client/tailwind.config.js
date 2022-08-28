module.exports = {
      content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
      theme: {
            extend: {
                  width: {
                        '9/10': '90%',
                  },
                  maxWidth: {
                        '8xl': '1400px',
                        full: '100%',
                  },
                  boxShadow: {
                        '3xl': '0 1px 4px 0 rgb(74 74 78/ 12%)',
                  },
                  translate: {
                        '[-1/2]': '-50%',
                  },
            },
      },
      plugins: [],
};
