import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CAFES } from '../data';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calbayog Cafe Hop</Text>
      <Text style={styles.subtitle}>
        Find coffee shops to visit in Calbayog City, Samar.
      </Text>

      {/* navigate() forward and pass a parameter to the next screen */}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('CafeList', {
            heading: `Coffee Shops in Calbayog (${CAFES.length})`,
          })
        }
      >
        <Text style={styles.buttonText}>Browse Cafes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef3c7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: { fontSize: 32, fontWeight: '800', color: '#78350f' },
  subtitle: {
    fontSize: 16,
    color: '#92400e',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#78350f',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 12,
  },
  buttonText: { color: '#fff', fontSize: 17, fontWeight: '700' },
});