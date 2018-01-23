import React from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList } from 'react-native';

const datas = require("../data.json")

export default class F2LScreen extends React.Component {
    static navigationOptions = {
        title: 'F2L'
    };

    _keyExtractor = (item, index) => index;

    _renderItems = ({ item }) => {
        return (
            <View style={styles.item} key={item.formula}>
                <Image source={{ uri: item.img }} style={styles.image} />
                <Text style={styles.text}>{item.formula}</Text>
            </View>
        )
    }

    _footer = () => {
        return (
            <Text style={{ fontSize: 14, alignSelf: 'center' }}>到底啦，没有啦！</Text>
        )
    }

    render() {
        let ds = []
        for (let index = 0; index < datas.F2L.length; index++) {
            ds.push(datas.F2L[index])
        }

        return (
            <View style={styles.container}>
                <FlatList
                    data={ds}
                    renderItem={this._renderItems}
                    ListFooterComponent={this._footer}
                    keyExtractor={this._keyExtractor}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    item: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        height: 80,
        alignItems: 'center'
    },
    image: {
        height: 60,
        width: 60,
    },
    text: {
        fontSize: 18,
        paddingLeft: 8,
    }
})