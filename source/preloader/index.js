import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

export const PreloadAPP = () => {
  return (
    <View style={styles.container}>
        <Image source={require('../../assets/preloader.gif')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


