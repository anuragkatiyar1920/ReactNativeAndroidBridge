import React, {Component} from 'react';
import {Button, View, Text, NativeModules} from 'react-native';
const toastModule = NativeModules.ToastModule;


export default class App extends Component {


    showMessage(message) {
        toastModule.showMessage(message);
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent:'center'}}>
                <Text style={{fontSize: 16, alignSelf: 'center', color: 'black', top:0, position:'absolute', marginTop:50}}>Communication Between Android & React Native</Text>

                <View style={{color: '#333333', width: 300, height: 40}}>
                    <Button onPress={this.showMessage.bind(this, "")} title='Show msg from Android'/>
                </View>
                <View style={{color: '#333333', width: 300, height: 40, marginTop: 10}}>
                    <Button onPress={this.showMessage.bind(this, "This message is showing from React Native")} title='Show msg from Native'/>
                </View>
            </View>
        );
    }
}

