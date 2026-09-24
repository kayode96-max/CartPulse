export const colors = {
  light: {
    background: '#FAF8FF',
    surface: '#FFFFFF',
    surfaceContainerLow: '#F2F3FF',
    surfaceContainer: '#EAEDFF',
    surfaceContainerHigh: '#E2E7FF',
    surfaceContainerHighest: '#DAE2FD',
    text: '#131B2E',
    textSecondary: '#3E4943',
    outline: '#6E7A73',
    outlineVariant: '#BDC9C1',
    primary: '#047857',
    primaryStrong: '#005D42',
    primaryContainer: '#9FFDD3',
    accent: '#10B981',
    accentBright: '#34D399',
    warning: '#F59E0B',
    error: '#EF4444',
    errorStrong: '#BA1A1A',
    onPrimary: '#FFFFFF',
  },
  dark: {
    background: '#0B0F17',
    surface: '#111827',
    surfaceContainerLow: '#181C24',
    surfaceContainer: '#1C2028',
    surfaceContainerHigh: '#262A33',
    surfaceContainerHighest: '#31353E',
    text: '#F9FAFB',
    textSecondary: '#9CA3AF',
    outline: '#86948A',
    outlineVariant: '#3C4A42',
    primary: '#10B981',
    primaryStrong: '#4EDEA3',
    primaryContainer: '#10B981',
    accent: '#10B981',
    accentBright: '#34D399',
    warning: '#F59E0B',
    error: '#EF4444',
    errorStrong: '#FFB4AB',
    onPrimary: '#0B0F17',
  },
};

export const typography = {
  displayLg: { fontFamily: 'Space Grotesk', fontSize: 36, lineHeight: 44, fontWeight: '700', letterSpacing: -1.08 },
  displayLgMobile: { fontFamily: 'Space Grotesk', fontSize: 28, lineHeight: 34, fontWeight: '700', letterSpacing: -0.56 },
  headlineLg: { fontFamily: 'Space Grotesk', fontSize: 24, lineHeight: 30, fontWeight: '600', letterSpacing: -0.48 },
  headlineMd: { fontFamily: 'Space Grotesk', fontSize: 20, lineHeight: 26, fontWeight: '600', letterSpacing: -0.2 },
  headlineSm: { fontFamily: 'Space Grotesk', fontSize: 16, lineHeight: 22, fontWeight: '600' },
  bodyLg: { fontFamily: 'Plus Jakarta Sans', fontSize: 16, lineHeight: 24, fontWeight: '400' },
  bodyMd: { fontFamily: 'Plus Jakarta Sans', fontSize: 14, lineHeight: 20, fontWeight: '400' },
  bodySm: { fontFamily: 'Plus Jakarta Sans', fontSize: 12, lineHeight: 16, fontWeight: '400' },
  labelLg: { fontFamily: 'Plus Jakarta Sans', fontSize: 14, lineHeight: 18, fontWeight: '600', letterSpacing: 0.14 },
  labelMd: { fontFamily: 'Plus Jakarta Sans', fontSize: 12, lineHeight: 16, fontWeight: '600', letterSpacing: 0.24 },
  labelSm: { fontFamily: 'Plus Jakarta Sans', fontSize: 10, lineHeight: 14, fontWeight: '700', letterSpacing: 0.5 },
  metricDisplay: { fontFamily: 'Space Grotesk', fontSize: 32, lineHeight: 36, fontWeight: '700', letterSpacing: -0.96 },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  gutter: 16,
  margin: 16,
};

export const radii = {
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24,
  full: 9999,
};

export const elevation = {
  card: {
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.05,
    elevation: 2,
  },
  floating: {
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 24,
    shadowOpacity: 0.12,
    elevation: 6,
  },
  modal: {
    shadowOffset: { width: 0, height: 20 },
    shadowRadius: 32,
    shadowOpacity: 0.24,
    elevation: 12,
  },
};

export const statusColors = {
  safe: '#047857',
  warning: '#F59E0B',
  danger: '#EF4444',
};
