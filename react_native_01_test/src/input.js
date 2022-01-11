/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

class Input extends Component {

    state = {
        myTextInput : ''
    }

    onChangeInput = (event) => {
        this.setState({
            myTextInput: event
        })
    }

    render(){
        return (
            <View style={styles.mainView}>
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
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        backgroundColor: '#cecece',
        marginTop: 20,
        fontSize: 25,
        padding: 10
    },
    mainView: {
        width: '100%',
    }
})

export default Input;
