import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { products } from '../../data/products';

export default function ProductDetail() {
  const { id } = useLocalSearchParams();
  const product = products.find((item) => item.id === id);
  return <SafeAreaView style={styles.safe}><View style={styles.content}><Pressable onPress={() => router.back()}><Text style={styles.back}>‹ Ürün listesine dön</Text></Pressable>{product ? <View style={styles.card}><Text style={styles.category}>{product.category}</Text><Text style={styles.title}>{product.name}</Text><Text style={styles.price}>{product.price.toLocaleString('tr-TR')} TL</Text><Text style={styles.description}>{product.description}</Text><Text style={styles.stock}>{product.stock > 0 ? `Stokta · ${product.stock} adet` : 'Stokta yok'}</Text></View> : <View style={styles.card}><Text style={styles.error}>Ürün bulunamadı</Text><Text style={styles.description}>{id} kodlu ürün katalogda yer almıyor.</Text></View>}</View></SafeAreaView>;
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff8e7' }, content: { padding: 20, paddingTop: 28 }, back: { color: '#d97706', fontWeight: '800', marginBottom: 24 }, card: { backgroundColor: '#fff', borderRadius: 18, padding: 22, borderWidth: 1, borderColor: '#f3d9a4' }, category: { color: '#d97706', fontWeight: '800' }, title: { color: '#181a20', fontSize: 28, fontWeight: '900', marginTop: 14 }, price: { color: '#d97706', fontSize: 23, fontWeight: '900', marginTop: 10 }, description: { color: '#6b5b3e', fontSize: 16, lineHeight: 24, marginTop: 22 }, stock: { color: '#92400e', fontWeight: '800', marginTop: 24 }, error: { color: '#b45309', fontSize: 22, fontWeight: '900' },
});
