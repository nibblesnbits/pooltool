import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Counter from './Counter';

function App(): JSX.Element {
  const [counters, setCounters] = useState([{ title: 'Counter', id: 1 }]);

  const addCounter = () => {
    setCounters((v) => [...v, { title: 'Counter', id: v.length + 1 }]);
  };

  const removeCounter = (id: number) => () => {
    setCounters((v) => v.filter((c) => c.id !== id));
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
            <Text>{c.title}</Text>
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
    fontSize: 32,
  },
});

export default App;
