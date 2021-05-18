import { create } from '@storybook/theming/create';
import colorTokens from '../../../proprietary/design-tokens/src/brand/color.json';
import typographyTokens from '../../../proprietary/design-tokens/src/brand/typography.json';
import '../../../proprietary/font/src/font.css';

export default create({
  base: 'light',
  colorPrimary: colorTokens['color']['donkerblauw']['basis'].value,
  colorSecondary: colorTokens['color']['hemelblauw']['basis'].value,

  // UI
  appBg: colorTokens['color']['grijs']['tint-2'].value,
  appContentBg: '#ffffff',
  appBorderColor: colorTokens['color']['grijs']['tint-6'].value,
  appBorderRadius: 0,

  textColor: '#000000',

  barTextColor: '#000000',
  barSelectedColor: colorTokens['color']['donkerblauw']['basis'].value,
  barBg: colorTokens['color']['grijs']['tint-1'].value,

  // Typography
  fontBase: typographyTokens['typography']['sans-serif-fallback']['font-family'].value,
  fontCode: 'monospace',

  brandTitle: 'NL Design System ❤️ Rijkshuisstijl',
  brandUrl: 'https://github.com/nl-design-system/rijkshuisstijl-design-tokens',
});
