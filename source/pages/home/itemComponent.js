import React from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';

const ItemComponent = ({urls, description, altDescription, name, key, navigation}) => {
  return (
    <View id={key} style={styles.container}>
      <TouchableHighlight onPress={() => navigation.navigate('PhotoPage', {urls: urls.regular})}>
        <Image source={{uri: urls.thumb}} style={{width: 100, height: 100}}/>
      </TouchableHighlight>
      <View style={styles.textBlock}>
        <TextComponent text={'Title:'} propsText={description || altDescription}/>
        <TextComponent text={'Author:'} propsText={name}/>
      </View>
    </View>
  );
};

const TextComponent = ({text, propsText}) => {
  return <Text style={{fontWeight: 'bold'}}>{text} <Text style={{fontWeight: 'normal'}}>{propsText}</Text></Text>
};

//Flexbox

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '92%',
    paddingVertical: 10,
    paddingLeft: '3%',
    paddingRight: '6%',
    marginHorizontal: '4%',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#e6e6e6',
    marginVertical: 5,
    borderRadius: 5,
    color: '#444',
    backgroundColor: 'white'
  },
  textBlock: {
    width: '65%',
    marginLeft: '4%',
    justifyContent: 'space-between'
  }
});

export default ItemComponent;
