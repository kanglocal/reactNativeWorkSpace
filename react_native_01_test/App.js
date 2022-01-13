/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Button, View, Text, StyleSheet,ScrollView, TextInput, Image } from 'react-native';
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numlist';
import Input from './src/input';
import Picker from './src/picker';
import Dog from './assets/images/dog.jpg';
import Modal from './src/modal';

class App extends Component {

  state = {
    myTextInput : '',
    alphabet: ['a', 'b', 'c', 'd']

  }

  onChangeInput = (event) => {
      this.setState({
        myTextInput: event
    })
  }

  onAddRandomNum= () => {
    const randomNum = Math.floor(Math.random()*100)+1;
    this.setState(prevState => {
      return {
        random: [...prevState.random, randomNum]
      }
    })
  }

  onNumDelete = (position) => {
    // filter() : 특정조건에 부합되는 요소들만 뽑아내서 새 배열을 만들어주는 함수.
    const newArray = this.state.random.filter((num, index) => {
      return position != index;// 클릭한애를 제외하고 새 배열을 만든다.
    })
    this.setState({
      random: newArray
    })
  }
  onAddTextInput = () => {
    this.setState(prevState=>{
      return {
        myTextInput: '',
        alphabet: [...prevState.alphabet, prevState.myTextInput]
      }
    })
  }
  
  render() {
    return (
      <View style={styles.mainView}>
        <Modal/>
        {/* <Image
          source={{uri: 'https://picsum.photos/id/237/400/300'}}
          style={styles.image}
          resizeMode="contain"
          // onLoadEnd={()=>alert('Image Loaded!!!')}
        /> */}
        {/* <Picker/>
        <TextInput
          value={this.state.myTextInput}
          style={styles.input}
          onChangeText={this.onChangeInput}
          // 개행해줌.
          multiline={true}
          // 글자수 제한
          maxLength={100}
          //대문자 자동수정 안한다. 왜없다고뜨지 ㅜㅜ
          //autoCapitalize={'characters'}
          autoCapitalize='none'
          // disabled 와 같음.
          editable={true}
        />
        <Button
          title="Add Text Input"
          onPress={this.onAddTextInput}
        />

        <ScrollView style={{width: '100%'}}>
          {
            this.state.alphabet.map((item, idx)=> (
              <Text style={styles.mainText}
                key = {idx} // 오류가나지않기위해쓰는것.
              >
                {item}
              </Text>
            ))
          }

        </ScrollView> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 50,
        alignItems: 'center',// 수평정렬
        //justifyContent: 'center'// 수직정렬
  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  anotherSubView: {
    flex: 2,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '100%',
    alignItems : 'center',
    justifyContent: 'center'
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20,
    margin: 20,
    backgroundColor: 'pink'
  },
  input: {
        width: '100%',
        backgroundColor: '#cecece',
        marginTop: 20,
        fontSize: 25,
        padding: 10
    },
  image:{
    backgroundColor:'red',
    width: '100%',
    height: 1000
  }
})
export default App;
