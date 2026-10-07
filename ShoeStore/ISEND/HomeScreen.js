import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { brands, shoes } from '../data/shoes';
import { shared, colors } from '../theme';

export default function HomeScreen({ navigation }) {
  return (
    <View style={shared.screen}>
      <Text style={shared.title}>Shop by brand</Text>
      <Text style={[shared.body, { color: colors.muted, marginBottom: 16 }]}>
        Choose a brand to see its shoes.
      </Text>

      {brands.map((brand) => {
        const count = shoes.filter((s) => s.brand === brand).length;
        return (
          <TouchableOpacity
            key={brand}
            style={shared.button}
            onPress={() => navigation.navigate('ShoeList', { brand })}
          >
            <Text style={shared.buttonText}>{brand} ({count})</Text>
          </TouchableOpacity>
        );
      })}

      <TouchableOpacity
        style={[shared.button, shared.buttonAlt]}
        onPress={() => navigation.navigate('ShoeList', { brand: 'All' })}
      >
        <Text style={shared.buttonText}>View all shoes</Text>
      </TouchableOpacity>
    </View>
  );
}