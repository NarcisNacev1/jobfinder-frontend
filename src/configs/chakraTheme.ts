// src/configs/chakraTheme.ts
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        brand: {
            100: '#f7c6c1',
            900: '#2b2d2f',
        },
    },
});

export default theme;
