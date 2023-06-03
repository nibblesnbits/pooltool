import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import Counter from './Counter';

function App(): JSX.Element {
  const [counters, setCounters] = useState([
    { title: 'Counter', id: 1, editing: false },
  ]);

  const addCounter = () => {
    setCounters((v) => [
      ...v,
      { title: 'Counter', id: v.length + 1, editing: false },
    ]);
  };

  const removeCounter = (id: number) => () => {
    setCounters((v) => v.filter((c) => c.id !== id));
  };

  const toggleEdit = (id: number) => () => {
    setCounters((v) =>
      v.map((c) => (c.id === id ? { ...c, editing: true } : c))
    );
  };

  const editTitle = (id: number, title: string) => {
    setCounters((v) =>
      v.map((c) => (c.id === id ? { ...c, editing: false, title } : c))
    );
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <TouchableOpacity style={styles.box} onPress={addCounter}>
            <Text style={[styles.buttonText]}>Add Counter</Text>
          </TouchableOpacity>
        </View>
        {counters.map((c) => (
          <View key={c.id}>
            {c.editing ? (
              <TouchableOpacity onPress={toggleEdit(c.id)}>
                <Text style={styles.counterTitle}>{c.title}</Text>
              </TouchableOpacity>
            ) : (
              <TextInput
                style={styles.counterTitle}
                value={c.title}
                onChangeText={(title) => {
                  const last = title.slice(-1);
                  if (last !== '\n') {
                    return editTitle(c.id, title);
                  }
                  editTitle(c.id, title.slice(0, -1));
                  toggleEdit(c.id)();
                }}
              />
            )}
            <Counter deleteHandler={removeCounter(c.id)} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const PART = 100 / 2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  box: {
    width: `${PART}%`,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 24,
  },
  counterTitle: {
    fontSize: 24,
  },
});

export default App;
