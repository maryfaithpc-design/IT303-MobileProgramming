import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';

export default function App() {
  // State: the list of goals and the current text in the input
  const [goals, setGoals] = useState([]);
  const [text, setText] = useState('');

  const addGoal = () => {
    const title = text.trim();
    if (!title) return; // ignore empty input
    const newGoal = { id: Date.now().toString(), title, achieved: false };
    setGoals((prev) => [newGoal, ...prev]);
    setText('');
  };

  const toggleAchieved = (id) => {
    setGoals((prev) =>
      prev.map((goal) =>
        goal.id === id ? { ...goal, achieved: !goal.achieved } : goal
      )
    );
  };

  const deleteGoal = (id) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  };

  const achievedCount = goals.filter((g) => g.achieved).length;
  const progress = goals.length === 0 ? 0 : achievedCount / goals.length;

  const renderGoal = ({ item }) => (
    <View style={[styles.card, item.achieved && styles.cardDone]}>
      {/* Tap the goal to mark it achieved */}
      <TouchableOpacity
        style={styles.cardMain}
        onPress={() => toggleAchieved(item.id)}
        activeOpacity={0.7}
      >
        <Text style={styles.star}>{item.achieved ? '★' : '☆'}</Text>
        <View style={styles.cardTextWrap}>
          <Text style={[styles.goalText, item.achieved && styles.goalTextDone]}>
            {item.title}
          </Text>
          <Text style={styles.status}>
            {item.achieved ? 'Achieved!' : 'Tap when done'}
          </Text>
        </View>
      </TouchableOpacity>

      {/* Delete button */}
      <TouchableOpacity
        style={styles.deleteBtn}
        onPress={() => deleteGoal(item.id)}
      >
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#4c1d95" />
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {/* Header with progress */}
        <View style={styles.header}>
          <Text style={styles.title}>My Bucket List</Text>
          <Text style={styles.subtitle}>
            {goals.length === 0
              ? 'Add your first dream below'
              : `${achievedCount} of ${goals.length} achieved`}
          </Text>
          <View style={styles.progressTrack}>
            <View
              style={[styles.progressFill, { width: `${progress * 100}%` }]}
            />
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              placeholder="e.g. See the northern lights"
              placeholderTextColor="#9ca3af"
              value={text}
              onChangeText={setText}
              onSubmitEditing={addGoal}
              returnKeyType="done"
            />
            <TouchableOpacity style={styles.addBtn} onPress={addGoal}>
              <Text style={styles.addText}>Add</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={goals}
            keyExtractor={(item) => item.id}
            renderItem={renderGoal}
            contentContainerStyle={styles.listContent}
            keyboardShouldPersistTaps="handled"
            ListEmptyComponent={
              <Text style={styles.empty}>
                Your bucket list is empty.{'\n'}Dream big and add a goal!
              </Text>
            }
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#4c1d95' },
  flex: { flex: 1 },

  header: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 24 },
  title: { fontSize: 30, fontWeight: '800', color: '#fff' },
  subtitle: { fontSize: 15, color: '#ddd6fe', marginTop: 4, marginBottom: 14 },
  progressTrack: {
    height: 10,
    backgroundColor: '#6d28d9',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressFill: { height: '100%', backgroundColor: '#fbbf24', borderRadius: 5 },

  body: {
    flex: 1,
    backgroundColor: '#f5f3ff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
  },

  inputRow: { flexDirection: 'row', marginBottom: 16 },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd6fe',
  },
  addBtn: {
    backgroundColor: '#7c3aed',
    borderRadius: 12,
    paddingHorizontal: 20,
    justifyContent: 'center',
    marginLeft: 10,
  },
  addText: { color: '#fff', fontSize: 16, fontWeight: '700' },

  listContent: { paddingBottom: 30 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#c4b5fd',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardDone: { borderLeftColor: '#fbbf24', backgroundColor: '#fffbeb' },
  cardMain: { flex: 1, flexDirection: 'row', alignItems: 'center' },
  star: { fontSize: 28, color: '#f59e0b', marginRight: 12 },
  cardTextWrap: { flex: 1 },
  goalText: { fontSize: 17, fontWeight: '600', color: '#1f2937' },
  goalTextDone: { textDecorationLine: 'line-through', color: '#9ca3af' },
  status: { fontSize: 12, color: '#7c3aed', marginTop: 2 },

  deleteBtn: {
    backgroundColor: '#fee2e2',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginLeft: 8,
  },
  deleteText: { color: '#b91c1c', fontWeight: '700', fontSize: 14 },

  empty: {
    textAlign: 'center',
    color: '#8b5cf6',
    marginTop: 40,
    fontSize: 16,
    lineHeight: 24,
  },
});