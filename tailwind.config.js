/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './node_modules/tw-elements/dist/js/**/*.js',
        './node_modules/flowbite/**/*.js',
    ],
    theme: {
        extend: {},
        fontFamily: {
          sans: ['Open Sans'],
          serif: ['SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace', 'serif'],
          body: ['Roboto', 'sans-serif'],
        },
    },
    plugins: [
        require('flowbite/plugin'),
        require('tw-elements/dist/plugin.cjs'),
    ],
    darkMode: 'class',
};

