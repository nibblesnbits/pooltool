import React from 'react';
import { useState } from 'react';
import { Pressable } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

interface Props {}

export default function Counter(props: Props) {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container} {...props}>
      <Pressable style={styles.box} onPress={() => setCount((v) => v - 1 || 1)}>
        <Text style={[styles.buttonText]}> - </Text>
      </Pressable>
      <Text style={[styles.buttonText]}>{count}</Text>
      <Pressable style={styles.box} onPress={() => setCount((v) => v + 1)}>
        <Text style={[styles.buttonText]}> + </Text>
      </Pressable>
    </View>
  );
}

const PART = 100 / 3;
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
