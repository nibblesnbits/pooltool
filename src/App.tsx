import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import CounterScreen from './CounterScreen';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.screen}>
      <CounterScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%',
    margin: 10,
  },
});

export default App;
