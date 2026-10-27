import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#fff8e7' } }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="ariza/index" />
      <Stack.Screen name="ariza/[id]" />
      <Stack.Screen name="ariza/yeni" />
      <Stack.Screen name="urun/index" />
      <Stack.Screen name="urun/[id]" />
      <Stack.Screen name="ders/index" />
      <Stack.Screen name="ders/[id]" />
    </Stack>
  );
}
