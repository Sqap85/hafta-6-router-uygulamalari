import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { tickets } from '../../data/tickets';
import TicketCard from '../../components/TicketCard';

export default function TicketList() {
  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        data={tickets}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <View>
            <Pressable onPress={() => router.back()}><Text style={styles.back}>‹ Ana menü</Text></Pressable>
            <Text style={styles.eyebrow}>UYGULAMA 1</Text>
            <Text style={styles.title}>Arıza Listesi</Text>
            <Text style={styles.subtitle}>Kayıt seçerek arıza detayını görüntüleyin.</Text>
            <Pressable onPress={() => router.push('/ariza/yeni')} style={styles.newButton}><Text style={styles.newButtonText}>+ Yeni Arıza</Text></Pressable>
          </View>
        }
        renderItem={({ item }) => <TicketCard ticket={item} onPress={() => router.push(`/ariza/${item.id}`)} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff8e7' },
  content: { padding: 20, paddingTop: 28 },
  back: { color: '#d97706', fontWeight: '800', marginBottom: 24 },
  eyebrow: { color: '#d97706', fontSize: 12, fontWeight: '800', letterSpacing: 1 },
  title: { color: '#181a20', fontSize: 30, fontWeight: '900', marginTop: 8 },
  subtitle: { color: '#6b5b3e', marginTop: 8, marginBottom: 18 },
  newButton: { backgroundColor: '#f7931a', borderRadius: 12, padding: 14, alignItems: 'center', marginBottom: 20 },
  newButtonText: { color: '#fff', fontWeight: '800' },
});
