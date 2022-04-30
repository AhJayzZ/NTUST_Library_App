import * as React from 'react';
import { Text, View , Image , StyleSheet , TouchableOpacity} from 'react-native';
import { Table, Row} from 'react-native-table-component'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function(navigation) {
    return(
        <View>
            <View style={styles.Header_account_info}>
                <Image
                    style={styles.Icon}
                    source={require('../../assets/personal_icon.png')}
                />
                <View style={styles.Text_account_info}>
                    <Text style={styles.Txt426}>A12345678 </Text>
                    <Text style={styles.Txt812}>四電子四甲</Text>
                </View>
            </View>
            

            {/* neet to arragne as horizontal  */}
            <View>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonTextStyle}>已借館藏 (6)</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonTextStyle}>預約館藏 (6)</Text>
                </TouchableOpacity >

                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonTextStyle}>借閱歷史</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonTextStyle}>關注館藏</Text>
                </TouchableOpacity>
            </View>
            
            <Table style={styles.tableStyle}>
                <Row data={['館藏名稱','狀態']}></Row>
                <Row data={['館藏名稱','狀態']}></Row>
            </Table>

        </View>
    )
}

const styles = StyleSheet.create({
    Header_account_info: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 9,
        paddingBottom: 9,
        paddingLeft: 9,
        paddingRight: 9,
        width: 360,
        height: 45,
      },
      Icon: {
        width: 25,
        height: 25,
        marginRight: 10,
      },
      Text_account_info: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
      },
      Txt426: {
        fontSize: 18,
        fontWeight: "400",
        color: "rgba(1,59,100,1)",
        marginRight: 10,
      },
      Txt812: {
        fontSize: 18,
        fontWeight: "400",
        color: "rgba(1,59,100,1)",
      },
      buttonStyle: {
        // width : '30%',
        // height : '10%',
        display: "flex",
        alignItems: "center",
        paddingTop : 5,
        paddingBottom : 5,
        marginTop : 15,
        marginBottom: 6,
        borderRadius: 12,
        borderColor : 'black',
        borderWidth : 1,
        backgroundColor: 'white',
      },
      buttonTextStyle : {
          fontSize : 16,
      },
      tableStyle : {
          height : '100%',
          borderColor : 'black',
          borderWidth : 1,
          backgroundColor : '#E2E6F2',
          textAlign : 'center'
      },
})