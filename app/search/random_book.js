import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity} from 'react-native';

export default function(navigation){
return(
    <View>
        <View style={styles.Top_tabs_with_return_buttom}>
            <TouchableOpacity onPress={() => navigation.navigation.goBack()}>
                <Image
                    style={styles.Return_buttom}
                    source={require('../../assets/return_button.png')}
                />
            </TouchableOpacity>
            <View style={styles.Header_text_field}>
                <Text style={styles.Txt022}>館藏查詢</Text>
            </View>
        </View>
         
        <View style={styles.container_1}>
            <Image
                style={styles.detailBookIcon}
                source={require('../../assets/random_book_page/Vector.png')}
            />
            <View style={styles.detailTextField}>
                <Text style={styles.detailText}>館藏名稱: 程式解密</Text>
                <Text style={styles.detailText}>館藏地點 : 2F</Text>
                <Text style={styles.detailText}>館藏狀態: 可外借</Text>
                <Text style={styles.detailText}>索書號:180.26 360</Text>
                <Text style={styles.detailText}>頁數 : 255</Text>
                <Text style={styles.detailText}>年份 : 1982</Text>
                <Text style={styles.detailText}>作者 : 鍾德威</Text>
                <Text style={styles.detailText}>備註 : 此書有缺頁</Text>
            </View>
        </View>

        <View>
            <View style={{flexDirection: 'row',paddingTop:5,paddingBottom:5,}}>
                <Text style={{color:'#005BAC',fontSize:18, }}>功能 </Text>
                <View style={{backgroundColor: '#005BAC', height: 1, flex: 1, alignSelf: 'center'}} />
            </View>
        </View>

        <View style={{flexDirection: 'row',paddingVertical:5,}}>
            <View style={styles.button_area}>
                <TouchableOpacity onPress={() => alert('開發中') }>
                    <Image
                        style={styles.button}
                        source={require('../../assets/random_book_page/attachment.png')}/>
                </TouchableOpacity>
                <Text style={styles.button_text}>有附件</Text>
            </View>

            <View style={styles.button_area}>
                <TouchableOpacity onPress={() => alert('開發中') }>
                    <Image
                        style={styles.button}
                        source={require('../../assets/random_book_page/location.png')}/>
                </TouchableOpacity>
                <Text style={styles.button_text}>館藏位置</Text>
            </View>

            <View style={styles.button_area}>
                <TouchableOpacity onPress={() => alert('開發中')}>
                    <Image
                        style={styles.button}
                        source={require('../../assets/random_book_page/reader_review.png')}/>
                </TouchableOpacity>
                <Text style={styles.button_text}>讀者心得</Text>
            </View>

            <View style={styles.button_area}>
                <TouchableOpacity onPress={() => alert('開發中')}>
                    <Image
                        style={styles.button}
                        source={require('../../assets/random_book_page/review_share.png')}/>
                </TouchableOpacity>
                <Text style={styles.button_text}>心得分享</Text>
            </View>
        </View>

        <View style={{flexDirection: 'row',paddingVertical:5,}}>
            <View style={styles.button_area}>
                <TouchableOpacity onPress={() => alert('開發中') }>
                    <Image
                        style={styles.button}
                        source={require('../../assets/random_book_page/report_problem.png')}/>
                </TouchableOpacity>
                <Text style={styles.button_text}>回報協尋</Text>
            </View>

            <View style={styles.button_area}>
                <TouchableOpacity onPress={() => alert('開發中') }>
                    <Image
                        style={styles.button}
                        source={require('../../assets/random_book_page/my_favorite.png')}/>
                </TouchableOpacity>
                <Text style={styles.button_text}>我的最愛</Text>
            </View>
        </View>
    </View>
    
);};

const styles = StyleSheet.create({
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
        width: '100%',
        height: 50,
    },
    Return_buttom: {
        width: 40,
        height: 30,
      },
    Header_text_field: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 1,
        width: 300,
        height: 36,
      },
    Txt022: {
        fontSize: 28,
        fontWeight: "400",
        color: "rgba(226,230,242,1)",
        textAlign: "center",
        justifyContent: "center",
      },
      container_1:{
        display: "flex",
        flexDirection: "row",
        height: 200,
        width: 340,
        borderWidth: 1,
        borderColor: '#005BAC',
        marginTop:49,
        marginBottom:20,
        marginLeft:20,
      },
      detailBookIcon:{
        height:102,
        width:99,
        marginTop:49,
        marginBottom:49,
        marginLeft:20,
      },
      detailTextField:{
        marginTop:10,
        marginBottom:10,
        marginLeft:20,
      },
      detailText:{
        color: "#000000",
        marginLeft:20,
      },
      button_area:{
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 12.5,
      },
      button:{
        height: 45,
        width: 45,
      },
      button_text:{
        color: '#104695',
      },
})