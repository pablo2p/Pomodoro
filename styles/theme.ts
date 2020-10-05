import { theme, DefaultTheme, Tab } from '@chakra-ui/core';

const customTheme: DefaultTheme = {
    ...theme,
    fonts: {
        body: 'Roboto, system-ui, sans-serif',
        heading: 'Roboto, system-ui, sans-serif',
        mono: 'Menlo, monospace'
    },
    fontWeights: {
        ...theme.fontWeights,
        normal: 400,
        medium: 600,
        bold: 700
    },
    radii: {
        ...theme.radii,
        sm: '5px',
        md: '8px'
    },
    fontSizes: {
        ...theme.fontSizes,
        '2xl': '120px'
    },
    colors: {
        ...theme.colors,
        red: {
            ...theme.colors.red,
            300: '#f77373'
        },
        gray: {
            ...theme.colors.gray,
            300: '#e1e1e6',
            600: '#26262e',
            700: '#202024',
            800: '#121214'
        }
    },
}

export default customTheme;