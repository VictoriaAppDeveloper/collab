const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundSize: {
                '4x': '400% 400%',
            },
            backgroundImage: {
                brand: 'linear-gradient(-45deg, '
                    + colors.yellow["400"] + ', '
                    + colors.red["500"] + ', '
                    + colors.pink["500"] + ', '
                    + colors.purple["600"] + ');'
            },
            animation: {
                gradient: 'gradient 15s ease infinite'
            },
            keyframes: {
                gradient: {
                    '0% 100%': {'background-position': '0% 50%;'},
                    '50%': {'background-position': '100% 50%'},
                }
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
