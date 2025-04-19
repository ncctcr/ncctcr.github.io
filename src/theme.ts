// theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#FFFFFF'
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          background: 'rgb(46 46 46)',
          border: '1px solid rgba(113, 113, 113, 0.44)',
        }
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          color: '#FFFFFF'
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          paddingTop: '3px',
          paddingBottom: '3px'
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        outlined: {
          color: '#FFFFFF',
        },
        filled: {
          backgroundColor: '#2f7eed',
          color: 'white',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: '#FFFFFF',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#FFFFFF',
          '&.Mui-focused': {
            color: '#FFFFFF',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(113, 113, 113, 0.44)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(188,188,188,0.44)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255,255,255,0.44)',
          },
        },
        input: {
          color: '#FFFFFF',
          fontSize: 14
        },
      },
    },
  },
});

export default theme;
