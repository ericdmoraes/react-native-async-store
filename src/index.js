import React, { useState, useEffect } from 'react';
import { View, StatusBar, StyleSheet, TextInput, Text, Button  } from "react-native";

import { readData, storeData } from "./asyncStorage/api";

const app = () => { 
  const [text, setText] = useState('')
  const [storedText, setStoredText] = useState('')
  const [update, setUpdate] = useState(false)

  const changeText = (data) => {
    setText(data)
  }

  useEffect(() => {
    const fetchData = async () => {
      setStoredText(await readData('data'))
    }
    
    fetchData()
  }, [update])

  const saveAsyncData = () => {
    storeData('data', text)
    setUpdate(!update)
  }

  const Separator = () => {
    return (
      <View style={styles.separator} />
    )
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#D1FFFF" />
      <View style={styles.container}>
        <Text style={styles.label}>Texto para o async store: </Text>
        <TextInput style={styles.input} onChangeText={(t) => changeText(t)} />
        <View style={{ width: '50%', alignSelf: 'center', margin: 25 }}>
          <Button style={styles.button} title="Salvar" onPress={() => saveAsyncData()} />
        </View>
      </View>
      <Separator />
      <View style={styles.container}>
        <Text>Texto do async storage: {storedText}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  separator: {
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    backgroundColor: '#d1ffff'
  },
  container: {
    backgroundColor: '#D1FFFF',
    flex: 1,
    justifyContent: 'center',
    // alignItems: '',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 0.5,
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'black',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    width: '50%'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  }
})

export default app;
