const baseColors = {
  white: '#FFFFFF',
  black: '#000000',

  gray100: '#E1E1E6',
  gray200: '#C4C4CC',
  gray300: '#8D8D99',
  gray400: '#7C7C8A',
  gray500: '#505059',
  gray600: '#323238',
  gray700: '#29292E',
  gray800: '#202024',
  gray900: '#121214',
  gray950: '#09090A',

  nexty300: '#996DFF',
  nexty500: '#8257E5',
  nexty700: '#633BBC',
  nexty900: '#271A45',
}

const aliases = {
  'text-title': baseColors.gray100,
  'text-base': baseColors.gray200,
}

export const colors = { ...baseColors, ...aliases }
