import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, SafeAreaView } from 'react-native';
import { ThemeProvider, useTheme, typography, spacing, radii, elevation } from './src/theme';

function ThemePreview() {
  const { colors, isDark, toggle } = useTheme();

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <StatusBar style={isDark ? 'light' : 'dark'} />

      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={[styles.eyebrow, { color: colors.accentBright }]}>CARTPULSE</Text>
            <Text style={[styles.title, { color: colors.text }]}>Design system</Text>
          </View>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            onPress={toggle}
            style={[styles.themeButton, { backgroundColor: colors.surfaceContainer }]}
          >
            <Text style={[styles.themeButtonText, { color: colors.text }]}>
              {isDark ? 'Light' : 'Dark'}
            </Text>
          </Pressable>
        </View>

        <View style={[styles.card, elevation.card, { backgroundColor: colors.surface, borderColor: colors.outlineVariant }]}>
          <Text style={[styles.cardLabel, { color: colors.textSecondary }]}>RUNNING TOTAL</Text>
          <Text style={[styles.metric, { color: colors.primaryStrong }]}>₦24,500</Text>
          <Text style={[styles.body, { color: colors.textSecondary }]}>of ₦30,000 budget</Text>

          <View style={[styles.track, { backgroundColor: colors.surfaceContainerHighest }]}>
            <View style={[styles.progress, { backgroundColor: colors.primary, width: '82%' }]} />
          </View>

          <View style={styles.statusRow}>
            <Text style={[styles.status, { color: colors.warning }]}>82% used</Text>
            <Text style={[styles.body, { color: colors.textSecondary }]}>₦5,500 remaining</Text>
          </View>
        </View>

        <View style={[styles.card, elevation.card, { backgroundColor: colors.surface, borderColor: colors.outlineVariant }]}>
          <Text style={[styles.cardLabel, { color: colors.textSecondary }]}>TOKENS</Text>
          <View style={styles.swatches}>
            <View style={styles.swatchItem}>
              <View style={[styles.swatch, { backgroundColor: colors.primary }]} />
              <Text style={[styles.swatchText, { color: colors.text }]}>Primary</Text>
            </View>
            <View style={styles.swatchItem}>
              <View style={[styles.swatch, { backgroundColor: colors.accentBright }]} />
              <Text style={[styles.swatchText, { color: colors.text }]}>Mint</Text>
            </View>
            <View style={styles.swatchItem}>
              <View style={[styles.swatch, { backgroundColor: colors.warning }]} />
              <Text style={[styles.swatchText, { color: colors.text }]}>Warning</Text>
            </View>
            <View style={styles.swatchItem}>
              <View style={[styles.swatch, { backgroundColor: colors.error }]} />
              <Text style={[styles.swatchText, { color: colors.text }]}>Error</Text>
            </View>
          </View>
        </View>

        <Pressable
          accessibilityRole="button"
          style={[styles.primaryButton, { backgroundColor: colors.primary }, elevation.floating]}
        >
          <Text style={[styles.primaryButtonText, { color: colors.onPrimary }]}>Scan item</Text>
        </Pressable>

        <Text style={[styles.caption, { color: colors.textSecondary }]}>
          {isDark ? 'Dark theme' : 'Light theme'} • Theme tokens are centralized in src/theme
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ThemePreview />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: {
    flex: 1,
    paddingHorizontal: spacing.margin,
    paddingVertical: spacing.md,
    gap: spacing.lg,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.md,
  },
  eyebrow: {
    ...typography.labelSm,
    marginBottom: spacing.xs,
  },
  title: {
    ...typography.displayLgMobile,
  },
  themeButton: {
    minHeight: 44,
    paddingHorizontal: spacing.md,
    justifyContent: 'center',
    borderRadius: radii.full,
  },
  themeButtonText: {
    ...typography.labelLg,
  },
  card: {
    borderWidth: 1,
    borderRadius: radii.lg,
    padding: spacing.lg,
  },
  cardLabel: {
    ...typography.labelSm,
    marginBottom: spacing.sm,
  },
  metric: {
    ...typography.metricDisplay,
  },
  body: {
    ...typography.bodyMd,
  },
  track: {
    height: 8,
    borderRadius: radii.full,
    overflow: 'hidden',
    marginTop: spacing.md,
  },
  progress: {
    height: '100%',
    borderRadius: radii.full,
  },
  statusRow: {
    marginTop: spacing.sm,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: spacing.md,
  },
  status: {
    ...typography.labelLg,
  },
  swatches: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
  },
  swatchItem: {
    width: '45%',
    gap: spacing.sm,
  },
  swatch: {
    height: 40,
    borderRadius: radii.md,
  },
  swatchText: {
    ...typography.bodySm,
  },
  primaryButton: {
    minHeight: 56,
    borderRadius: radii.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    ...typography.labelLg,
  },
  caption: {
    ...typography.bodySm,
    textAlign: 'center',
    marginTop: 'auto',
  },
});
