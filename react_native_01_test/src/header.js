/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

const Header = (props) => (
    <TouchableOpacity 
        style={styles.header}
        //onPress={() => alert('hello')}
        //onLongPress={() => alert('hello')}
        //onPressIn={() => alert('hello')}
        onPressOut={() => alert('hello')}
    >
        <View>
            <Text>{props.name}</Text>
        </View>
    </TouchableOpacity>
    
)

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'pink',
        alignItems: 'center',
        padding: 5,
        width: '100%'
    }
})
export default Header;// 헤더라는 함수를 export 하는 파일이라는 뜻.
