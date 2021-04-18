import React, {useState} from 'react';
import {
  ScrollView,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Image,
  StatusBar,
  Alert,
} from 'react-native';
// import * as firebase from 'firebase';

import {Text, TextInput, Button} from 'react-native-paper';
import axios from 'axios';
import {registerUrl} from '../../../services/api';

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('tester123@email.com');
  const [password, setPassword] = useState('123456');
  const [loading, setLoading] = useState(false);
  const [passwordConfirmation, setPasswordConfirmation] = useState('123456');

  const onRegister = async () => {
    setLoading(true);
    try {
      let response = await fetch(registerUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          password_confirmation: passwordConfirmation,
          role: 'driver',
        }),
      });

      setLoading(false);

      let json = await response.json();

      if (json.status === 'error') {
        Alert.alert(' ', json.message, [
          {
            text: 'OK',
            onPress: () => {},
          },
        ]);
      } else {
        await Alert.alert(' ', 'User successfully registered!', [
          {
            text: 'OK',
            onPress: () => {
              navigation.replace('Login');
            },
          },
        ]);
        
      }

      // console.log('login:',json);
    } catch (error) {
      console.error(error);
    }
  };

  async function register() {
    // setLoading(true);
    if (email === '' || password === '') {
      Alert.alert('Data tidak lengkap', 'Semua field harus diisi', [
        {
          text: 'OK',
          onPress: () => {},
        },
      ]);

      return;
    }

    setLoading(true);

    // console.log('email:', email)
    //* post
    /*
    axios
      .post(registerUrl, {
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
        role: 'driver',
      })
      .then(response => {
        setLoading(false);

        if (response.data.status === 'error') {
          Alert.alert(' ', response.data.message, [
            {
              text: 'OK',
              onPress: () => {},
            },
          ]);
        } else {
          navigation.replace('Login');
        }
      })
      .catch(error => {
        console.log(error);
      });
      */

    //* Fetch

    fetch(registerUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
        role: 'driver',
      }),
    })
      .then(response => {
        console.log('response:', response);
        console.log('-----');
        // response.json()
      })
      .then(responseJson => {
        console.log('responseJson:', responseJson);
        // if (responseJson.status === 'error') {
        //   Alert.alert(' ', responseJson.message, [
        //     {
        //       text: 'OK',
        //       onPress: () => {},
        //     },
        //   ]);
        // } else {
        //   navigation.replace('Login');
        // }
      })
      .catch(error => {
        //display error message
        // console.warn(error);
        Alert.alert(' ', error, [
          {
            text: 'OK',
            onPress: () => {},
          },
        ]);
      });
  }

  return (
    <KeyboardAvoidingView behavior="height" enabled style={{flex: 1}}>
      <StatusBar style="auto" translucent backgroundColor="#f7f7f7" />
      <View style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#f7f7f7',
            }}>
            <Image
              resizeMode="contain"
              style={{
                height: 220,
                width: 220,
              }}
              source={require('../../../assets/images/register.png')}
            />
          </View>
          <View
            style={{
              flex: 3,
              paddingHorizontal: 20,
              paddingBottom: 20,
              backgroundColor: '#fff',
            }}>
            <Text
              style={{
                alignSelf: 'center',
                padding: 30,
                fontWeight: 'bold',
              }}>
              Register
            </Text>
            <Text>Email</Text>
            <TextInput
              containerStyle={{marginTop: 15}}
              placeholder="Enter your email"
              value={email}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={text => setEmail(text)}
            />

            <Text style={{marginTop: 15}}>Password</Text>
            <TextInput
              containerStyle={{marginTop: 15}}
              placeholder="Enter your password"
              value={password}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
            />

            <Text style={{marginTop: 15}}>Password Confirmation</Text>
            <TextInput
              containerStyle={{marginTop: 15}}
              placeholder="Re-Enter your password"
              value={passwordConfirmation}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              secureTextEntry={true}
              onChangeText={text => setPasswordConfirmation(text)}
            />

            <Button
              mode="contained"
              onPress={() => {
                onRegister();
              }}
              style={{
                marginTop: 20,
              }}
              disabled={loading}>
              {loading ? 'Loading' : 'Create an account'}
            </Button>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
                justifyContent: 'center',
              }}>
              <Text size="md">Already have an account?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.replace('Login');
                }}>
                <Text
                  style={{
                    marginLeft: 5,
                    fontWeight: 'bold',
                  }}>
                  Login here
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
