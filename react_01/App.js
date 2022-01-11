/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropsChild from './propsChild'

class App extends Component {

  state = {
    sampleText: 'Hello world!!',
    sampleBoolean: true,
    sampleNum: 1
  }

  inputText = () => (
    this.state.sampleBoolean ?
    <Text>sampleBoolean is true</Text>
    :
    <Text>sampleBoolean is false</Text>
  )
  
  changeState = () => {
    if(!this.state.sampleBoolean){
      this.setState({
        sampleText: 'Text changed',
        sampleBoolean: true
      })
    }else {
      this.setState({
        sampleText: 'hello world~~',
        sampleBoolean: false
      })
    }
    
  }

  onAdd = () => {
    this.setState(preveState => {
      return {
        sampleNum: preveState.sampleNum + 1
      }
    })
  }

  render() {
    return (
      <View style={styles.background}>
        <PropsChild sText={this.state.sampleText} cState={this.changeState}/>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App;
