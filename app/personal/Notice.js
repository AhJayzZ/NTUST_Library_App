import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';

export default function(navigation) {
    return (

    <View style={{backgroundColor:'#E2E6F2'}}>

      <View style={styles.Tabs}>
          <View style={styles.Today}>
            <Text style={styles.dateStyle}>（五） 2022-5-6 學期間</Text>
          </View>
      </View>
      

  
      <View style={styles.ServiceTabs}>
        <View style={styles.Tab}>
          <View>
            <Text style={{marginRight : 40,textAlign:'center'}}>今日 {'\n'}服務時間</Text>
          </View>
          <Text style={styles.Txt197}>書庫與借還 08:10 - 21:30</Text>
        </View>
        <View style={styles.Tab}>
          <Text style={styles.Txt197}>前棟閱覽 08:10 - 23:30</Text>
        </View>
      </View>


    </View>
    );
}

const styles = StyleSheet.create({
  Tabs: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 4,
    paddingBottom: 4,
    width: '100%',
    height: 33,
  },
  Today: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf : 'center',
  },
  dateStyle :{
    fontWeight : '400',
    color :'#063071'
  },
  ServiceTabs: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    marginLeft : 100,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 4,
    paddingRight: 4,
    borderRadius: 10,
    backgroundColor: "rgba(134,202,221,1)",
    width: 236,
    height: 56,
  },
  Tab: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: 226,
  },
  Txt197: {
    fontSize: 18,
    fontWeight: "400",
    color: "rgba(6,48,113,1)",
    textAlign: "right",
    justifyContent: "flex-end",
    marginRight: 10,
  },
  Txt027: {
    fontSize: 18,
    fontWeight: "400",
    color: "rgba(6,48,113,1)",
    textAlign: "right",
    justifyContent: "flex-end",
  },
  Tab: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  Txt197: {
    fontSize: 18,
    fontWeight: "400",
    color: "rgba(6,48,113,1)",
    marginRight: 10,
  },
})

