const theme = {
  useCustomProperties: true,
  useColorSchemeMediaQuery: true,
  initialColorModeName: 'light',
  breakpoints: ['320px', '620px', '768px', '992px', '1200px', '1500px'],
  colors: {
    primary: '#5489DC',
    secondary: '#2f71d7',
    primaryText: '#fff',
    secondaryText: '#5489dc',
    text: '#777777',
    bgc: '#fff',
    muted: '#CFCFCF',
    modes: {
      dark: {
        primary: '#6948ee',
        secondary: '#856de6',
        primaryText: '#fff',
        secondaryText: '#772E25',
        text: '#953eb9',
        bgc: '#18233e',
        muted: '#EDDDD4'
      }
    }
  },
  fonts: {
    body: 'Arial',
    heading: 'Arial',
    monospace: 'Arial'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    display: 900
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  textStyles: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading'
    },
    display: {
      fontSize: [2, 3],
      fontWeight: '400'
    }
  },
  layout: {
    container: {}
  },
  styles: {
    root: {
      bg: 'bgc',
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      textRendering: 'optimizelegibility',
      fontSmoothing: 'antialiased',
      transition: 'background-color 0.2s ease'
    },
    h1: {
      variant: 'textStyles.display'
    },
    h2: {
      variant: 'textStyles.heading',
      fontSize: 5
    },
    h3: {
      variant: 'textStyles.heading',
      fontSize: 4
    },
    h4: {
      variant: 'textStyles.heading',
      fontSize: 3
    },
    h5: {
      variant: 'textStyles.heading',
      fontSize: 2
    },
    h6: {
      variant: 'textStyles.heading',
      fontSize: 1
    },
    p: {
      fontSize: 2
    },
    a: {
      color: 'primary',
      '&:hover': {
        color: 'secondary'
      }
    },
    pre: {
      fontFamily: 'monospace',
      fontSize: 1,
      p: 3,
      color: 'text',
      bg: 'muted',
      borderColor: 'text',
      borderStyle: 'solid',
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 8,
      borderBottomWidth: 8,
      overflow: 'auto',
      code: {
        color: 'inherit'
      }
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 1
    },
    inlineCode: {
      fontFamily: 'monospace',
      color: 'secondary',
      bg: 'muted',
      px: 2
    },
    ul: {
      listStyleType: 'square'
    },
    table: {
      width: '100%',
      my: 4,
      borderCollapse: 'separate',
      borderSpacing: 0,
      'th,td': {
        textAlign: 'left',
        py: '4px',
        pr: '4px',
        pl: 0,
        borderColor: 'text',
        borderBottomStyle: 'solid'
      }
    },
    th: {
      backgroundColor: 'muted',
      verticalAlign: 'bottom',
      borderBottomWidth: 8
    },
    td: {
      verticalAlign: 'top',
      borderBottomWidth: 4
    },
    hr: {
      border: 0,
      borderBottom: '8px solid',
      borderColor: 'text'
    }
  },
  radii: [0, 2, 5, 8, 16, 32, 48],
  sizes: ['0.25rem', '0.5rem', '0.75rem', '1rem', '1.5rem', '8.5rem'],
  borders: ['none', '1px solid'],
  buttons: {
    default: {
      borderRadius: 2,
      fontSize: 0,
      p: '7px 12px 9px',
      lineHeight: 1,
      cursor: 'pointer',
      ':disabled': {
        cursor: 'not-allowed',
        bg: 'muted',
        ':hover': {
          bg: 'muted'
        }
      }
    },
    primary: {
      variant: 'buttons.default',
      color: 'primaryText',
      bg: 'primary',
      ':hover': {
        bg: 'secondary'
      }
    },
    secondary: {
      variant: 'buttons.default',
      color: 'primary',
      bg: 'bgc',
      border: 1,
      borderColor: 'primary',
      ':hover': {
        borderColor: 'secondary',
        color: 'secondary'
      }
    }
  }
};

export default theme;
