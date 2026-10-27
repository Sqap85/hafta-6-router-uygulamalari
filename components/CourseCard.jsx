import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function CourseCard({ course, onPress }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <View style={styles.row}><Text style={styles.day}>{course.day}</Text><Text style={styles.time}>{course.time}</Text></View>
      <Text style={styles.name}>{course.name}</Text>
      <Text style={styles.room}>{course.room} · {course.instructor}</Text>
      <Text style={styles.link}>Ders detayları ›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 18, padding: 18, marginBottom: 14, borderWidth: 1, borderColor: '#f3d9a4' },
  pressed: { opacity: 0.8 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  day: { color: '#d97706', fontWeight: '800' },
  time: { color: '#6b5b3e', fontWeight: '700' },
  name: { color: '#181a20', fontSize: 18, fontWeight: '800', marginTop: 16 },
  room: { color: '#6b5b3e', marginTop: 7 },
  link: { color: '#d97706', fontWeight: '700', marginTop: 16 },
});
