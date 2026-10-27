import { StyleSheet, Text, View } from 'react-native';

const colors = {
  Bekliyor: { background: '#fff3cd', text: '#b45309' },
  İşlemde: { background: '#ffedd5', text: '#c2410c' },
  Çözüldü: { background: '#fef3c7', text: '#92400e' },
};

export default function StatusBadge({ status }) {
  const color = colors[status] || { background: '#f1f5f9', text: '#475569' };
  return (
    <View style={[styles.badge, { backgroundColor: color.background }]}>
      <Text style={[styles.text, { color: color.text }]}>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: { borderRadius: 999, paddingHorizontal: 10, paddingVertical: 6 },
  text: { fontSize: 12, fontWeight: '700' },
});
