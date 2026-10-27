import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';

const options = [
  { route: '/ariza', title: 'Arıza Takip', text: 'Ticket listesi ve dinamik arıza detayları', color: '#f7931a' },
  { route: '/urun', title: 'Mini Ürün Kataloğu', text: 'Ürün kartları, stok ve ürün detayları', color: '#f7931a' },
  { route: '/ders', title: 'Ders Programı', text: 'Haftalık dersler ve dinamik ders detayları', color: '#f7931a' },
];

export default function Home() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.content}>
        <Text style={styles.eyebrow}>MOBİL PROGRAMLAMA · HAFTA 6</Text>
        <Text style={styles.title}>Router uygulamaları</Text>
        <Text style={styles.subtitle}>Üç senaryoyu tek projede, yeniden kullanılabilir bileşenlerle keşfet.</Text>
        {options.map((option) => (
          <Pressable key={option.route} onPress={() => router.push(option.route)} style={({ pressed }) => [styles.card, { borderLeftColor: option.color }, pressed && styles.pressed]}>
            <Text style={[styles.cardTitle, { color: option.color }]}>{option.title}</Text>
            <Text style={styles.cardText}>{option.text}</Text>
            <Text style={[styles.open, { color: option.color }]}>Uygulamayı aç ›</Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff8e7' },
  content: { padding: 22, paddingTop: 54 },
  eyebrow: { color: '#a16207', fontSize: 12, fontWeight: '800', letterSpacing: 1 },
  title: { color: '#181a20', fontSize: 32, fontWeight: '900', marginTop: 12 },
  subtitle: { color: '#6b5b3e', fontSize: 16, lineHeight: 24, marginTop: 10, marginBottom: 26 },
  card: { backgroundColor: '#fff', borderLeftWidth: 5, borderRadius: 16, padding: 20, marginBottom: 14, shadowColor: '#181a20', shadowOpacity: 0.08, shadowRadius: 10, elevation: 2 },
  pressed: { opacity: 0.78 },
  cardTitle: { fontSize: 19, fontWeight: '900' },
  cardText: { color: '#6b5b3e', marginTop: 7 },
  open: { fontWeight: '800', marginTop: 18 },
});
