const defaultTheme = require('tailwindcss/resolveConfig')(
  require('tailwindcss/defaultConfig')
).theme
const [baseFontSize, { lineHeight: baseLineHeight }] =
  defaultTheme.fontSize.base
const { colors, spacing, borderWidth, borderRadius, boxShadow } = defaultTheme

module.exports = {
  purge: ['public/index.html', 'src/**/*.js', 'src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#FBFBFB',
          200: '#EAEAEA',
          300: '#DFDFDF',
          400: '#999999',
          500: '#7F7F7F',
          600: '#666666',
          700: '#4C4C4C',
          800: '#333333',
          900: '#191919',
        },
        blue: {
          100: '#E6F0FD',
          200: '#CCE2FC',
          300: '#99C5FA',
          400: '#66A9F7',
          500: '#338CF5',
          600: '#0070F4',
          700: '#0064DA',
          800: '#0059C2',
          900: '#004391',
          lightbackground: '#4286F5',
        },
        teal: {
          100: '#E6FFFA',
          200: '#B2F5EA',
          300: '#81E6D9',
          400: '#4FD1C5',
          500: '#3ABAB4',
          600: '#319795',
          700: '#2C7A7B',
          800: '#285E61',
          900: '#234E52',
        },
        white: {
          pale: '#F6F7FA',
        },
      },

      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.625rem',
        '5xl': '3.25rem',
        '6xl': '5.5rem',
      },
      inset: {
        '1/2': '50%',
        full: '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      lineHeight: {
        none: '1',
        tighter: '1.125',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
        3: '.75rem',
        4: '1rem',
        5: '1.2rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
      },
      minWidth: {
        10: '2.5rem',
        48: '12rem',
      },
      opacity: {
        90: '0.9',
      },
      scale: {
        98: '.98',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5%)' },
        },
      },
      zIndex: {
        '-1': '-1',
      },
      height: {
        1: '1rem',
        2: '2rem',
        3: '3rem',
        4: '4rem',
        5: '5rem',
        6: '6rem',
        7: '7rem',
        8: '8rem',
        9: '9rem',
        10: '10rem',
        11: '11rem',
        12: '12rem',
        13: '13rem',
        14: '14rem',
        15: '15rem',
        16: '16rem',
        17: '17rem',
        18: '18rem',
        19: '19rem',
        20: '20rem',
        21: '21rem',
        22: '22rem',
        23: '23rem',
        24: '24rem',
        25: '25rem',
        26: '26rem',
        27: '27rem',
        28: '28rem',
        29: '29rem',
        30: '30rem',
        31: '31rem',
        32: '32rem',
        33: '33rem',
        34: '34rem',
        35: '35rem',
        36: '36rem',
        37: '37rem',
        38: '38rem',
        39: '39rem',
        40: '40rem',
        41: '41rem',
        42: '42rem',
        43: '43rem',
        44: '44rem',
        45: '45rem',
        46: '46rem',
        47: '47rem',
        48: '48rem',
        49: '49rem',
        50: '50rem',
        51: '51rem',
        52: '52rem',
        53: '53rem',
        54: '54rem',
        55: '55rem',
        56: '56rem',
        57: '57rem',
        58: '58rem',
        59: '59rem',
        60: '60rem',
        61: '61rem',
        62: '62rem',
        63: '63rem',
        64: '64rem',
        65: '65rem',
        66: '66rem',
        67: '67rem',
        68: '68rem',
        69: '69rem',
        70: '70rem',
        71: '71rem',
        72: '72rem',
        73: '73rem',
        74: '74rem',
        75: '75rem',
        76: '76rem',
        77: '77rem',
        78: '78rem',
        79: '79rem',
        80: '80rem',
        81: '81rem',
        82: '82rem',
        83: '83rem',
        84: '84rem',
        85: '85rem',
        86: '86rem',
        87: '87rem',
      },
      width: {
        1: '1rem',
        2: '2rem',
        3: '3rem',
        4: '4rem',
        5: '5rem',
        6: '6rem',
        7: '7rem',
        8: '8rem',
        9: '9rem',
        10: '10rem',
        11: '11rem',
        12: '12rem',
        13: '13rem',
        14: '14rem',
        15: '15rem',
        16: '16rem',
        17: '17rem',
        18: '18rem',
        19: '19rem',
        20: '20rem',
        21: '21rem',
        22: '22rem',
        23: '23rem',
        24: '24rem',
        25: '25rem',
        26: '26rem',
        27: '27rem',
        28: '28rem',
        29: '29rem',
        30: '30rem',
        31: '31rem',
        32: '32rem',
        33: '33rem',
        34: '34rem',
        35: '35rem',
        36: '36rem',
        37: '37rem',
        38: '38rem',
        39: '39rem',
        40: '40rem',
        41: '41rem',
        42: '42rem',
        43: '43rem',
        44: '44rem',
        45: '45rem',
        46: '46rem',
        47: '47rem',
        48: '48rem',
        49: '49rem',
        50: '50rem',
        51: '51rem',
        52: '52rem',
        53: '53rem',
        54: '54rem',
        55: '55rem',
        56: '56rem',
        57: '57rem',
        58: '58rem',
        59: '59rem',
        60: '60rem',
        61: '61rem',
        62: '62rem',
        63: '63rem',
        64: '64rem',
        65: '65rem',
        66: '66rem',
        67: '67rem',
        68: '68rem',
        69: '69rem',
        70: '70rem',
        71: '71rem',
        72: '72rem',
        73: '73rem',
        74: '74rem',
        75: '75rem',
        76: '76rem',
        77: '77rem',
        78: '78rem',
        79: '79rem',
        80: '80rem',
        81: '81rem',
        82: '82rem',
        83: '83rem',
        84: '84rem',
        85: '85rem',
        86: '86rem',
        87: '87rem',
      },
      maxHeight: {
        1: '1rem',
        2: '2rem',
        3: '3rem',
        4: '4rem',
        5: '5rem',
        6: '6rem',
        7: '7rem',
        8: '8rem',
        9: '9rem',
        10: '10rem',
        11: '11rem',
        12: '12rem',
        13: '13rem',
        14: '14rem',
        15: '15rem',
        16: '16rem',
        17: '17rem',
        18: '18rem',
        19: '19rem',
        20: '20rem',
        21: '21rem',
        22: '22rem',
        23: '23rem',
        24: '24rem',
        25: '25rem',
        26: '26rem',
        27: '27rem',
        28: '28rem',
        29: '29rem',
        30: '30rem',
        31: '31rem',
        32: '32rem',
        33: '33rem',
        34: '34rem',
        35: '35rem',
        36: '36rem',
        37: '37rem',
        38: '38rem',
        39: '39rem',
        40: '40rem',
        41: '41rem',
        42: '42rem',
        43: '43rem',
        44: '44rem',
        45: '45rem',
        46: '46rem',
        47: '47rem',
        48: '48rem',
        49: '49rem',
        50: '50rem',
        51: '51rem',
        52: '52rem',
        53: '53rem',
        54: '54rem',
        55: '55rem',
        56: '56rem',
        57: '57rem',
        58: '58rem',
        59: '59rem',
        60: '60rem',
        61: '61rem',
        62: '62rem',
        63: '63rem',
        64: '64rem',
        65: '65rem',
        66: '66rem',
        67: '67rem',
        68: '68rem',
        69: '69rem',
        70: '70rem',
        71: '71rem',
        72: '72rem',
        73: '73rem',
        74: '74rem',
        75: '75rem',
        76: '76rem',
        77: '77rem',
        78: '78rem',
        79: '79rem',
        80: '80rem',
        81: '81rem',
        82: '82rem',
        83: '83rem',
        84: '84rem',
        85: '85rem',
        86: '86rem',
        87: '87rem',
      },
      borderWidth: {
        underline: 'border-bottom-width',
      },
    },
    spacing: {
      0.125: '0.125rem',
      0.25: '0.25rem',
      0.5: '0.5rem',
      1: '1rem',
      2: '2rem',
      3: '3rem',
      4: '4rem',
      5: '5rem',
      6: '6rem',
      7: '7rem',
      8: '8rem',
      9: '9rem',
      10: '10rem',
      11: '11rem',
      12: '12rem',
      13: '13rem',
      14: '14rem',
      15: '15rem',
      16: '16rem',
      17: '17rem',
      18: '18rem',
      19: '19rem',
      20: '20rem',
      21: '21rem',
      22: '22rem',
      23: '23rem',
      24: '24rem',
      25: '25rem',
      26: '26rem',
      27: '27rem',
      28: '28rem',
      29: '29rem',
      30: '30rem',
      31: '31rem',
      32: '32rem',
      33: '33rem',
      34: '34rem',
      35: '35rem',
      36: '36rem',
      37: '37rem',
      38: '38rem',
      39: '39rem',
      40: '40rem',
      41: '41rem',
      42: '42rem',
      43: '43rem',
      44: '44rem',
      45: '45rem',
      46: '46rem',
      47: '47rem',
      48: '48rem',
      49: '49rem',
      50: '50rem',
      51: '51rem',
      52: '52rem',
      53: '53rem',
      54: '54rem',
      55: '55rem',
      56: '56rem',
      57: '57rem',
      58: '58rem',
      59: '59rem',
      60: '60rem',
      61: '61rem',
      62: '62rem',
      63: '63rem',
      64: '64rem',
      65: '65rem',
      66: '66rem',
      67: '67rem',
      68: '68rem',
      69: '69rem',
      70: '70rem',
      71: '71rem',
      72: '72rem',
      73: '73rem',
      74: '74rem',
      75: '75rem',
      76: '76rem',
      77: '77rem',
      78: '78rem',
      79: '79rem',
      80: '80rem',
      81: '81rem',
      82: '82rem',
      83: '83rem',
      84: '84rem',
      85: '85rem',
      86: '86rem',
      87: '87rem',
    },
    customForms: (theme) => ({
      default: {
        input: {
          appearance: 'none',
          backgroundColor: theme('colors.white', colors.white),
          borderColor: theme('colors.gray.300', colors.gray[300]),
          borderWidth: borderWidth.underline,
          borderRadius: borderRadius.md,
          paddingTop: spacing[2],
          paddingRight: spacing[3],
          paddingBottom: spacing[2],
          paddingLeft: spacing[3],
          fontSize: baseFontSize,
          lineHeight: baseLineHeight,
          '&::placeholder': {
            color: theme('colors.white.400', colors.white[400]),
          },
          '&:focus': {
            outline: 'none',
            '--ring-offset-shadow': `0 0 0 var(--ring-offset-width, 0) var(--ring-offset-color, #fff)`,
            '--ring-shadow': `0 0 0 calc(1px + var(--ring-offset-width, 0px)) var(--ring-color, ${theme(
              'colors.blue.600',
              colors.blue[600]
            )})`,
            'box-shadow': [
              `var(--ring-offset-shadow)`,
              `var(--ring-shadow)`,
              `var(--box-shadow, 0 0 #0000)`,
            ].join(', '),
            borderColor: theme('colors.blue.600', colors.blue[600]),
          },
        },
      },
    }),
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    translate: ['responsive', 'hover', 'focus', 'group-hover'],
    boxShadow: ['responsive', 'hover', 'focus', 'focus-within'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
