import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ProductCard({ product, onPress }) {
  const inStock = product.stock > 0;
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <View style={styles.top}>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={[styles.stock, !inStock && styles.outOfStock]}>{inStock ? 'Stokta' : 'Stokta yok'}</Text>
      </View>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price.toLocaleString('tr-TR')} TL</Text>
      <Text style={styles.link}>Ürün detayına git ›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 18, padding: 18, marginBottom: 14, borderWidth: 1, borderColor: '#f3d9a4' },
  pressed: { opacity: 0.8 },
  top: { flexDirection: 'row', justifyContent: 'space-between' },
  category: { color: '#d97706', fontWeight: '700' },
  stock: { color: '#15803d', fontWeight: '700' },
  outOfStock: { color: '#dc2626' },
  name: { color: '#181a20', fontSize: 18, fontWeight: '800', marginTop: 16 },
  price: { color: '#d97706', fontSize: 20, fontWeight: '800', marginTop: 8 },
  link: { color: '#d97706', fontWeight: '700', marginTop: 16 },
});
