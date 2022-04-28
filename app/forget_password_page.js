import React from "react"
import { StyleSheet, Image, Text, View, TouchableOpacity ,TextInput } from "react-native"

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

      <View style={styles.Input}>
        <Text style={styles.Txt465}>請告訴我們您的賬號</Text>
        <TextInput style={styles.TextField} placeholder="學號/證號">
          <Text style={styles.Txt492}></Text>
        </TextInput>
      </View>

      <TouchableOpacity style={styles.Confirm_button} onPress={() => navigation.navigation.navigate('forget_password_finish_page')}>
        <Text style={styles.Txt772}>確認</Text>
      </TouchableOpacity>

      <View>
        <Text style={styles.TxtFont}>
          <Text>帳號：{'\n'}</Text>
          <Text>1.學生請輸入學生證號，在校教職員工請輸入身分證字號。{'\n'}</Text>
          <Text>2.校友借書證及其他借書證讀者，請輸入借書證上之條碼。{'\n'}</Text>
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
  Input: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: 14,
    paddingBottom: 0,
    paddingLeft: 24,
    paddingRight: 24,
    width: 360,
    height: 98,
  },
  Txt465: {
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 27,
    color: "rgba(82,82,92,1)",
    width: 311,
    marginBottom: 8,
  },
  TextField: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 14,
    paddingRight: 14,
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(217,217,217,1)",
    width: 310,
  },
  Txt492: {
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 24,
    color: "rgba(0,0,0,1)",
    width: 279,
    opacity: 0.5,
  },
  Confirm_button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10 ,
    paddingTop: 11,
    paddingBottom: 11,
    paddingLeft: 19,
    paddingRight: 19,
    borderRadius: 12,
    backgroundColor: "rgba(0,91,172,1)",
    width: 88,
    height: 53,
  },
  Txt772: {
    fontSize: 24,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
  },
  TxtFont : {
    paddingTop : 10,
    paddingLeft : 20,
    paddingRight : 20,
    fontSize: 24,
    fontWeight: "400",
    color: "rgba(1,59,100,1)",
    justifyContent: "center"
  }
})