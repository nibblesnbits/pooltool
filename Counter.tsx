import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface Props {
  deleteHandler: () => void;
}

export default function Counter({ deleteHandler, ...props }: Props) {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container} {...props}>
      <TouchableOpacity
        style={styles.box}
        onPress={() => setCount((v) => v - 1)}
        disabled={count == 0}
      >
        <Text style={[styles.buttonText]}> - </Text>
      </TouchableOpacity>
      <Text style={[styles.buttonText]}>{count}</Text>
      <TouchableOpacity
        style={styles.box}
        onPress={() => setCount((v) => v + 1)}
      >
        <Text style={[styles.buttonText]}> + </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={deleteHandler}>
        <Text style={[styles.buttonText]}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );
}

const PART = 100 / 4;
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
