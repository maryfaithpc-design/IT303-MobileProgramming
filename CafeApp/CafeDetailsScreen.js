import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

export default function CafeDetailsScreen({ navigation, route }) {
  // Read the cafe object passed from the list screen
  const { cafe } = route.params;

  // Some cafes have a phone number, others only an email
  const contact = cafe.phone || cafe.email || 'Not listed';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{cafe.name.charAt(0)}</Text>
      </View>
      <Text style={styles.name}>{cafe.name}</Text>
      <Text style={styles.city}>Calbayog City, Samar</Text>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Address</Text>
        <Text style={styles.value}>{cafe.address}</Text>

        <Text style={styles.label}>Contact</Text>
        <Text style={styles.value}>{contact}</Text>

        <Text style={styles.label}>Hours</Text>
        <Text style={styles.value}>{cafe.hours}</Text>

        <Text style={styles.label}>About</Text>
        <Text style={styles.value}>{cafe.description}</Text>
      </View>

      {/* Manual reverse navigation */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>Back to List</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fef3c7',
    alignItems: 'center',
    padding: 24,
  },
  badge: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: '#78350f',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  badgeText: { color: '#fff', fontSize: 38, fontWeight: '800' },
  name: {
    fontSize: 28,
    fontWeight: '800',
    color: '#78350f',
    marginTop: 12,
    textAlign: 'center',
  },
  city: { fontSize: 16, color: '#92400e', marginTop: 4, marginBottom: 20 },
  infoBox: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 18,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    color: '#b45309',
    textTransform: 'uppercase',
    marginTop: 10,
  },
  value: { fontSize: 16, color: '#1f2937', marginTop: 3, lineHeight: 22 },
  backBtn: {
    marginTop: 24,
    backgroundColor: '#78350f',
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 12,
  },
  backText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});