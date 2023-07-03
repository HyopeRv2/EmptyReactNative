import React from 'react';
import {Text, SafeAreaView} from 'react-native';

const App: () => Node = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text
        style={{
          fontSize: 28,
          alignSelf: 'center',
          marginVertical: 15,
          textTransform: 'uppercase',
        }}>
        Hello World
      </Text>
    </SafeAreaView>
  );
};

export default App;
