import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React , { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import initial_language_page from './app/login/initial_language_page'
import identity_page from './app/login/identity_page'
import login_page_NTUST from './app/login/login_page_NTUST'
import login_page_notNTUST from './app/login/login_page_notNTUST';
import login_page_other from './app/login/login_page_other';
import login_page_staff from './app/login/login_page_staff';
import login_help_page from './app/login/login_help_page'
import forget_password_page from './app/login/forget_password_page';
import forget_password_finish_page from './app/login/forget_password_finish_page';

import PersonalNavigator from './app/personal/PersonalNavigator'

import random_book_page from './app/search_function/random_book';
import scan_bar_code_page from './app/search_function/scan_bar_code';

import account_page from './app/setting/account'
import language_page from './app/setting/language';
import home_page from './app/setting/home'
import mood_message_page from './app/setting/mood_message';

const Stack = createNativeStackNavigator();

// AsyncStorage.clear()

// const [isLoggedIn,setIsLoggedIn] = useState(false)

// const loggedInCheck = async() => {
//   await AsyncStorage.getAllKeys().then(res => console.log(res))
//   await AsyncStorage.getItem('language') ? true : false
//   setIsLoggedIn(true)
// }



export default function() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName='initial_language_page'>

              <Stack.Screen name='initial_language_page' component={ initial_language_page } options={{headerShown: false}} />

              <Stack.Screen name='personal_navigator_page' component={ PersonalNavigator } options = {{headerShown:false}} />
              
              <Stack.Screen name='random_book_page'  component={ random_book_page } options={{headerShown:false}} />
              <Stack.Screen name='scan_bar_code_page'  component={ scan_bar_code_page } options={{headerShown:false}} />
  
              <Stack.Screen name='identity_page' component={ identity_page } options={{headerShown: false}} />
              <Stack.Screen name='login_page_NTUST' component={ login_page_NTUST } options={{headerShown: false}} />
              <Stack.Screen name='login_page_notNTUST' component={ login_page_notNTUST } options={{headerShown: false}} />
              <Stack.Screen name='login_page_other' component={ login_page_other } options={{headerShown: false}} />
              <Stack.Screen name='login_page_staff' component={ login_page_staff } options={{headerShown: false}} />
              <Stack.Screen name='login_help_page' component={ login_help_page } options={{headerShown: false}} />
              <Stack.Screen name='forget_password_page' component={ forget_password_page } options={{headerShown: false}} />
              <Stack.Screen name='forget_password_finish_page' component={ forget_password_finish_page } options={{headerShown: false}} />
  
              <Stack.Screen name='account_page' component={ account_page } options={{headerShown:false}} />
              <Stack.Screen name='language_page' component={ language_page } options={{headerShown:false}} />
              <Stack.Screen name='home_page' component={ home_page } options={{headerShown:false}} />
              <Stack.Screen name='mood_message_page' component={ mood_message_page } options={{headerShown:false}} />
  
          </Stack.Navigator>
        </NavigationContainer>
  )
}
