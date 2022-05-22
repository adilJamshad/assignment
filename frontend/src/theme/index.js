import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { colors } from './colors';
import Poppins from './Poppins-Regular.ttf';

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
        },
      },
    },
    styleOverrides: `
    @font-face {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-display: swap;
      font-weight: 400;
      src: local('Poppins'), local('Poppins-Regular'), url(${Poppins}) format('ttf');
      unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
    }
  `,
    MuiDataGrid: {
      root: {
        '& .MuiDataGrid-columnsContainer': {
          backgroundColor: '#fafafa',
        },
        '& .MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within, &.MuiDataGrid-root .MuiDataGrid-cell:focus-within':
          {
            outline: 'none',
          },
      },
    },
    MuiFormLabel: {
      root: {
        '& .MuiInputLabel-outlined .MuiInputLabel-shrink': {
          ransform: 'translate(0px, -6px) scale(0.75) !important',
        },
      },
    },
  },
  palette: {
    primary: {
      main: colors.primary,
      light: colors.light,
      mainGradient: colors.mainGradient,
      hover: colors.hover,
    },
    secondary: {
      main: colors.secondary,
    },
    tertiary: {
      main: colors.tertiary,
    },
    background: colors.background,
    text: colors.textColor,
  },
  spacing: (factor) => `${0.25 * factor}rem`,
  typography: {
    fontFamily: ['Poppins', 'sans-serif'],
    h1: {
      fontSize: '2.125rem',
      color: colors.textColor.primary,
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.75rem',
      color: colors.textColor.primary,
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.375rem',
      color: colors.textColor.primary,
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.25rem',
      color: colors.textColor.primary,
      fontWeight: 700,
    },
    h5: {
      fontSize: '1.125rem',
      color: colors.textColor.primary,
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      color: colors.textColor.primary,
      fontWeight: 700,
    },

    body1: {
      fontWeight: 200,
      fontSize: '14px',
      color: colors.textColor.secondary,
      fontFamily: 'Poppins, sans-serif',
    },
    body2: {
      fontWeight: 200,
      fontSize: '14px',
      color: colors.textColor.secondary,
      fontFamily: 'Poppins, sans-serif',
    },
    button: {
      textTransform: 'capitalize',
      fontWeight: 700,
      fontSize: '0.8rem',
      height: '38px',
      borderRadius: '5px',
      fontFamily: 'Poppins, sans-serif',
      color: colors.textColor.light,
    },
  },
});
const updatedTheme = responsiveFontSizes(theme);
export default updatedTheme;
