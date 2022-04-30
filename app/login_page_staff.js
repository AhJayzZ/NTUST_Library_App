import React from "react"
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from "react-native"

export default function(navigation) {
  return (
    <View style={styles.main}>

      <View style={styles.Top_tabs_with_return_buttom}>
        <TouchableOpacity onPress={() => navigation.navigation.goBack()}>
          <Image
            style={styles.Return_buttom}
            source={require('../assets/return_button.png')}
          />
        </TouchableOpacity>
        <View style={styles.Text_field}>
          <Text style={styles.Txt783}>登入</Text>
        </View>
      </View>

      <Text>{'\n'}</Text>

      <View style={styles.Header}>
        <Image
          style={styles.Icon_app}
          source={require('../assets/NTUST_Lib_Icon.png')}
        />
        <Text style={styles.Txt755}>教職員</Text>
        <Text style={styles.Txt762}>登入</Text>
      </View>

      <View style={styles.Input}>
        <Text style={styles.Txt129}>賬號</Text>
        <View style={styles.TextField}>
          <TextInput style={styles.Txt341} placeholder="身份證字號"></TextInput>
        </View>
      </View>

      <View style={styles.Input}>
        <Text style={styles.Txt129}>密碼</Text>
        <View style={styles.TextField}>
          <TextInput style={styles.Txt341} placeholder="密碼"></TextInput>
        </View>
      </View>

      <TouchableOpacity style={styles.Buttom_1} onPress={() => navigation.navigation.navigate('personal_navigator_page')}>
        <Text style={styles.Txt015}>登入</Text>
      </TouchableOpacity>

      <View style={styles.Buttom_2}>
        <TouchableOpacity style={styles.Text_buttom} onPress={() => navigation.navigation.navigate('forget_password_page')}>
          <Text style={styles.Txt885}>忘記密碼</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Text_buttom1} onPress={() => navigation.navigation.navigate('login_help_page')}>
          <Text style={styles.Txt885}>登入說明</Text>
        </TouchableOpacity>
      </View>
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
  Txt762: {
    position: "absolute",
    top: 204,
    left: 144,
    fontSize: 36,
    fontWeight: "400",
    color: "rgba(1,59,100,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 76,
    height: 44,
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

  Input: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: 14,
    paddingBottom: 0,
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 6,
    width: 360,
  },
  Txt129: {
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
  Txt341: {
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 24,
    color: "rgba(0,0,0,1)",
    width: 279,
    opacity: 0.5,
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
    marginBottom: 6,
    width: 360,
  },
  Txt129: {
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
  Txt341: {
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 24,
    color: "rgba(0,0,0,1)",
    width: 279,
    opacity: 0.5,
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

  Buttom_2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 19,
    paddingRight: 19,
    width: 360,
  },
  Text_buttom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 9,
    paddingRight: 9,
    marginRight: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(82,82,92,1)",
  },
  Txt885: {
    fontSize: 24,
    fontWeight: "400",
    color: "rgba(1,59,100,1)",
    textAlign: "center",
    justifyContent: "center",
  },
  Text_buttom1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 9,
    paddingRight: 9,
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(82,82,92,1)",
  },
  Txt885: {
    fontSize: 24,
    fontWeight: "400",
    color: "rgba(1,59,100,1)",
    textAlign: "center",
    justifyContent: "center",
  },
})