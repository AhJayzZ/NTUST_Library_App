import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function(navigation){
  return (
    <View style={{backgroundColor: '#E2E6F2',height:'100%'}}>
      
      <StatusBar style='auto' hidden />
      <View style={styles.Top_tabs}>
        <TouchableOpacity onPress={() => navigation.navigation.goBack()}>
          <Image
            style={styles.Return_buttom}
            source={require('../../assets/return_button.png')}
          />
        </TouchableOpacity>
        <View style={styles.Text_field}>
          <Text style={styles.Txt945}>設定-語言</Text>
        </View>
      </View>
      
      <Text>{'\n'}</Text>

      <View style={styles.Icon_app}>
        <Image
          style={styles.Ntust_lib_icon}
          source={require('../../assets/NTUST_Lib_Icon.png')}
        />
      </View>

      <Text style={{color:'#013B64',
                    fontSize:32,
                    textAlign:'center',
                    fontWeight:'bold'}}>{'\n'}NTUST {'\n'} Library APP {'\n'}
      </Text>

      <View style={styles.Group_buttom}>
        <TouchableOpacity style={styles.Button_lang_chinese} onPress={() => {
                                                              AsyncStorage.setItem('language','Chinese')
                                                              alert('語言已設定成 "中文" ')
                                                              navigation.navigation.goBack()
                                                              }}>
          <Text style={styles.Txt863}>中文</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button_lang_english} onPress={() => {
                                                              AsyncStorage.setItem('language','English')
                                                              alert('Language has been set to "English" ')
                                                              navigation.navigation.goBack()
                                                            }}>
          <Text style={styles.Txt863}>English</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  Top_tabs: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 9,
    paddingRight: 9,
    backgroundColor: "rgba(0,91,172,1)",
    shadowColor: "rgba(0,0,0,0.25)",
    elevation: 0,
    shadowOffset: { width: 0, height: 4 },
    width: 360,
    height: 50,
  },
  Return_buttom: {
    width: 40,
    height: 30,
  },
  Text_field: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 200,
    height: 36,
  },
  Txt945: {
    fontSize: 28,
    fontWeight: "400",
    color: "rgba(226,230,242,1)",
    textAlign: "center",
    justifyContent: "center",
  },
  Group_buttom: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 360,
    height: 146,
  },
  Button_lang_chinese: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 11,
    paddingBottom: 11,
    paddingLeft: 19,
    paddingRight: 19,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: "rgba(0,91,172,1)",
  },
  Txt863: {
    fontSize: 32,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
  },
  Button_lang_english: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 11,
    paddingBottom: 11,
    paddingLeft: 19,
    paddingRight: 19,
    borderRadius: 5,
    backgroundColor: "rgba(0,91,172,1)",
  }, Icon_app: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignSelf: 'center',
    paddingTop: 19,
    paddingBottom: 19,
    paddingLeft: 19,
    paddingRight: 19,
    width: 160,
    height: 160,
  },
  Ntust_lib_icon: {
    width: 120,
    height: 120,
  },
});
