import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { CAFES } from '../data';

export default function CafeListScreen({ navigation, route }) {
  // Read the parameter sent from the Home screen
  const { heading } = route.params;

  const renderCafe = ({ item }) => (
    // Pass the whole cafe object to the Details screen
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('CafeDetails', { cafe: item })}
    >
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{item.name.charAt(0)}</Text>
      </View>
      <View style={styles.cardText}>
        <Text style={styles.cardName}>{item.name}</Text>
        <Text style={styles.cardAddress} numberOfLines={2}>
          {item.address}
        </Text>
      </View>
      <Text style={styles.arrow}>{'>'}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>
      <FlatList
        data={CAFES}
        keyExtractor={(item) => item.id}
        renderItem={renderCafe}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fef3c7', padding: 16 },
  heading: { fontSize: 22, fontWeight: '800', color: '#78350f', marginBottom: 12 },
  list: { paddingBottom: 10 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  badge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#78350f',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  badgeText: { color: '#fff', fontSize: 20, fontWeight: '700' },
  cardText: { flex: 1 },
  cardName: { fontSize: 18, fontWeight: '700', color: '#1f2937' },
  cardAddress: { fontSize: 14, color: '#92400e', marginTop: 2 },
  arrow: { fontSize: 20, color: '#b45309', fontWeight: '700', marginLeft: 8 },
  backBtn: {
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#78350f',
  },
  backText: { color: '#78350f', fontWeight: '700', fontSize: 15 },
});