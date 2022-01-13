/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, Button, Modal } from 'react-native';


class ModalComponent extends Component {

    state= {
        modal: false
    }

    handleModal = () => {
        // 모달상태가 true, false 중 뭐인지 정하는 함수
        this.setState({
            modal: this.state.modal ? false : true
        })
    }

    render(){
        return (
            <View sytle={{width:'100%'}}>
                <Button
                    title="Open Modal"
                    onPress={this.handleModal}
                />
                <Modal
                    visible={this.state.modal}
                    animationType={'slide'}//slide, fade, none
                    onShow={()=> alert('warning!')}
                >
                    <View style={{marginTop: 0, backgroundColor: 'red'}}>
                        <Text>This is modal content</Text>
                    </View>
                    <Button
                        title="Go Back"
                        onPress={this.handleModal}
                    />
                </Modal>
            </View>
        )
    }
  
}

export default ModalComponent;
