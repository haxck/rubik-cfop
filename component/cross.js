import React from 'react';
import { WebView } from 'react-native';


export default class CrossScreen extends React.Component {
    static navigationOptions = {
        title: 'Cross'
    };

    render() {
        return (
            <WebView
                source={{ uri: "http://www.rubik.com.cn/cfopcross.htm" }}
            />
        );
    }
}

