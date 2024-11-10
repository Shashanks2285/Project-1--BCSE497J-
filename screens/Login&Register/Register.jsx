

import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Error from 'react-native-vector-icons/MaterialIcons';
import { useState } from 'react';
import axios from 'axios';
import Toast from 'react-native-toast-message'; // Import Toast
import { RadioButton } from 'react-native-paper';

function RegisterPage({ props }) {
  const [name, setName] = useState('');
  const [nameVerify, setNameVerify] = useState(false);
  const [email, setEmail] = useState('');
  const [emailVerify, setEmailVerify] = useState(false);
  const [mobile, setMobile] = useState('');
  const [mobileVerify, setMobileVerify] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('');
  const [secretText, setSecretText] = useState('');

  const navigation = useNavigation();

  function handelSubmit() {
    const userData = {
      name,
      email,
      mobile,
      password,
      userType,
    };

    if (userType == 'Admin' && secretText != 'Text1243') {
      return Toast.show({
        type: 'error',
        text1: 'Invalid Admin!',
        text2: 'Secret text does not match.',
      });
    }

    axios
      .post('http://192.168.248.40:5001/register', userData)
      .then(res => {
        // console.log(res.data);
        // console.log(res.data.status);
        if (res.data.status == 'ok') {
          Toast.show({
            type: 'success',
            text1: 'Registered successfully!',
            text2: 'Welcome to the app!',
          });
          navigation.navigate('Login');
        } else {
         
          Toast.show({
            type: 'error',
            text1: 'Registration failed!',
            text2: (res.data),
          });
        }
      })
      .catch(e => {
        Toast.show({
          type: 'error',
          text1: 'Error!',
          text2: e.message,
        });
      });
  }

  function handleName(e) {
    const nameVar = e.nativeEvent.text;
    setName(nameVar);
    setNameVerify(nameVar.length > 1);
  }

  function handleEmail(e) {
    const emailVar = e.nativeEvent.text;
    setEmail(emailVar);
    setEmailVerify(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(emailVar));
  }

  function handleMobile(e) {
    const mobileVar = e.nativeEvent.text;
    setMobile(mobileVar);
    setMobileVerify(/[6-9]{1}[0-9]{9}/.test(mobileVar));
  }

  function handlePassword(e) {
    const passwordVar = e.nativeEvent.text;
    setPassword(passwordVar);
    setPasswordVerify(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(passwordVar));
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'always'} style={{ backgroundColor: 'white' }}>
      <View>
        {/* <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../assets/signUp.png')} />
        </View> */}
        <View style={styles.loginContainer}>
          <Text style={styles.text_header}>Register!!!</Text>

          {/* Radio Button Section */}
          <View style={styles.radioButton_div}>
            <Text style={styles.radioButton_title}> Login as</Text>
            <View style={styles.radioButton_inner_div}>
              <Text style={styles.radioButton_text}>User</Text>
              <RadioButton value="User" status={userType == 'User' ? 'checked' : 'unchecked'} onPress={() => setUserType('User')} />
            </View>
            <View style={styles.radioButton_inner_div}>
              <Text style={styles.radioButton_text}>Admin</Text>
              <RadioButton value="Admin" status={userType == 'Admin' ? 'checked' : 'unchecked'} onPress={() => setUserType('Admin')} />
            </View>
          </View>

          {userType == 'Admin' ? (
            <View style={styles.action}>
              <FontAwesome name="user-o" color="#lightgrey" style={styles.smallIcon} />
              <TextInput placeholder="Secret Text" style={styles.textInput} onChange={e => setSecretText(e.nativeEvent.text)} />
            </View>
          ) : null}

          {/* Input Fields */}
          {/* Name */}
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#lightgrey" style={styles.smallIcon} />
            <TextInput placeholder="Name" style={styles.textInput} onChange={handleName} />
            {name.length < 1 ? null : nameVerify ? <Feather name="check-circle" color="green" size={20} /> : <Error name="error" color="red" size={20} />}
          </View>
          {name.length < 1 ? null : nameVerify ? null : <Text style={{ marginLeft: 20, color: 'red' }}>Name should be more than 1 character.</Text>}

          {/* Email */}
          <View style={styles.action}>
            <Fontisto name="email" color="#lightgrey" size={24} style={{ marginLeft: 0, paddingRight: 5 }} />
            <TextInput placeholder="Email" style={styles.textInput} onChange={handleEmail} />
            {email.length < 1 ? null : emailVerify ? <Feather name="check-circle" color="green" size={20} /> : <Error name="error" color="red" size={20} />}
          </View>
          {email.length < 1 ? null : emailVerify ? null : <Text style={{ marginLeft: 20, color: 'red' }}>Enter Proper Email Address</Text>}

          {/* Mobile */}
          <View style={styles.action}>
            <FontAwesome name="mobile" color="#lightgrey" size={35} style={{ paddingRight: 10, marginTop: -7, marginLeft: 5 }} />
            <TextInput placeholder="Mobile" style={styles.textInput} onChange={handleMobile} maxLength={10} />
            {mobile.length < 1 ? null : mobileVerify ? <Feather name="check-circle" color="green" size={20} /> : <Error name="error" color="red" size={20} />}
          </View>
          {mobile.length < 1 ? null : mobileVerify ? null : <Text style={{ marginLeft: 20, color: 'red' }}>Phone number with 6-9 and remaining 9 digits with 0-9</Text>}

          {/* Password */}
          <View style={styles.action}>
            <FontAwesome name="lock" color="#lightgrey" style={styles.smallIcon} />
            <TextInput placeholder="Password" style={styles.textInput} onChange={handlePassword} secureTextEntry={!showPassword} />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {password.length < 1 ? null : !showPassword ? (
                <Feather name="eye-off" color={passwordVerify ? 'green' : 'red'} size={23} />
              ) : (
                <Feather name="eye" color={passwordVerify ? 'green' : 'red'} size={23} />
              )}
            </TouchableOpacity>
          </View>
          {password.length < 1 ? null : passwordVerify ? null : <Text style={{ marginLeft: 20, color: 'red' }}>Uppercase, Lowercase, Number, and 6 or more characters.</Text>}

          {/* Register Button */}
          <View style={styles.button}>
            <TouchableOpacity style={styles.inBut} onPress={handelSubmit}>
              <View>
                <Text style={styles.textSign}>Register</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Add Toast Component */}
      <Toast />
    </ScrollView>
  );
}

export default RegisterPage;
