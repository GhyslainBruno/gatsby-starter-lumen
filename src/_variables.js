/**
Global CSS variables for use in CSS and JS

## CSS usage:

  ```css
  backgound: $varName
  ```

## JS usage:

  ```js
  import variables from '../'

  const { blue } = variables
  ```
*/

const baseValue = 1
const unit = 'rem'
const baseFontSize = (baseValue * 1.6) + unit

module.exports = {
  textSelection: '#fff',
  textSelectionBg: '#0685c4',
  // -- Colors
  primary: '#0685c4',
  primaryHover: '#009dea',
  secondary: '#f5f8f9',
  grey: '#8b8b8b',
  danger: '#fb6d77',
  dangerHover: '#fa3d4a',
  // -- Icon sizes
  iconDefault: '35px',
  // -- Fonts
  fontSize: baseFontSize,
  fontSizeTiny: formatFont(1.2),
  fontSizeSmall: formatFont(1.4),
  fontSizeNormal: baseFontSize,
  fontSizeBig: formatFont(1.8),
  fontSizeH1: formatFont(3.0),
  fontSizeH2: formatFont(2.15),
  fontSizeH3: formatFont(1.7),
  fontSizeH4: formatFont(1.25),
  fontSizeH5: baseFontSize,
  fontSizeH6: formatFont(0.85),
  // Content padding
  contentPadding: '50px',
  mobileContentPadding: '20px',
  // -- Indexes
  zIndexHighest: 300,
  zIndexHigher: 200,
  zIndexHigh: 100,
  zIndexNormal: 1,
  zIndexLow: -100,
  zIndexLower: -200,
}

function formatFont(modifier) {
  return (modifier * baseValue) + unit
}
