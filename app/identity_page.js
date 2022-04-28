import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity, Image } from 'react-native';

export default function(navigation) {
  return (
    <View style={{backgroundColor: '#E2E6F2',height:'100%'}}>
      
      <StatusBar style='auto' hidden />
      
      <View style={styles.Top_tabs_with_return_buttom}>
        <TouchableOpacity onPress={() => navigation.navigation.goBack()}>
          <Image
          style={styles.Return_buttom}
          source={require('../assets/return_button.png')}/>
        </TouchableOpacity>
        <View style={styles.Text_field}>
          <Text style={styles.Txt716}>登入身份選擇</Text>
        </View>
      </View>
      
      <Text>{'\n\n\n'}</Text>

      <View style={styles.Header}>
        <Image
          style={styles.Icon_app}
          source={require('../assets/NTUST_Lib_Icon.png')}
        />
        <Text>{'\n'}</Text>
        <Text style={styles.Txt967}>登入身份選擇</Text>
      </View>

      <Text>{'\n\n'}</Text>

      <View style={styles.Button_group}>
        <View style={styles.Group832}>
          <TouchableOpacity style={styles.Text_header} onPress={() => navigation.navigation.navigate('login_page_NTUST') }>
            <Text style={styles.Txt277}>臺科在校生</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Text_header} onPress={() => navigation.navigation.navigate('login_page_notNTUST')}>
            <Text style={styles.Txt277}>臺大、臺師大在校生</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Text_header} onPress={() => navigation.navigation.navigate('login_page_staff')} >
            <Text style={styles.Txt277}>教職員</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Text_header} onPress={() => navigation.navigation.navigate('login_page_other')}>
            <Text style={styles.Txt277}>校友及其他借書證讀者</Text>
          </TouchableOpacity>
        </View>
      </View>


    </View>
  );
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
      Txt716: {
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
      Txt967: {
        fontSize: 36,
        fontWeight: "400",
        color: "rgba(1,59,100,1)",
        textAlign: "center",
        justifyContent: "center",
      },
      Button_group: {
        width: 300,
        height: 248,
        alignSelf : "center"
      },
      Group832: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      Text_header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 11,
        paddingBottom: 11,
        paddingLeft: 19,
        paddingRight: 19,
        marginBottom: 12,
        borderRadius: 12,
        backgroundColor: "rgba(0,91,172,1)",
      },
      Txt277: {
        fontSize: 24,
        fontWeight: "700",
        color: "rgba(255, 255, 255, 1)",
      }
});
