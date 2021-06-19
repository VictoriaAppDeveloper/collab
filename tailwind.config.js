const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            'Roboto': ['Roboto', 'sans-serif'],
            'Orbitron': ['Orbitron', 'sans-serif'],
        },
        linearBorderGradients: {
            directions: {
                't': 'to top',
                'tr': 'to top right',
                'r': 'to right',
                'br': 'to bottom right',
                'b': 'to bottom',
                'bl': 'to bottom left',
                'l': 'to left',
                'tl': 'to top left',
                'l-45': '45deg',
            },
            colors: { // defaults to {}
                'red-600-purple-500': [colors.red["600"], colors.purple["500"]],
                'red-800-purple-900': [colors.red["800"], colors.purple["900"]],
                'red-pink': [colors.red["600"], colors.pink["500"]],
            },
            background: {
                'gray-50': '#F9FAFB',
                'gray-900':'#111827',
            },
        },
        extend: {
            backgroundSize: {
                '4x': '400% 400%',
            },
            backgroundImage: {
                brand: 'linear-gradient(-45deg, '
                    + colors.purple["500"] + ', '
                    + colors.yellow["500"] + ', '
                    + colors.red["600"] + ');'
            },
            width: {
                '144': '36rem'
            },
            zIndex: {
                'n1': -1,
            },
            transformOrigin: {
                '0': 0
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
       linearBorderGradients: ['responsive', 'hover', 'dark'], // defaults to ['responsive']
    },
    plugins: [
        require('tailwindcss-border-gradient-radius'),
    ],
}
