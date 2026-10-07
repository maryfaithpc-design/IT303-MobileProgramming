import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { shoes } from '../data/shoes';
import { shared, colors, formatPrice } from '../theme';

export default function ShoeListScreen({ navigation, route }) {
  const { brand } = route.params;
  const data = brand === 'All' ? shoes : shoes.filter((s) => s.brand === brand);

  return (
    <View style={shared.screen}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('ShoeDetails', { shoe: item })}
          >
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.meta}>{item.brand} | {item.type}</Text>
            </View>
            <Text style={styles.price}>{formatPrice(item.price)}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={shared.button} onPress={() => navigation.goBack()}>
        <Text style={shared.buttonText}>Back to brands</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderLeftWidth: 5,
    borderLeftColor: colors.orange,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  name: { fontSize: 18, fontWeight: '700', color: colors.ink },
  meta: { color: colors.muted, marginTop: 2 },
  price: { fontSize: 18, fontWeight: '800', color: colors.orange },
});