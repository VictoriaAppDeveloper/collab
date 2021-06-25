const colors = require('tailwindcss/colors')
const {random} = require('./utils')

function glitch () {
    let result = {}
    for(let i = 0; i < 20; i++) {
        result['' + (i * 5) + '%']  = {clip: 'rect(' + random(150) + 'px, auto, ' + random(150) + 'px, auto)'}
    }
    return result
}


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
                '4x': '400vw 400vh',
                '2x-percents': '200% 200%',
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
            height: {
                max: 'max-content'
            },
            zIndex: {
                'n1': -1,
            },
            transitionTimingFunction: {
                'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
                'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
            },
            transformOrigin: {
                '0': 0
            },
            boxShadow: {
                up: '0px -3px 15px -5px rgba(0, 0, 0, 0.5);'
            },
            animation: {
                gradient: 'gradient 8s ease infinite',
                'gradient-2x-speed': 'gradient 4s ease infinite',
                'gradient-4x-speed': 'gradient 2s ease infinite',
                'glitch-before': 'glitch-before 2s linear 0s infinite alternate',
                'glitch-after': 'glitch-after 2s linear 0s infinite alternate',
            },
            keyframes: {
                gradient: {
                    '0% 100%': {'background-position': '0% 50%;'},
                    '50%': {'background-position': '100% 50%'},
                },
                'glitch-before': glitch(),
                'glitch-after': glitch(),
            }
        },
    },
    variants: {
       linearBorderGradients: ['responsive', 'hover', 'dark'], // defaults to ['responsive']
    },
    plugins: [
        require('tailwindcss-border-gradient-radius'),
        require('@tailwindcss/line-clamp'),
    ],
}
