import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { TableWrapper, Row, Cell } from 'react-native-table-component'

export default function (navigation) {
  const Table = {
    Name: ["已借館藏", "預約館藏", "借閱歷史", "關注館藏"],
    Head: ["館藏名稱", "狀態"],
    flexArr: [3, 1],
  }

  const [table_state, set_table_state] = useState(0);

  const TableData_ItemBorrow = {
    ItemInfo: [
      [
        "富爸爸,有錢人為什麼越來越有錢? / 羅勃特.T. 清崎(Robert T. Kiyosaki),湯姆.惠萊特(Tom Wheelwright)著; 王立天譯",
        "22-5-3",
        "C321555",
        1,
      ],
      [
        "順著大腦來生活 : 從起床到就寢,用大腦喜歡的模式,活出創意、健康與生產力的最高生活法 / 大衛.洛克(David Rock)著; 黃庭敏譯寢",
        "22-5-5",
        "C321535",
        0
      ],
      [
        "富爸爸商學院 : 銷售致富的財商教育 / 羅勃特.T.清崎(Robert T. Kiyosaki)著; 李平釗,王東譯",
        "22-4-22",
        "C321537",
        -1,
      ],

    ],
  };

  const Number_ItemBorrow = TableData_ItemBorrow.ItemInfo.length

  const TableData_ItemRequest = {
    ItemInfo: [

      [
        "富爸爸商學院 : 銷售致富的財商教育 / 羅勃特.T.清崎(Robert T. Kiyosaki)著; 李平釗,王東譯",
        "22-4-22",
        "C321537",
        -1,
      ],
    ],
  };

  const Number_ItemRequest = TableData_ItemRequest.ItemInfo.length

  const TableData_History = {
    ItemInfo: [
      [
        "順著大腦來生活 : 從起床到就寢,用大腦喜歡的模式,活出創意、健康與生產力的最高生活法 / 大衛.洛克(David Rock)著; 黃庭敏譯寢",
        "22-5-5",
        "C321535",
        0
      ],
      [
        "富爸爸商學院 : 銷售致富的財商教育 / 羅勃特.T.清崎(Robert T. Kiyosaki)著; 李平釗,王東譯",
        "22-4-22",
        "C321537",
        -1,
      ],
    ],
  };

  const Number_History = TableData_History.ItemInfo.length

  const TableData_Favourite = {
    ItemInfo: [

    ],
  };

  const Number_favourite = TableData_Favourite.ItemInfo.length

  //to-do 
  const jump_page_book_info = (barcode) => {
    alert(`${barcode}`);
  };

  const book_name = (data, data_id) => (
    <TouchableOpacity>
      <View style={styles.btn}>
        <Text style={styles.btnText} onPress={() => jump_page_book_info(data_id)}>{data}</Text>
      </View>
    </TouchableOpacity>
  );

  const state_info = (data, data_state) => (
    <View>
      <View >
        {(data_state === 0) ? <Text style={styles.text}>{data}</Text> :
          (data_state < 0) ? <Text style={[styles.text, { color: "#FF0000" }]}>{data + "\n逾期"}</Text> :
            <Text style={[styles.text, { color: "#FF9900" }]}>{data + "\n被預約+" + data_state}</Text>
        }
      </View>
    </View>
  );

  const table_data_select = (table_state === 0) ? TableData_ItemBorrow
    : (table_state === 1) ? TableData_ItemRequest
      : (table_state === 2) ? TableData_History
        : TableData_Favourite

  return (
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

      <View style={{ backgroundColor: '#005BAC', height: 1, flex: 1, alignSelf: 'center' }} />

      <View style={styles.Tabs_changeFrame}>
        {Table.Name.map((data, index) =>
          <TouchableOpacity
            style={[styles.buttonStyle, table_state === index && { backgroundColor: "#86CADD" }]}
            onPress={() => set_table_state(index)}
          >
            <Text style={styles.buttonTextStyle}>
              {data}
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.container}>
        <Row
          data={Table.Head}
          style={styles.head}
          textStyle={styles.head_text}
          flexArr={Table.flexArr}
        />
        <ScrollView>
          {table_data_select.ItemInfo.map((rowData, index) => (
            <TableWrapper
              key={index}
              style={[styles.row, index % 2 && { backgroundColor: "#F7F6E7" }]}
            >
              {rowData.map((cellData, cellIndex) =>
                cellIndex < 2 ? (
                  <Cell
                    key={cellIndex}
                    data={
                      (cellIndex === 0)
                        ? book_name(cellData, table_data_select.ItemInfo[index][2])
                        : (cellIndex === 1)
                          ? state_info(cellData, table_data_select.ItemInfo[index][3])
                          : cellData
                    }
                    flex={Table.flexArr[cellIndex]}
                    textStyle={styles.text}
                  />
                ) : (
                  <View></View>
                )
              )}
            </TableWrapper>

          ))}
        </ScrollView>
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  Table: {
    //borderColor: "transparent"
  },
  Tabs_changeFrame: {
    flexDirection: "row",
  },
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
    width: "auto",
    margin: 5,
    height: "auto",
    alignItems: "center",
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 12,
  },
  buttonTextStyle: {
    fontSize: 16,
    color: '#104695',
  },
  buttonTableStyle: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    paddingBottom: 10,
    paddingTop: 10
  },
  container: {
    //flex: 1,
    padding: 12,
    paddingTop: 0,
  },
  head: { backgroundColor: "#005BAC" },
  head_text: { margin: 6, color: "#E2E6F2", textAlign: "center" },
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