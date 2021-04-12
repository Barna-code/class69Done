
import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';

//skeleton structure of your file
export default class SearchScreen extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                <Text>

                    Search Screen
                </Text>
            </View>
        )
    }
}