import { create } from '@storybook/theming/create';
import colorTokens from '../../../proprietary/design-tokens/src/brand/color.json';
import typographyTokens from '../../../proprietary/design-tokens/src/brand/typography.json';
import '../../../proprietary/font/src/font.css';

export default create({
  base: 'light',
  colorPrimary: colorTokens['rijkshuisstijl']['color']['donkerblauw']['basis'].value,
  colorSecondary: colorTokens['rijkshuisstijl']['color']['hemelblauw']['basis'].value,

  // UI
  appBg: colorTokens['rijkshuisstijl']['color']['grijs']['tint-2'].value,
  appContentBg: '#ffffff',
  appBorderColor: colorTokens['rijkshuisstijl']['color']['grijs']['tint-6'].value,
  appBorderRadius: 0,

  textColor: '#000000',

  barTextColor: '#000000',
  barSelectedColor: colorTokens['rijkshuisstijl']['color']['donkerblauw']['basis'].value,
  barBg: colorTokens['rijkshuisstijl']['color']['grijs']['tint-1'].value,

  // Typography
  fontBase: typographyTokens['rijkshuisstijl']['typography']['sans-serif-fallback']['font-family'].value,
  fontCode: 'monospace',

  brandTitle: 'NL Design System ❤️ Rijkshuisstijl',
  brandUrl: 'https://github.com/nl-design-system/rijkshuisstijl-design-tokens',
});
