import { StyleSheet } from 'react-native';

export const colors = {
  bg: '#F4F4F2',
  ink: '#14213D',
  orange: '#FF6B2C',
  card: '#FFFFFF',
  text: '#1B1B1B',
  muted: '#6B7280',
};

export const shared = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg, padding: 20 },
  title: { fontSize: 28, fontWeight: '800', color: colors.ink },
  body: { fontSize: 16, lineHeight: 24, color: colors.text },
  button: {
    backgroundColor: colors.ink,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  buttonAlt: { backgroundColor: colors.orange },
});

// Adds commas and the peso sign, e.g. 8495 -> ₱8,495
export const formatPrice = (n) =>
  '\u20B1' + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');