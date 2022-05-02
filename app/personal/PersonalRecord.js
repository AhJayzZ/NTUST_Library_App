import REACT , { component } from 'react';
import { Text, View , Image , StyleSheet , TouchableOpacity} from 'react-native';
import { Table, TableWrapper,Row , Cell} from 'react-native-table-component'

export default function(navigation) {

const state = {
    tableHead : ["館藏名稱", "狀態"],
    tableData :  [
        [
          "順著大腦來生活 : 從起床到就寢,用大腦喜歡的模式,活出創意、健康與生產力的最高生活法 / 大衛.洛克(David Rock)著; 黃庭敏譯寢",
          "22-5-5",
          "C321535"
        ],
        [
          "富爸爸商學院 : 銷售致富的財商教育 / 羅勃特.T.清崎(Robert T. Kiyosaki)著; 李平釗,王東譯",
          "22-4-22\n逾期",
          "C321537"
        ],
        [
          "富爸爸,有錢人為什麼越來越有錢? / 羅勃特.T. 清崎(Robert T. Kiyosaki),湯姆.惠萊特(Tom Wheelwright)著; 王立天譯",
          "22-5-3\n被預約",
          "C321555"
        ]
      ],
    flexArr : [3, 1]
}


const element_name = (data, barcode) => (
    <TouchableOpacity onPress={() => this._jump_page_book_info(barcode)}>
      <View style={styles.btn}>
        <Text style={styles.btnText}>{data}</Text>
      </View>
    </TouchableOpacity>
  );

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
            
            <View style={styles.container}>
                <Table Style={{ borderColor: "transparent" }}>
                <Row
                    data={state.tableHead}
                    style={styles.head}
                    textStyle={styles.head_text}
                    flexArr={state.flexArr}
                />
                {state.tableData.map((rowData, index) => (
                    <TableWrapper
                    key={index}
                    style={styles.row}
                    >
                    {rowData.map((cellData, cellIndex) =>
                        cellIndex < 2 ? (
                        <Cell
                            key={cellIndex}
                            data={
                            cellIndex == 0
                                ? element_name(cellData,state.tableData[cellIndex][2])
                                : cellData
                            }
                            flex={state.flexArr[cellIndex]}
                        />
                        ) : <View></View>
                    )}
                    </TableWrapper>
                ))}
                </Table>
            </View>


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
        width : 120,
        height : 35,
        alignItems: "center",
        paddingTop : 5,
        paddingBottom : 5,
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
      container: {
        flex: 1,
        padding: 12,
        paddingTop: 0,
        backgroundColor: "#fff"
      },
      head: { backgroundColor: "#005BAC", textAlign: "center" },
      head_text: { margin: 6, color: "#E2E6F2" },
      text: {
        margin: 6,
        color: "#063071",
        textAlign: "center"
      },
      row: {
        //display: "flex",
        flexDirection: "row",
        backgroundColor: "#FFF1C1",
        padding: 2
      },
      btn: {
        //display: "flex",
        //flex: 1,
        borderRadius: 2
      },
      btnText: { 
        color: "#063071", 
        textDecorationLine: "underline" 
    }
})