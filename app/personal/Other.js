import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function(navigation) {
    return (
        <View style={{padding:10,}}>
            <View style={{flexDirection: 'row',paddingBottom:5,}}>
                <Text style={{color:'#005BAC',fontSize:18, }}>設定</Text>
                <View style={{backgroundColor: '#005BAC', height: 1, flex: 1, alignSelf: 'center'}} />
            </View>
            <View style={{flexDirection: 'row',marginBottom:6,}}>
                <View style={{flexDirection: 'row',padding:10}}>
                    <TouchableOpacity onPress={() => navigation.navigation.navigate('identity_page')}>
                        <Image
                        style={styles.setting_buttom}
                        source={require('../../assets/setting_page/account.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.setting_buttom_text}>帳號</Text>
                </View>
                <View style={{flexDirection: 'row',padding:10}}>
                    <TouchableOpacity onPress={() => navigation.navigation.navigate('language_page')}>
                        <Image
                        style={styles.setting_buttom}
                        source={require('../../assets/setting_page/language.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.setting_buttom_text}>語言</Text>
                </View>
                <View style={{flexDirection: 'row',padding:10}}>
                    <TouchableOpacity onPress={() => navigation.navigation.navigate('identity_page')}>
                        <Image
                        style={styles.setting_buttom}
                        source={require('../../assets/setting_page/home.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.setting_buttom_text}>首頁</Text>
                </View>
            </View>




            <View style={{flexDirection: 'row',paddingBottom:5,}}>
                <Text style={{color:'#005BAC',fontSize:18, }}>功能</Text>
                <View style={{backgroundColor: '#005BAC', height: 1, flex: 1, alignSelf: 'center'}} />
            </View>
            <View style={{flexDirection: 'row',marginBottom:8,}}>
                <View style={{flexDirection: 'column',padding:10}}>
                    <TouchableOpacity onPress={() => navigation.navigation.navigate('personal_navigator_page')}>
                        <Image
                        style={styles.function_buttom1}
                        source={require('../../assets/setting_page/write_down_feeling.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.function_buttom_text}>心情留言版</Text>
                </View>
                <View style={{flexDirection: 'column',padding:10}}>
                    <TouchableOpacity onPress={() => navigation.navigation.navigate('personal_navigator_page')}>
                        <Image
                        style={styles.function_buttom2}
                        source={require('../../assets/setting_page/reading_together.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.function_buttom_text}>相約共讀</Text>
                </View>
            </View>


            <View style={{flexDirection: 'row',paddingBottom:5,}}>
                <Text style={{color:'#005BAC',fontSize:18, }}>參考資訊</Text>
                <View style={{backgroundColor: '#005BAC', height: 1, flex: 1, alignSelf: 'center'}} />
            </View>
            <View style={{flexDirection: 'row',marginBottom:8,}}>
                <View style={{flexDirection: 'column',padding:10}}>
                    <TouchableOpacity onPress={() => navigation.navigation.navigate('personal_navigator_page')}>
                        <Image
                        style={styles.reference_buttom}
                        source={require('../../assets/setting_page/open_time.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.reference_buttom_text}>開館時間</Text>
                </View>
                <View style={{flexDirection: 'column',padding:10}}>
                    <TouchableOpacity onPress={() => navigation.navigation.navigate('personal_navigator_page')}>
                        <Image
                        style={styles.reference_buttom}
                        source={require('../../assets/setting_page/bulletin.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.reference_bulletin_buttom_text}>公告</Text>
                </View>
                <View style={{flexDirection: 'column',padding:10}}>
                    <TouchableOpacity onPress={() => navigation.navigation.navigate('personal_navigator_page')}>
                        <Image
                        style={styles.reference_calendar_buttom}
                        source={require('../../assets/setting_page/calendar.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.reference_buttom_text}>活動行事曆</Text>
                </View>
                <View style={{flexDirection: 'column',paddingTop:10}}>
                    <TouchableOpacity onPress={() => navigation.navigation.navigate('personal_navigator_page')}>
                        <Image
                        style={styles.reference_calendar_buttom}
                        source={require('../../assets/setting_page/printer_manual.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.reference_buttom_text}>影印機使用</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row',marginBottom:8,}}>
                <View style={{flexDirection: 'column',padding:10}}>
                    <TouchableOpacity onPress={() => navigation.navigation.navigate('personal_navigator_page')}>
                        <Image
                        style={styles.reference_buttom}
                        source={require('../../assets/setting_page/common_question.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.reference_buttom_text}>常見問題</Text>
                </View>
                <View style={{flexDirection: 'column',padding:10}}>
                    <TouchableOpacity onPress={() => navigation.navigation.navigate('personal_navigator_page')}>
                        <Image
                        style={styles.reference_buttom}
                        source={require('../../assets/setting_page/3D_tour.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.reference_buttom_text}>3D導覽</Text>
                </View>
                <View style={{flexDirection: 'column',padding:10}}>
                    <TouchableOpacity onPress={() => navigation.navigation.navigate('personal_navigator_page')}>
                        <Image
                        style={styles.reference_buttom}
                        source={require('../../assets/setting_page/about_library.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.reference_buttom_text}>關於本館</Text>
                </View>
                <View style={{flexDirection: 'column',padding:10}}>
                    <TouchableOpacity onPress={() => navigation.navigation.navigate('personal_navigator_page')}>
                        <Image
                        style={styles.reference_buttom}
                        source={require('../../assets/setting_page/about_app.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.reference_buttom_text}>關於APP</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row',marginBottom:8,}}>
                <View style={{flexDirection: 'column',padding:10}}>
                    <TouchableOpacity onPress={() => navigation.navigation.navigate('personal_navigator_page')}>
                        <Image
                        style={styles.reference_buttom}
                        source={require('../../assets/setting_page/Call_us.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.reference_buttom_text}>聯絡我們</Text>
                </View>
                <View style={{flexDirection: 'column',padding:10,justifyContent: 'center', alignItems: 'center',}}>
                    <TouchableOpacity onPress={() => navigation.navigation.navigate('personal_navigator_page')}>
                        <Image
                        style={styles.reference_buttom}
                        source={require('../../assets/setting_page/science_web.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.reference_buttom_text}>科學網頁</Text>
                </View>

            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    setting_buttom: {
      width: 30,
      height: 30,
      marginRight: 10,
    },
    setting_buttom_text:{
        color:'#104695',
        fontSize:16,
        marginTop: 5,
    },
    function_buttom1: {
        width: 45,
        height: 45,
        marginLeft: 13,
      },
    function_buttom2: {
        width: 45,
        height: 45,
        marginLeft: 10,
      },
    function_buttom_text:{
        color:'#104695',
        fontSize:16,
        marginTop: 3,
        textAlign: 'center',
    },
    reference_buttom: {
        width: 45,
        height: 45,
        marginLeft: 10,
      },
    reference_calendar_buttom: {
        width: 45,
        height: 45,
        marginLeft: 14,
      },
    reference_buttom_text:{
        color:'#104695',
        fontSize:16,
        marginTop: 3,
        textAlign: 'center',
    },
    reference_bulletin_buttom_text:{
        color:'#104695',
        fontSize:16,
        marginTop: 3,
        textAlign: 'center',
        marginLeft:4,
    },
  });