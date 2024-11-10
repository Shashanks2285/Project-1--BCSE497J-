// const {
//     View,
//     Text,
//     Image,
//     TextInput,
//     TouchableOpacity,
//     ScrollView,
//     Alert,
//   } = require('react-native');
//   import {useNavigation} from '@react-navigation/native';
//   import styles from './style';
//   import Feather from 'react-native-vector-icons/Feather';
//   import FontAwesome from 'react-native-vector-icons/FontAwesome';
//   import {useEffect, useState} from 'react';
//   import {log} from 'react-native-reanimated';
//   import axios from 'axios';
//   import AsyncStorage from '@react-native-async-storage/async-storage';
  
//   function LoginPage({props}) {
//     const navigation = useNavigation();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

    
//     function handleSubmit() {
//       const userData = {
//         email: email,
//         password,
//       };
    
//       axios.post('http://192.168.248.40:5001/login-user', userData).then(res => {
//         if (res.data.status === 'ok') {
//           Alert.alert('Logged In Successfully');
//           AsyncStorage.setItem('token', res.data.data);
//           AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
//           AsyncStorage.setItem('userType', res.data.userType);
    
//           // Navigate to Home or Admin based on userType
//           if (res.data.userType === "Admin") {
//             navigation.navigate('AdminScreen');
//           } else {
//             navigation.navigate('Home');
//           }
//         } else {
//           Alert.alert('Login Failed');
//         }
//       }).catch(error => {
//         console.error("Login error:", error);
//       });
//     }
    
//     async function getData() {
//       const data = await AsyncStorage.getItem('isLoggedIn');
      
//       console.log(data, 'at app.jsx');
    
//     }
//     useEffect(()=>{
//       getData();
//       // console.log("Hii");
//     },[])
  
//     return (
//       <ScrollView
//         contentContainerStyle={{flexGrow: 1}}
//         keyboardShouldPersistTaps={'always'}>
//         <View style={{backgroundColor: 'white'}}>
//           <View style={styles.logoContainer}>
//             <Image
//               style={styles.logo}
//               source={require('./login.png')}
//             />
//           </View>
//           <View style={styles.loginContainer}>
//             <Text style={styles.text_header}>Login !!!</Text>
//             <View style={styles.action}>
//               <FontAwesome
//                 name="user"
//                 color="#black"
//                 style={styles.smallIcon}
//               />
//               <TextInput
//                 placeholder="Mobile or Email"
//                 style={styles.textInput}
//                 onChange={e => setEmail(e.nativeEvent.text)}
//               />
//             </View>
//             <View style={styles.action}>
//               <FontAwesome name="lock" color="#lightgrey" style={styles.smallIcon} />
//               <TextInput
//                 placeholder="Password"
//                 style={styles.textInput}
//                 onChange={e => setPassword(e.nativeEvent.text)}
//               />
//             </View>
//             <View
//               style={{
//                 justifyContent: 'flex-end',
//                 alignItems: 'flex-end',
//                 marginTop: 8,
//                 marginRight: 10,
//               }}>
//               <Text style={{color: '#lightgrey', fontWeight: '700'}}>
//                 Forgot Password
//               </Text>
//             </View>
//           </View>
//           <View style={styles.button}>
//             <TouchableOpacity style={styles.inBut} onPress={() => handleSubmit()}>
//               <View>
//                 <Text style={styles.textSign}>Log in</Text>
//               </View>
//             </TouchableOpacity>
  
