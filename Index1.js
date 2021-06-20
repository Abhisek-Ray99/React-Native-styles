import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.box, styles.title]}>Hello world</Text>
      <View style={[styles.box, styles.view1]}><Text style={styles.text}>First</Text></View>
      <View style={[styles.box, styles.view2]}><Text style={styles.text}>Second</Text></View>
      <View style={[styles.box, styles.view3]}><Text style={styles.text}>Third</Text></View>
      <View style={[styles.box, styles.view4]}><Text style={styles.text}>Fourth</Text></View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  container: {
    flexDirection: 'column',
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  text: {
    fontWeight: 'bold',
    color: 'white'
  },
  view1: {
    backgroundColor: '#007D87',
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  view2: {
    backgroundColor: '#0074DC',
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  view3: {
    backgroundColor: '#E97393',
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  view4: {
    backgroundColor: '#FF4900',
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  box: {
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  }
})

export default App;
