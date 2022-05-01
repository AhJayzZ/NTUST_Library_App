import * as React from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function(navigation) {
    return (
        <View>
            <View style={{flexDirection: 'row',padding:10}}>
                <Text style={{color:'#005BAC',fontSize:18, }}>設定</Text>
                <View style={{backgroundColor: '#005BAC', height: 1, flex: 1, alignSelf: 'center'}} />
                    <TouchableOpacity onPress={() => navigation.navigation.goBack()}>
                        <Image
                        style={styles.buttom}
                        source={require('../assets/setting_page/home.png')}/>
                    </TouchableOpacity>
                </View>
            <View style={{flexDirection: 'row',padding:10}}>
                <Text style={{color:'#005BAC',fontSize:18, }}>功能</Text>
                <View style={{backgroundColor: '#005BAC', height: 1, flex: 1, alignSelf: 'center'}} />
            </View>
            <View style={{flexDirection: 'row',padding:10}}>
                <Text style={{color:'#005BAC',fontSize:18, }}>參考資訊</Text>
                <View style={{backgroundColor: '#005BAC', height: 1, flex: 1, alignSelf: 'center'}} />
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    buttom: {
      width: 35,
      height: 35,
    },
  });