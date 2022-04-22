import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    components: {
        Box: {
            variants: {
                'with-shadow': {
                  bg: 'red.400',
                  boxShadow: '0 0 2px 2px #efdfde',
                },}
            
        }},
    colors: {
        csGreen:
        {
            // 50: '#e1fafa',
            50: '#c5e8e8',
            100: '#a5d6d7',
            200: '#84c6c7',
            300: '#64b6b7',
            400: '#4b9c9e',
            500: '#387a7b',
            600: '#255758',
            700: '#113536',
            800: '#001316',
            900: '#001316',
            //900: '#001316',
        },
        csYellow:
        {
            50: '#fff2e0',
            100: '#f8dcb8',
            200: '#f2c58d',
            300: '#ebae60',
            400: '#e69735',
            500: '#cc7e1c',
            600: '#a06215',
            700: '#72460d',
            800: '#452a05',
            900: '#1b0d00',
        }
    }
})