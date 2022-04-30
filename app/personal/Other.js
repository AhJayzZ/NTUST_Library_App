import * as React from 'react';
import {Text, View,} from 'react-native';

export default function(navigation) {
    return (
        <View>
            <View style={{flexDirection: 'row',padding:10}}>
                <Text style={{color:'#005BAC',fontSize:18, }}>設定</Text>
                <View style={{backgroundColor: '#005BAC', height: 1, flex: 1, alignSelf: 'center'}} />
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