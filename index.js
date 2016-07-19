const backgroundColor = '#1b2b34';
const foregroundColor = '#cdd3de';
const borderColor = backgroundColor;
const cursorColor = '#c0c5ce';

const palette = {
  red: '#ec5f67',
  green: '#99c794',
  blue: '#6699cc',
  cyan: '#5fb3b3',
  yellow: '#fac863',
  pink: '#c594c5',
  mediumGray: '#65737e',
  white: '#ffffff'
};

const colors = [
  backgroundColor,
  palette.red,
  palette.green,
  palette.yellow,
  palette.blue,
  palette.pink,
  palette.cyan,
  // light gray
  '#d0d0d0',
  palette.mediumGray,
  palette.red,
  palette.green,
  palette.yellow,
  palette.blue,
  palette.pink,
  palette.cyan,
  palette.white,
  foregroundColor
];

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
      .cursor-node {
        mix-blend-mode: difference;
      }
    `,
    css: `
      ${config.css || ''}
      .header_header {
        top: 0,
        right: 0,
        left: 0
      }
      .tabs_list {
        background-color: #21252b !important;
        border-bottom-color: rgba(0,0,0,.15) !important;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        background-color: ${backgroundColor};
        border-color: rgba(0,0,0,.27) !important;
      }
      .tab_tab.tab_active::before {
        border-bottom-color: ${backgroundColor};
      }
    `,
  });
};
