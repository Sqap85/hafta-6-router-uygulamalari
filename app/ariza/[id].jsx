import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { tickets } from '../../data/tickets';
import StatusBadge from '../../components/StatusBadge';

export default function TicketDetail() {
  const { id } = useLocalSearchParams();
  const ticket = tickets.find((item) => item.id === id);
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.content}>
        <Pressable onPress={() => router.back()}><Text style={styles.back}>‹ Arıza listesine dön</Text></Pressable>
        {!ticket ? (
          <View style={styles.empty}><Text style={styles.emptyTitle}>Arıza bulunamadı</Text><Text style={styles.emptyText}>#{id} numaralı kayıt mevcut değil.</Text><Pressable onPress={() => router.replace('/ariza')} style={styles.button}><Text style={styles.buttonText}>Listeye dön</Text></Pressable></View>
        ) : (
          <View style={styles.card}>
            <Text style={styles.id}>ARIZA #{ticket.id}</Text><Text style={styles.title}>{ticket.title}</Text>
            <StatusBadge status={ticket.status} />
            <Text style={styles.label}>Konum</Text><Text style={styles.value}>{ticket.location}</Text>
            <Text style={styles.label}>Açıklama</Text><Text style={styles.value}>{ticket.description}</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff8e7' }, content: { padding: 20, paddingTop: 28 }, back: { color: '#d97706', fontWeight: '800', marginBottom: 24 },
  card: { backgroundColor: '#fff', borderRadius: 18, padding: 22, borderWidth: 1, borderColor: '#f3d9a4' }, id: { color: '#a16207', fontWeight: '800' }, title: { color: '#181a20', fontSize: 25, fontWeight: '900', marginVertical: 14 }, label: { color: '#a16207', fontWeight: '800', marginTop: 24 }, value: { color: '#3f3422', fontSize: 16, lineHeight: 24, marginTop: 6 },
  empty: { backgroundColor: '#fff', padding: 24, borderRadius: 18 }, emptyTitle: { color: '#b45309', fontSize: 21, fontWeight: '900' }, emptyText: { color: '#6b5b3e', marginTop: 10 }, button: { backgroundColor: '#f7931a', padding: 14, borderRadius: 10, alignItems: 'center', marginTop: 22 }, buttonText: { color: '#181a20', fontWeight: '800' },
});
