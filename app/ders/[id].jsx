import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { courses } from '../../data/courses';

export default function CourseDetail() {
  const { id } = useLocalSearchParams();
  const course = courses.find((item) => item.id === id);
  return <SafeAreaView style={styles.safe}><View style={styles.content}><Pressable onPress={() => router.back()}><Text style={styles.back}>‹ Ders listesine dön</Text></Pressable>{course ? <View style={styles.card}><Text style={styles.title}>{course.name}</Text><Info label="Gün" value={course.day} /><Info label="Saat" value={course.time} /><Info label="Sınıf" value={course.room} /><Info label="Öğretim elemanı" value={course.instructor} /></View> : <View style={styles.card}><Text style={styles.error}>Ders bulunamadı</Text><Text style={styles.text}>{id} kodlu ders tanımlı değil.</Text></View>}</View></SafeAreaView>;
}

function Info({ label, value }) { return <View style={styles.info}><Text style={styles.label}>{label}</Text><Text style={styles.value}>{value}</Text></View>; }

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff8e7' }, content: { padding: 20, paddingTop: 28 }, back: { color: '#d97706', fontWeight: '800', marginBottom: 24 }, card: { backgroundColor: '#fff', borderRadius: 18, padding: 22, borderWidth: 1, borderColor: '#f3d9a4' }, title: { color: '#181a20', fontSize: 28, fontWeight: '900', marginBottom: 20 }, info: { borderTopWidth: 1, borderTopColor: '#f3d9a4', paddingVertical: 14 }, label: { color: '#a16207', fontWeight: '800' }, value: { color: '#3f3422', fontSize: 17, marginTop: 5 }, error: { color: '#b45309', fontSize: 22, fontWeight: '900' }, text: { color: '#6b5b3e', marginTop: 10 },
});
