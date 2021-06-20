// Only in App.js

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
  },
  view2: {
    backgroundColor: '#0074DC',
  },
  view3: {
    backgroundColor: '#E97393',
  },
  view4: {
    backgroundColor: '#FF4900',
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



//or//



// App.js and Box.js(component)

// ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>App.js>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Box from './components/Box';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.box, styles.title]}>Hello world</Text>
      <Box text="First" colorCode="#007D87" />
      <Box text="Second" colorCode="#0074DC" />
      <Box text="Third" colorCode="#E97393" />
      <Box text="Fourth" colorCode="#FF4900" />
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
})

export default App;


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Box.js >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const ColorBox = ({text, colorCode}) => {
    const boxColor = {
        backgroundColor: colorCode
    }
    return (
        <View style={[styles.box, boxColor]}>
            <Text style={styles.text}>{text}: {colorCode}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        padding: 10,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    text: {
        fontWeight: 'bold'
    }
})

export default ColorBox;


