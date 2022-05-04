import React from "react"
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native"

export default function (navigation) {
  return (
    <View style={styles.main}>

      <View style={styles.Top_tabs_with_return_buttom}>
        <TouchableOpacity onPress={() => navigation.navigation.goBack()}>
          <Image
            style={styles.Return_buttom}
            source={require('../../assets/return_button.png')}
          />
        </TouchableOpacity>
        <View style={styles.Text_field}>
          <Text style={styles.Txt783}>設定-帳號頁面</Text>
        </View>
      </View>

      <Text>{'\n'}</Text>

      <View style={styles.Header}>
        <Image
          style={styles.Icon_app}
          source={require('../../assets/NTUST_Lib_Icon.png')}
        />
        <Text style={styles.Txt755}>帳號設定</Text>
      </View>

      <TouchableOpacity style={styles.Buttom_1} onPress={() => alert('開發中')}>
        <Text style={styles.Txt015}>更改密碼</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Buttom_1} onPress={() => alert('開發中')}>
        <Text style={styles.Txt015}>更改聯絡Email</Text>
      </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "rgba(226,230,242,1)",
    width: '100%',
    height: '100%',
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
    marginBottom: 6,
    backgroundColor: "rgba(0,91,172,1)",
    shadowColor: "rgba(0,0,0,0.25)",
    elevation: 0,
    shadowOffset: { width: 0, height: 4 },
    width: 360,
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
  Header: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginBottom: 6,
    paddingBottom : 20,
    width: '100%',
  },
  Icon_app: {
    width: 160,
    height: 160,
  },
  Txt755: {
    fontSize: 36,
    fontWeight: "400",
    color: "rgba(1,59,100,1)",
    textAlign: "center",
    justifyContent: "center",
  },
  Txt129: {
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 27,
    color: "rgba(82,82,92,1)",
    width: 311,
    marginBottom: 8,
  },
  Buttom_1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 11,
    paddingBottom: 11,
    paddingLeft: 19,
    paddingRight: 19,
    marginTop : 15,
    marginBottom: 6,
    borderRadius: 12,
    backgroundColor: "rgba(0,91,172,1)",
  },
  Txt015: {
    fontSize: 24,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
  },
})