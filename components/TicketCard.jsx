import { Pressable, StyleSheet, Text, View } from 'react-native';
import StatusBadge from './StatusBadge';

export default function TicketCard({ ticket, onPress }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <View style={styles.row}>
        <Text style={styles.id}>#{ticket.id}</Text>
        <StatusBadge status={ticket.status} />
      </View>
      <Text style={styles.title}>{ticket.title}</Text>
      <Text style={styles.location}>{ticket.location}</Text>
      <Text style={styles.link}>Detayı görüntüle ›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 18, padding: 18, marginBottom: 14, borderWidth: 1, borderColor: '#f3d9a4' },
  pressed: { opacity: 0.8 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  id: { color: '#a16207', fontWeight: '700' },
  title: { color: '#181a20', fontSize: 17, fontWeight: '800', marginTop: 16 },
  location: { color: '#6b5b3e', marginTop: 7 },
  link: { color: '#d97706', fontWeight: '700', marginTop: 16 },
});
