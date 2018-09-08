import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    debugger;
    return (
      <View style={styles.container}>
        <Text>GSREACTAPP</Text> 
        <Text>Jayr Anes</Text>
        <Text>Hello World4!</Text> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
