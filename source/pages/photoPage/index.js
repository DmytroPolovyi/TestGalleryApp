import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Button, TouchableHighlight, Text} from 'react-native';


const PhotoPage = ({navigation}) => {
    //Hoock
    const [URLS, SetURLS] = useState(navigation.state.params.urls);

    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={() => navigation.goBack()} style={{paddingVertical: 5, paddingLeft: 5}}
                                underlayColor={'white'}>
                <Image source={require('../../../assets/keyboard-backspace.png')}/>
            </TouchableHighlight>
            <Image source={{uri: URLS}} style={styles.image}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        width: '98%',
        marginHorizontal: '1%',
        marginBottom: '1%',
        paddingTop: '1%',
    },
    image: {
        width: '100%',
        height: '92%'
    }
});

export default PhotoPage;
