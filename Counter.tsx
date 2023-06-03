import React from 'react';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, IconButton } from 'react-native-paper';

interface Props {
  deleteHandler: () => void;
}

export default function Counter({ deleteHandler, ...props }: Props) {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container} {...props}>
      <IconButton
        style={styles.box}
        onPress={() => setCount((v) => v - 1)}
        disabled={count == 0}
        icon="minus"
        mode="contained"
      />
      <Text style={[styles.buttonText]}>{count}</Text>
      <IconButton
        style={[styles.box]}
        onPress={() => setCount((v) => v + 1)}
        icon="plus"
        mode="contained"
      />
      <IconButton icon="delete" style={styles.box} onPress={deleteHandler} />
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
    fontSize: 32,
  },
});
