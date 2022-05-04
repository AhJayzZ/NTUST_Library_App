import * as React from 'react';
import { Text, View, StyleSheet, TextInput,Image,TouchableOpacity,ScrollView} from 'react-native';

export default function(navigation){    
return (
    
    <View style={styles.container}>
    <ScrollView>
        <View style={styles.Top_tabs_with_return_buttom}>
            <TouchableOpacity onPress={() => navigation.navigation.goBack()}>
            <Image
                style={styles.Return_buttom}
                source={require('../../assets/return_button.png')}
            />
            </TouchableOpacity>
            <View style={styles.Text_field}>
            <Text style={styles.Txt783}>心情留言版</Text>
            </View>
        </View>

        <View style={styles.body}>
            <View style={styles.message_area_parent}>
                <View style={styles.message_area1}>
                    <Text >5/5 17:01</Text>
                </View>
                <View style={styles.message_area1}>
                    <Image
                            style={styles.person}
                            source={require('../../assets/setting_page/head.png')}
                        />
                        <Text style={styles.student_id}>B12345678:</Text>
                    <Text style={styles.message}>中和的永和路在哪裡?</Text>
                    <TouchableOpacity style={styles.like_area}>
                        <Image
                                style={styles.good}
                                source={require('../../assets/setting_page/good.png')}
                        />
                        < Text style={styles.like_num}> 3 </Text>
                    </TouchableOpacity>
                </View>
            </View>


            <View style={styles.message_area_parent}>
                <View style={styles.message_area1}>
                    <Text >5/5 17:30</Text>
                </View>
                <View style={styles.message_area1}>
                    <Image
                            style={styles.person}
                            source={require('../../assets/setting_page/head.png')}
                        />
                        <Text style={styles.student_id}>B10909052:</Text>
                    <Text style={styles.message}>請問疫情升溫有閉館嗎?</Text>
                    <TouchableOpacity style={styles.like_area}>
                        <Image
                                style={styles.good}
                                source={require('../../assets/setting_page/good.png')}
                        />
                        < Text style={styles.like_num}> 2 </Text>
                    </TouchableOpacity>
                </View>
            </View>


            <View style={styles.message_area_parent}>
                <View style={styles.message_area1}>
                    <Text >5/5 17:59</Text>
                </View>
                <View style={styles.message_area1}>
                    <Image
                            style={styles.person}
                            source={require('../../assets/setting_page/head.png')}
                        />
                        <Text style={styles.student_id}>B12345678:</Text>
                    <Text style={styles.message}>現在沒有冷氣 好熱</Text>
                    <TouchableOpacity style={styles.like_area}>
                        <Image
                                style={styles.good}
                                source={require('../../assets/setting_page/good.png')}
                        />
                        < Text style={styles.like_num}> 4 </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.message_area_parent}>
                <View style={styles.message_area1}>
                    <Text >5/5 18:00</Text>
                </View>
                <View style={styles.message_area1}>
                    <Image
                            style={styles.person}
                            source={require('../../assets/setting_page/head.png')}
                        />
                        <Text style={styles.student_id}>B10909052:</Text>
                    <Text style={styles.message}>不要答非所問</Text>
                    <TouchableOpacity style={styles.like_area}>
                        <Image
                                style={styles.good}
                                source={require('../../assets/setting_page/good.png')}
                        />
                        < Text style={styles.like_num}> 5 </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.message_area_parent}>
                <View style={styles.message_area1}>
                    <Text >5/5 18:20</Text>
                </View>
                <View style={styles.message_area1}>
                    <Image
                            style={styles.person}
                            source={require('../../assets/setting_page/head.png')}
                        />
                        <Text style={styles.student_id}>B98765678:</Text>
                    <Text style={styles.message}>不要吵架</Text>
                    <TouchableOpacity style={styles.like_area}>
                        <Image
                                style={styles.good}
                                source={require('../../assets/setting_page/good.png')}
                        />
                        < Text style={styles.like_num}> 1 </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.message_area_parent}>
                <View style={styles.message_area1}>
                    <Text >5/5 19:00</Text>
                </View>
                <View style={styles.message_area1}>
                    <Image
                            style={styles.person}
                            source={require('../../assets/setting_page/head.png')}
                        />
                        <Text style={styles.student_id}>B12345678:</Text>
                    <Text style={styles.message}>德偉屁股好翹</Text>
                    <TouchableOpacity style={styles.like_area}>
                        <Image
                                style={styles.good}
                                source={require('../../assets/setting_page/good.png')}
                        />
                        < Text style={styles.like_num}> 142 </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.message_area_parent}>
                <View style={styles.message_area1}>
                    <Text >5/5 19:01</Text>
                </View>
                <View style={styles.message_area1}>
                    <Image
                            style={styles.person}
                            source={require('../../assets/setting_page/head.png')}
                        />
                        <Text style={styles.student_id}>B12345678:</Text>
                    <Text style={styles.message}>德偉屁股好大</Text>
                    <TouchableOpacity style={styles.like_area}>
                        <Image
                                style={styles.good}
                                source={require('../../assets/setting_page/good.png')}
                        />
                        < Text style={styles.like_num}> 127 </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.message_area_parent}>
                <View style={styles.message_area1}>
                    <Text >5/5 19:15</Text>
                </View>
                <View style={styles.message_area1}>
                    <Image
                            style={styles.person}
                            source={require('../../assets/setting_page/head.png')}
                        />
                        <Text style={styles.student_id}>B12399678:</Text>
                    <Text style={styles.message}>你看過喔??</Text>
                    <TouchableOpacity style={styles.like_area}>
                        <Image
                                style={styles.good}
                                source={require('../../assets/setting_page/good.png')}
                        />
                        < Text style={styles.like_num}> 465 </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.message_area_parent}>
                <View style={styles.message_area1}>
                    <Text >5/5 19:21</Text>
                </View>
                <View style={styles.message_area1}>
                    <Image
                            style={styles.person}
                            source={require('../../assets/setting_page/head.png')}
                        />
                        <Text style={styles.student_id}>B12399678:</Text>
                    <Text style={styles.message}>杰哥不要</Text>
                    <TouchableOpacity style={styles.like_area}>
                        <Image
                                style={styles.good}
                                source={require('../../assets/setting_page/good.png')}
                        />
                        < Text style={styles.like_num}> 999 </Text>
                    </TouchableOpacity>
                </View>
            </View>



        </View>


        <View style={styles.footer}>
            <TextInput
            style={styles.input}
            placeholder="發送訊息"
            />
            <TouchableOpacity>
                <Image
                    style={styles.send_button}
                    source={require('../../assets/setting_page/send.png')}
                />
            </TouchableOpacity>
        </View>
    </ScrollView>
    </View>

  );
};

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column', 
        flexGrow: 1,            
        justifyContent: 'space-between' ,
        width: '100%',
      },
    Top_tabs_with_return_buttom: {
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
    },
    Text_field: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 1,
        width: 300,
        height: 36,
    },
    Txt783: {
        fontSize: 28,
        fontWeight: "400",
        color: "rgba(226,230,242,1)",
        textAlign: "center",
        justifyContent: "center",
    },
    Return_buttom: {
        width: 40,
        height: 30,
    },
    body:{
        padding:14,
    },
    message_area_parent:{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingVertical: 7.5,

    },
    message_area1:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    message_area2:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop:5,
    },
    person:{
        width: 20,
        height: 20,
    },
    student_id:{
        fontSize: 16,
        marginRight:5,
        marginLeft:1,
    },
    message:{
        backgroundColor: '#86CADD',
        borderRadius: 6,
        fontSize:20,
        paddingVertical:10,
        paddingHorizontal:7,
        marginRight: 4,
        width:'60%',

    },
    like_area:{
        flexDirection: 'column', 
        justifyContent:'space-evenly', 
        alignItems:'center' ,
        width:25,
    },
    like_num:{
        fontSize: 12
    },
    good:{
        width: 15,
        height: 15,
    },
    footer:{
        flexDirection:'row',
        justifyContent: 'space-evenly', 
        alignItems: 'center',
        paddingHorizontal:12,
        paddingTop: 24,
        paddingBottom:45,
    },
    input: {
        height: 48,
        width: '80%',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#D9D9D9',
        paddingHorizontal: 10,
    },
    send_button:{   
        height: 36,
        width: 42,
    },
});