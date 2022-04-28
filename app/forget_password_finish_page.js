import React from "react"
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native"

export default function(navigation) {
  return (
    <View>
      
      <View style={styles.Top_tabs_with_return_buttom}>
        <TouchableOpacity onPress={() => navigation.navigation.goBack()}>
          <Image
            style={styles.Return_buttom}
            source={require('../assets/return_button.png')}
          />
        </TouchableOpacity>
        <View style={styles.Text_field}>
          <Text style={styles.Txt022}>忘記密碼</Text>
        </View>
      </View>
      
      <Text> {'\n\n'}</Text>

      <View style={styles.Header}>
        <Image
          style={styles.Icon_app}
          source={require('../assets/NTUST_Lib_Icon.png')}
        />
        <Text style={styles.Txt653}>忘記密碼</Text>
      </View>

      <View>
        <Text style={styles.TxtFont}>
          <Text>1.已將重設密碼鏈接，傳送到您的聯絡Email。{'\n'}</Text>
          <Text>2.寄送之電子信箱預設為本校之信箱，另可修改或增加其他您常用之信箱。{'\n'}</Text>
        </Text>
      </View>

    </View>
  )
}

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
  Header: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 360,
    height: 204,
  },
  Icon_app: {
    width: 160,
    height: 160,
  },
  Txt653: {
    fontSize: 36,
    fontWeight: "400",
    color: "rgba(1,59,100,1)",
    textAlign: "center",
    justifyContent: "center",
  },
  TxtFont : {
    paddingTop : 30,
    paddingLeft : 20,
    paddingRight : 20,
    fontSize: 24,
    fontWeight: "400",
    color: "rgba(1,59,100,1)",
    justifyContent: "center"
  }
})