//             <View style={{padding: 15}}>
//               <Text style={{fontSize: 14, fontWeight: 'bold', color: '#lightgrey'}}>
//                 ----Or Continue as----
//               </Text>
//             </View>
//             <View style={styles.bottomButton}>
//               <View
//                 style={{
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}>
//                 <TouchableOpacity style={styles.inBut2}>
//                   <FontAwesome
//                     name="user-circle-o"
//                     color="white"
//                     style={styles.smallIcon2}
//                   />
//                 </TouchableOpacity>
//                 <Text style={styles.bottomText}>Guest</Text>
//               </View>
//               <View
//                 style={{
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}>
//                 <TouchableOpacity
//                   style={styles.inBut2}
//                   onPress={() => {
//                     navigation.navigate('Register');
//                   }}>
//                   <FontAwesome
//                     name="user-plus"
//                     color="white"
//                     style={[styles.smallIcon2, {fontSize: 30}]}
//                   />
//                 </TouchableOpacity>
//                 <Text style={styles.bottomText}>Sign Up</Text>
//               </View>
//               <View
//                 style={{
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}>
//                 <TouchableOpacity
//                   style={styles.inBut2}
//                   onPress={() => alert('Coming Soon')}>
//                   <FontAwesome
//                     name="google"
//                     color="white"
//                     style={[styles.smallIcon2, {fontSize: 30}]}
//                   />
//                 </TouchableOpacity>
//                 <Text style={styles.bottomText}>Google</Text>
//               </View>
//               <View
//                 style={{
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}>
//                 <TouchableOpacity
//                   style={styles.inBut2}
//                   onPress={() => alert('Coming Soon')}>
//                   <FontAwesome
//                     name="facebook-f"
//                     color="white"
//                     style={[styles.smallIcon2, {fontSize: 30}]}
//                   />
//                 </TouchableOpacity>
//                 <Text style={styles.bottomText}>Facebook</Text>
//               </View>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     );
//   }
//   export default LoginPage;
const {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} = require('react-native');
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useEffect, useState} from 'react';
import {log} from 'react-native-reanimated';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function LoginPage({props}) {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
      const userData = {
          email: email,
          password,
      };

      try {
          const res = await axios.post('http://192.168.248.40:5001/login-user', userData);

          if (res.data.status === 'ok') {
              Alert.alert('Logged In Successfully');
              await AsyncStorage.setItem('token', res.data.data);
              await AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
               navigation.navigate('Profile');
              // Check if `userType` is defined before storing it
            //   if (res.data.userType) {
            //       await AsyncStorage.setItem('userType', res.data.userType);
            //   } else {
            //       console.warn('userType is undefined in API response');
            //   }

              // Navigate based on userType
            //   if (res.data.userType === "Admin") {
            //       navigation.navigate('AdminScreen');
            //   } else {
            //       navigation.navigate('Profile');
            //   }
          } else {
              Alert.alert('Login Failed');
          }
      } catch (error) {
          console.error("Login error:", error);
      }
  };

  async function getData() {
      const data = await AsyncStorage.getItem('isLoggedIn');
      console.log(data, 'at app.jsx');
  }

  useEffect(() => {
      getData();
  }, []);

  return (
      <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps={'always'}>
          <View style={{backgroundColor: 'white'}}>
              <View style={styles.logoContainer}>
                  <Image
                      style={styles.logo}
                      source={require('./login.png')}
                  />
              </View>
              <View style={styles.loginContainer}>
                  <Text style={styles.text_header}>Login !!!</Text>
                  <View style={styles.action}>
                      <FontAwesome
                          name="user"
                          color="#black"
                          style={styles.smallIcon}
                      />
                      <TextInput
                          placeholder="Mobile or Email"
                          style={styles.textInput}
                          onChange={e => setEmail(e.nativeEvent.text)}
                      />
                  </View>
                  <View style={styles.action}>
                      <FontAwesome name="lock" color="#lightgrey" style={styles.smallIcon} />
                      <TextInput
                          placeholder="Password"
                          style={styles.textInput}
                          secureTextEntry={true}
                          onChange={e => setPassword(e.nativeEvent.text)}
                      />
                  </View>
                  <View
                      style={{
                          justifyContent: 'flex-end',
                          alignItems: 'flex-end',
                          marginTop: 8,
                          marginRight: 10,
                      }}>
                      <Text style={{color: '#lightgrey', fontWeight: '700'}}>
                          Forgot Password
                      </Text>
                  </View>
              </View>
              <View style={styles.button}>
                  <TouchableOpacity style={styles.inBut} onPress={handleSubmit}>
                      <View>
                          <Text style={styles.textSign}>Log in</Text>
                      </View>
                  </TouchableOpacity>

                  <View style={{padding: 15}}>
                      <Text style={{fontSize: 14, fontWeight: 'bold', color: '#lightgrey'}}>
                          ----Or Continue as----
                      </Text>
                  </View>
                  <View style={styles.bottomButton}>
                      <View style={{alignItems: 'center', justifyContent: 'center'}}>
                          <TouchableOpacity style={styles.inBut2}>
                              <FontAwesome
                                  name="user-circle-o"
                                  color="white"
                                  style={styles.smallIcon2}
                              />
                          </TouchableOpacity>
                          <Text style={styles.bottomText}>Guest</Text>
                      </View>
                      <View style={{alignItems: 'center', justifyContent: 'center'}}>
                          <TouchableOpacity
                              style={styles.inBut2}
                              onPress={() => navigation.navigate('Register')}>
                              <FontAwesome
                                  name="user-plus"
                                  color="white"
                                  style={[styles.smallIcon2, {fontSize: 30}]}
                              />
                          </TouchableOpacity>
                          <Text style={styles.bottomText}>Sign Up</Text>
                      </View>
                      <View style={{alignItems: 'center', justifyContent: 'center'}}>
                          <TouchableOpacity style={styles.inBut2} onPress={() => alert('Coming Soon')}>
                              <FontAwesome
                                  name="google"
                                  color="white"
                                  style={[styles.smallIcon2, {fontSize: 30}]}
                              />
                          </TouchableOpacity>
                          <Text style={styles.bottomText}>Google</Text>
                      </View>
                      <View style={{alignItems: 'center', justifyContent: 'center'}}>
                          <TouchableOpacity style={styles.inBut2} onPress={() => alert('Coming Soon')}>
                              <FontAwesome
                                  name="facebook-f"
                                  color="white"
                                  style={[styles.smallIcon2, {fontSize: 30}]}
                              />
                          </TouchableOpacity>
                          <Text style={styles.bottomText}>Facebook</Text>
                      </View>
                  </View>
              </View>
          </View>
      </ScrollView>
  );
}

export default LoginPage;
