import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { products } from '../../data/products';
import ProductCard from '../../components/ProductCard';

export default function ProductList() {
  return <SafeAreaView style={styles.safe}><FlatList data={products} keyExtractor={(item) => item.id} contentContainerStyle={styles.content} ListHeaderComponent={<View><Pressable onPress={() => router.back()}><Text style={styles.back}>‹ Ana menü</Text></Pressable><Text style={styles.eyebrow}>UYGULAMA 2</Text><Text style={styles.title}>Mini Ürün Kataloğu</Text><Text style={styles.subtitle}>Teknoloji mağazasının güncel ürünleri.</Text></View>} renderItem={({ item }) => <ProductCard product={item} onPress={() => router.push(`/urun/${item.id}`)} />} /></SafeAreaView>;
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff8e7' }, content: { padding: 20, paddingTop: 28 }, back: { color: '#d97706', fontWeight: '800', marginBottom: 24 }, eyebrow: { color: '#d97706', fontSize: 12, fontWeight: '800', letterSpacing: 1 }, title: { color: '#181a20', fontSize: 30, fontWeight: '900', marginTop: 8 }, subtitle: { color: '#6b5b3e', marginTop: 8, marginBottom: 20 },
});
