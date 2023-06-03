import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Counter from './Counter';
import { Divider, FAB, Text, TextInput } from 'react-native-paper';

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
    setCounters((v) =>
      v.filter((c) => c.id !== id).map((c, i) => ({ ...c, id: i }))
    );
  };

  const toggleEdit = (id: number) => () => {
    setCounters((v) =>
      v.map((c) => (c.id === id ? { ...c, editing: !c.editing } : c))
    );
  };

  const editTitle = (id: number, title: string) => {
    setCounters((v) => v.map((c) => (c.id === id ? { ...c, title } : c)));
  };

  const changeTitle = (id: number) => (title: string) => {
    const last = title.slice(-1);
    if (last !== '\n') {
      return editTitle(id, title);
    }
    editTitle(id, title.slice(0, -1));
    toggleEdit(id)();
  };

  return (
    <SafeAreaView style={styles.screen}>
      <FAB label="+" style={styles.fab} onPress={addCounter} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {counters.map((c) => (
          <View key={c.id}>
            {c.editing ? (
              <TextInput
                autoFocus={true}
                style={styles.counterTitle}
                value={c.title}
                onChangeText={changeTitle(c.id)}
                onBlur={toggleEdit(c.id)}
              />
            ) : (
              <TouchableOpacity onPress={toggleEdit(c.id)}>
                <Text style={styles.counterTitle}>{c.title}</Text>
              </TouchableOpacity>
            )}
            <Counter deleteHandler={removeCounter(c.id)} />
            <Divider />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const PART = 100 / 2;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%',
    margin: 10,
  },
  container: {
    flex: 1,
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

  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    zIndex: 100, // works on ios
    elevation: 100, // works on android
  },
});

export default App;
