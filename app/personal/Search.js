import * as React from 'react';
import { Text, View, StyleSheet, TextInput,Image,TouchableOpacity ,Linking} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

const search_selection = ["關鍵字", "書刊名", "作者", "主題" , "索書號(美國國會)"  , "索書號(中國圖書)" , "ISBN/ISSN" , "條碼號"]
const range_selection = ["全部館藏" , "圖書" , "期刊" , "視聽資料", "學位論文", "電子書" , "電子期刊"]
export default function(navigation){    
return (
    <View style={{padding: 12}}>
      <View style={styles.dropdownBtnField}>
        <SelectDropdown 
	        data={search_selection}
	        onSelect={(selectedItem, index) => {console.log(selectedItem, index)}}
	        buttonTextAfterSelection={(selectedItem, index) => {return selectedItem}}
	        rowTextForSelection={(item, index) => {return item}}
          defaultButtonText = {'查詢'}
          buttonStyle={styles.dropdownBtnStyle}
          buttonTextStyle={styles.dropdownBtnTextStyle}
          renderDropdownIcon={isOpened => {
            return isOpened ? 
            <Image style={styles.icon_vector} source={require('../../assets/search_page/upVector.png')}/> :
            <Image style={styles.icon_vector} source={require('../../assets/search_page/downVector.png')}/>
          }}
      />
      </View>
      

      <View style={{flexDirection:'row',}}>
      
        <TextInput
          style={styles.input_1}
          placeholder="館藏查詢"
        />
        <TouchableOpacity style={styles.input_2} onPress={ () => alert('開發中')}>
          <Image
            style={styles.ocr}
            source={require('../../assets/search_page/ocr.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.input_3} onPress={ () => navigation.navigation.navigate('scan_bar_code_page')}>
          <Image
            style={styles.barcode}
            source={require('../../assets/search_page/barcode.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.input_4}>
          <Image
            style={styles.magnifier}
            source={require('../../assets/search_page/magnifier.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.dropdownBtnField}>
        <SelectDropdown 
	        data={range_selection}
	        onSelect={(selectedItem, index) => {console.log(selectedItem, index)}}
	        buttonTextAfterSelection={(selectedItem, index) => {return selectedItem}}
	        rowTextForSelection={(item, index) => {return item}}
          defaultButtonText = {'館藏範圍'}
          buttonStyle={styles.dropdownBtnStyle}
          buttonTextStyle={styles.dropdownBtnTextStyle}
          renderDropdownIcon={isOpened => {
            return isOpened ? 
            <Image style={styles.icon_vector} source={require('../../assets/search_page/upVector.png')}/> :
            <Image style={styles.icon_vector} source={require('../../assets/search_page/downVector.png')}/>
          }}
        />
      </View>


      <View style={styles.container_1}>
        <Text style={styles.Text_1} >新進/熱門館藏</Text>
        <View style={{flexDirection:'row',}}>
          <TouchableOpacity>
            <Image
              style={styles.icon_left}
              source={require('../../assets/search_page/icon_left.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.book_image}
              source={require('../../assets/search_page/book.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={styles.icon_right}
              source={require('../../assets/search_page/icon_right.png')}
            />
          </TouchableOpacity>

        </View>
      </View>


      <View>
        {/* First Row */}
        <View style={{flexDirection: 'row',paddingTop:5,paddingBottom:5,}}>
          <Text style={{color:'#005BAC',fontSize:18, }}>功能 </Text>
          <View style={{backgroundColor: '#005BAC', height: 1, flex: 1, alignSelf: 'center'}} />
        </View>
        <View style={{flexDirection: 'row',paddingVertical:5,}}>

          <View style={styles.button_area}>
            <TouchableOpacity onPress={() => Linking.openURL('http://www-o.ntust.edu.tw/~lib/libcat/catalog/newbooks.html') }>
              <Image
              style={styles.button}
              source={require('../../assets/search_page/newBook.png')}/>
            </TouchableOpacity>
            <Text style={styles.button_text}>新到館藏</Text>
          </View>

          <View style={styles.button_area}>
            <TouchableOpacity onPress={() => Linking.openURL('https://bestsellers.lib.ntust.edu.tw/preversion3/') }>
              <Image
              style={styles.button}
              source={require('../../assets/search_page/classic_book.png')}/>
            </TouchableOpacity>
            <Text style={styles.button_text}>暢銷/經典</Text>
          </View>

          <View style={styles.button_area}>
            <TouchableOpacity onPress={() => navigation.navigation.navigate('random_book_page')}>
              <Image
              style={styles.button}
              source={require('../../assets/search_page/random_book.png')}/>
            </TouchableOpacity>
            <Text style={styles.button_text}>抽書選讀</Text>
          </View>

          <View style={styles.button_area}>
            <TouchableOpacity onPress={() => alert('開發中')}>
            <Image
            style={styles.button}
            source={require('../../assets/search_page/recently_return_book.png')}/>
            </TouchableOpacity>
            <Text style={styles.button_text}>近期還書</Text>
          </View>
        </View>


        {/* Second Row */}
        <View style={{flexDirection: 'row',paddingVertical:5,}}>
          <View style={styles.button_reference_area}>
            <TouchableOpacity onPress={() => Linking.openURL('http://www-o.ntust.edu.tw/~lib/libcat/catalog/referencebook.html')}>
            <Image
            style={styles.button}
            source={require('../../assets/search_page/reference.png')}/>
            </TouchableOpacity>
            <Text style={styles.button_text}>指定參考書</Text>
          </View>

          <View style={styles.button_area}>
            <TouchableOpacity onPress={() => Linking.openURL('https://library.ntust.edu.tw/p/412-1049-214.php?')}>
            <Image
            style={styles.button}
            source={require('../../assets/search_page/CD.png')}/>
            </TouchableOpacity>
            <Text style={styles.button_text}>視聽資料</Text>
          </View>

          <View style={styles.button_area}>
            <TouchableOpacity onPress={() => Linking.openURL('https://library.ntust.edu.tw/p/412-1049-147.php?') }>
            <Image
            style={styles.button}
            source={require('../../assets/search_page/paper.png')}/>
            </TouchableOpacity>
            <Text style={styles.button_text}>期刊聯合</Text>
          </View>

          <View style={styles.button_area}>
            <TouchableOpacity onPress={() => alert('開發中') }>
            <Image
            style={styles.button}
            source={require('../../assets/search_page/finding.png')}/>
            </TouchableOpacity>
            <Text style={styles.button_text}>回報/協尋</Text>
          </View>
        </View>

        {/* Third Row */}
        <View style={{flexDirection: 'row',paddingVertical:5,}}>
          <View style={styles.button_area}>
            <TouchableOpacity onPress={() => Linking.openURL('https://library.ntust.edu.tw/p/412-1049-127.php?')}>
            <Image
            style={styles.button}
            source={require('../../assets/search_page/e_resource.png')}/>
            </TouchableOpacity>
            <Text style={styles.button_text}>電子資源</Text>
          </View>
        </View>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  input_1: {
    height: 40,
    width: '69%',
    paddingLeft: 10,
    borderWidth: 1,
    borderRightWidth : 0,
    borderBottomLeftRadius: 12,
    borderTopLeftRadius: 12,
    borderColor: '#D9D9D9',
    alignSelf: 'center'
  },
  input_2: {
    borderTopWidth: 1,
    borderBottomWidth:1 ,
    borderColor: '#D9D9D9',
    justifyContent : 'center'
  },
  input_3: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#D9D9D9',
    justifyContent : 'center'
  },
  input_4: {
    marginRight : 30, 
    
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderTopRightRadius : 12,
    borderBottomRightRadius : 12,
    borderColor: '#D9D9D9',
    justifyContent : 'center'
  },
  ocr : {
    width: 35,
    height: 35
  },
  barcode:{
    width: 35,
    height: 35,
  },
  magnifier:{
    width: 32,
    height: 32,
  },
  container_1:{
    height: 200,
    borderWidth:1,
    borderColor: '#005BAC',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    marginHorizontal: 5,
    marginTop:5,
  },
  Text_1:{
    height: 44,
    paddingTop: 6,
    backgroundColor: '#005BAC',
    color: '#E2E6F2',
    fontSize: 20,
    textAlign: 'center',
  },
  icon_left:{
    width: 32,
    height: 32,
    marginLeft: 50,
    marginTop: 50,
    marginRight: 18,
  },
  icon_right:{
    width: 32,
    height: 32,
    marginRight: 50,
    marginTop: 50,
    marginLeft: 18,
  },
  book_image:{
    width: 106,
    height: 132,
    marginTop: 9,
  },
  button:{
    height: 45,
    width: 45,
  },
  button_text:{
    color: '#104695',
  },
  button_area:{
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 12.5,
  },
  button_reference_area:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 7,
    marginRight: 11,
  },
  dropdownBtnStyle: {
    width: '100%',
    height: 40,
    backgroundColor: '#86CADD',
    borderRadius: 8,
  },
  dropdownBtnField:{
    justifyContent: 'center',
    alignItems: 'center',
    padding:5,
  },
  dropdownBtnTextStyle:{
    fontSize: 20,
    fontWeight: "400",
    textAlign: "auto",
  },
  icon_vector:{
    height: 10,
    width: 15,
  },
});