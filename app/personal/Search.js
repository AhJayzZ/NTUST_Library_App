import * as React from 'react';
import { Text, View, StyleSheet ,Image,TouchableOpacity ,TextInput} from 'react-native';

export default function(navigation){    
return (
  <View>

    <View style={styles.Frame2}>
      <TouchableOpacity>
          <Image style={styles.Barcode} source={require('../../assets/barcode.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.Ocr} source={require('../../assets/ocr.png')} />
      </TouchableOpacity>
      <TextInput style={styles.inputText} placeholder="館藏查詢"></TextInput>
      <TouchableOpacity>
        <Image style={styles.Search} source={require('../../assets/search_icon.png')} />
      </TouchableOpacity>
      
    </View>

    <View style={styles.functionMenu}>
      <Text style={styles.functionLabel}>功能</Text>
      <View style={{borderBottomColor: '#D9D9D9' ,borderBottomWidth : 10}} />
    </View> 

  </View>

  );
}

const styles = StyleSheet.create({
  Frame5: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 9,
    paddingRight: 9,
    backgroundColor : '#86CADD',
    width: '100%',
    height: 44,
  },
  Txt944: {
    fontSize: 20,
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    alignSelf : 'center',
  },
  expandIconStyle : {
    
  },
  Frame2: {
    display: 'flex',
    flexDirection: "row",
    justifyContent : 'center',
    marginTop: 10,
    borderRadius : 12,
    borderColor : "#D9D9D9",
    borderWidth : 2,
    width: '100%',
    height: 50,
  },
  Barcode: {
    width: 40,
    height: 40,
  },
  Ocr: {
    width: 40,
    height: 40,
  },
  Search : {
    width: 40,
    height: 40,
  },
  inputText:{
    fontSize: 20,
    paddingLeft : 10,
    width : '60%',
    fontWeight: "400",
    color: "#D9D9D9",
    justifyContent: "center",
    alignSelf : 'center',
  },
  functionMenu : {
    width :'100%',
    display : 'flex',
    flexDirection : 'row',
    paddingLeft:10
  },
  functionLabel : {
    fontSize: 20,
    fontWeight: "400",
    color: "#104695",
    textAlign: "center",
    justifyContent: "center",
  }
})