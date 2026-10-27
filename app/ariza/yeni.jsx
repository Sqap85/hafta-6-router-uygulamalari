import { Alert, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';

export default function NewTicket() {
  const submit = () => Alert.alert('Demo formu', 'Yeni arıza formu gönderildi.', [{ text: 'Tamam', onPress: () => router.back() }]);
  return (
    <SafeAreaView style={styles.safe}><View style={styles.content}><Pressable onPress={() => router.back()}><Text style={styles.back}>‹ Arıza listesine dön</Text></Pressable><Text style={styles.title}>Yeni Arıza</Text><Text style={styles.label}>Başlık</Text><TextInput placeholder="Arıza başlığını yazın" style={styles.input} /><Text style={styles.label}>Konum</Text><TextInput placeholder="Örn. Lab 2" style={styles.input} /><Text style={styles.label}>Açıklama</Text><TextInput placeholder="Sorunu açıklayın" multiline style={[styles.input, styles.multiline]} /><Pressable onPress={submit} style={styles.button}><Text style={styles.buttonText}>Kaydet</Text></Pressable></View></SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff8e7' }, content: { padding: 20, paddingTop: 28 }, back: { color: '#d97706', fontWeight: '800', marginBottom: 24 }, title: { color: '#181a20', fontSize: 30, fontWeight: '900', marginBottom: 20 }, label: { color: '#6b5b3e', fontWeight: '800', marginTop: 14 }, input: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#f3d9a4', borderRadius: 10, padding: 14, marginTop: 7 }, multiline: { minHeight: 110, textAlignVertical: 'top' }, button: { backgroundColor: '#f7931a', borderRadius: 12, padding: 16, alignItems: 'center', marginTop: 24 }, buttonText: { color: '#181a20', fontWeight: '800' },
});
