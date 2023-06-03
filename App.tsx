import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Counter from './Counter';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Counter />
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;
