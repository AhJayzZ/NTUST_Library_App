import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import language_page from './app/language_page'
import identity_page from './app/identity_page'
import login_page_NTUST from './app/login_page_NTUST'
import login_page_notNTUST from './app/login_page_notNTUST';
import login_page_other from './app/login_page_other';
import login_page_staff from './app/login_page_staff';
import login_help_page from './app/login_help_page'
import forget_password_page from './app/forget_password_page';
import forget_password_finish_page from './app/forget_password_finish_page';

const Stack = createNativeStackNavigator();

export default function() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name='language_page' component={ language_page } options={{headerShown: false}} />
          <Stack.Screen name='identity_page' component={ identity_page } options={{headerShown: false}} />
          <Stack.Screen name='login_page_NTUST' component={ login_page_NTUST } options={{headerShown: false}} />
          <Stack.Screen name='login_page_notNTUST' component={ login_page_notNTUST } options={{headerShown: false}} />
          <Stack.Screen name='login_page_other' component={ login_page_other } options={{headerShown: false}} />
          <Stack.Screen name='login_page_staff' component={ login_page_staff } options={{headerShown: false}} />
          <Stack.Screen name='login_help_page' component={ login_help_page } options={{headerShown: false}} />
          <Stack.Screen name='forget_password_page' component={ forget_password_page } options={{headerShown: false}} />
          <Stack.Screen name='forget_password_finish_page' component={ forget_password_finish_page } options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
