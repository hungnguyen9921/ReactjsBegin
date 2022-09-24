module.exports = {
      content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
      theme: {
            extend: {
                  flex: {
                        '1/2': '1 1 50%',
                  },
                  colors: {
                        'regal-black': 'rgb(168, 165, 165)',
                        'minus-black': 'rgb(204, 204, 204)',
                        'minus-red': 'rgba(255,66,79,.2);',
                  },
                  width: {
                        '9/10': '90%',
                        '9/20': '45%',
                  },
                  maxWidth: {
                        '8xl': '1400px',
                        full: '100%',
                  },
                  boxShadow: {
                        '4xl': '0 1px 4px 0 #b3b3b3',
                        '3xl': '0 1px 4px 0 rgb(74 74 78/ 12%)',
                  },
                  translate: {
                        '[-1/2]': '-50%',
                  },
                  keyframes: {
                        sweet: {
                              '50%': {},
                              '100%': {
                                    transform: 'translateX(0)',
                              },
                        },
                  },
                  animation: {
                        sweet: 'sweet 2s linear 1',
                  },
            },
      },
      plugins: [],
};
