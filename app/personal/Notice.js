import * as React from 'react';
import { StyleSheet,Image, Button, View, SafeAreaView, Text, Alert} from 'react-native';

export default function(navigation) {
    
  const [date, setDate] = React.useState(null);
  React.useEffect(() => {
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+ ' ('+ today.getDay() + ')';
    setDate(date);
  }, []);

    return (
      <View >
        <Text style={styles.time}>{date}    {'學期間'}</Text>
        <View style={{flexDirection: 'row',margin: 9, paddingHorizontal: 8,}}>
          <View style={{width: '32%',}}>
            <Text style={styles.text_1} > 今日服務時間 </Text>
          </View>
          <View style={{backgroundColor: '#86CADD',paddingRight:5,borderRadius: 10,}}>
            <Text style={styles.text_2} > 書庫與借還 08:10 - 21:30</Text>
            <Text style={styles.text_2} > 前棟閱覽 08:10 - 21:30</Text>
          </View>
        </View>
        <View>
          <View style={{borderBottomColor: '#005BAC',borderBottomWidth: 1, marginHorizontal: 16}}/>
          <Text style={styles.time} > 近期活動 </Text>
          <View style={{backgroundColor: '#86CADD',marginHorizontal: 8, paddingHorizontal:5, paddingVertical: 6.5, borderWidth: 1,borderColor:'#013B64',}}>
            <Text style={styles.text_3} > 5/4 (三) 電影欣賞 -《蜘蛛人:無家日》</Text>
            <Text style={styles.text_3} > 5/6 (五) 心夜享讀 - 心得分喜活動</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', backgroundColor: '#84AEE9', marginVertical: 8, paddingLeft:5, paddingRight:65, paddingVertical: 20, }}>
          <Image
            style={styles.buttom}
            source={require('../../assets/notice_page/el_speaker.png')}
          />
          <Text style={styles.text_4} >因疫情關係，本館將於晚間8點閉館，造成不便盡請見諒。</Text>
        </View>
        <View style={{flexDirection: 'row', paddingLeft:5, paddingRight:65, paddingVertical: 12, }}>
          <Image
            style={styles.buttom}
            source={require('../../assets/notice_page/ping.png')}
          />
          <Text style={styles.text_4} >圖書館App已可以更新至新版本v1.2。</Text>
        </View>
        <View style={{flexDirection: 'row', backgroundColor: '#84AEE9', marginVertical: 8, paddingLeft:5, paddingRight:65, paddingVertical: 20, }}>
          <Image
            style={styles.buttom}
            source={require('../../assets/notice_page/ping2.png')}
          />
          <Text style={styles.text_4} >您借閱的書籍 擁抱脆弱 將於三天後到期，如欲延長借期，請盡速至 辦理續借。</Text>
        </View>
      </View>
      
    );
}


const styles = StyleSheet.create({
  time: {
    margin: 10,
    fontSize: 18,
    textAlign: 'center',
    color: '#063071',
  },
  text_1: {
    marginLeft: 9,
    marginRight: 15,
    fontSize: 18,
    textAlign: 'center',
    color: '#063071',
  },
  text_2: {
    fontSize: 18,
    textAlign: 'right',
    color: '#063071',
  },
  text_3: {
    fontSize: 18,
    textAlign: 'left',
    color: '#063071',
  },
  text_4: {
    fontSize: 18,
    textAlign: 'left',
    color: 'black',
    paddingLeft:2,
  },
  buttom: {
    width: 38,
    height: 36,
    marginHorizontal:15,
    marginTop: 5,
  },
});
