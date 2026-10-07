import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { shared, colors, formatPrice } from '../theme';

export default function ShoeDetailsScreen({ navigation, route }) {
  const { shoe } = route.params;
  const [size, setSize] = useState(null);

  return (
    <ScrollView style={shared.screen} contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={styles.brand}>{shoe.brand}</Text>
      <Text style={shared.title}>{shoe.name}</Text>
      <Text style={styles.price}>{formatPrice(shoe.price)}</Text>
      <Text style={styles.meta}>{shoe.type}</Text>
      <Text style={shared.body}>{shoe.description}</Text>

      <Text style={styles.heading}>Select size (US)</Text>
      <View style={styles.sizes}>
        {shoe.sizes.map((s) => (
          <TouchableOpacity
            key={s}
            style={[styles.size, size === s && styles.sizeActive]}
            onPress={() => setSize(s)}
          >
            <Text style={[styles.sizeText, size === s && { color: '#fff' }]}>{s}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.meta}>{size ? `Selected size: ${size}` : 'No size selected'}</Text>

      <TouchableOpacity style={shared.button} onPress={() => navigation.goBack()}>
        <Text style={shared.buttonText}>Go back to list</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[shared.button, shared.buttonAlt]}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={shared.buttonText}>Back to home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  brand: { color: colors.muted, fontSize: 16, marginBottom: 2 },
  price: { fontSize: 24, fontWeight: '800', color: colors.orange, marginTop: 4 },
  meta: { color: colors.muted, marginVertical: 8 },
  heading: { fontSize: 18, fontWeight: '700', color: colors.ink, marginTop: 20, marginBottom: 8 },
  sizes: { flexDirection: 'row', flexWrap: 'wrap' },
  size: {
    borderWidth: 1.5, borderColor: colors.ink, borderRadius: 8,
    paddingVertical: 10, paddingHorizontal: 16, marginRight: 8, marginBottom: 8,
  },
  sizeActive: { backgroundColor: colors.ink },
  sizeText: { fontWeight: '700', color: colors.ink },
});