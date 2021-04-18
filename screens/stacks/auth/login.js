import React, {useState} from 'react';
// import { StatusBar } from 'expo-status-bar';
import {
  ScrollView,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Image,
  Alert,
} from 'react-native';
// import * as firebase from 'firebase';

import {Text, TextInput, Button} from 'react-native-paper';
import {loginUrl} from '../../../services/api';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('jhondoe1@email.com');
  const [password, setPassword] = useState('123456');
  const [loading, setLoading] = useState(false);

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('@storage_Key', value);
    } catch (e) {
      // saving error
    }
  };

  const onLogin = async () => {
    setLoading(true)
    try {
      let response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      setLoading(false)

      let json = await response.json();

      if (json.status === 'error') {
        Alert.alert(' ', json.message, [
          {
            text: 'OK',
            onPress: () => {},
          },
        ]);
      } else {
        storeData(email);
        navigation.navigate('Main');
      }

      // console.log('login:',json);
    } catch (error) {
      console.error(error);
    }
  };

  async function login() {
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

    //* post

    /*
    axios
      .post(loginUrl, {
        email: email,
        password: password
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
          storeData(email);
          navigation.navigate('Main');
        }
      })
      .catch(error => {
        console.log(error);
      });*/

    await fetch(loginUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mobile: email,
        password: password,
      }),
    })
      .then(response => {
        console.log('login: ', response.json());
        response.json();
      })
      .then(responseJson => {
        console.log('responseJson:', responseJson);
        if (responseJson.status === 'error') {
          Alert.alert(' ', responseJson.message, [
            {
              text: 'OK',
              onPress: () => {},
            },
          ]);
        } else {
          storeData(email);
          navigation.navigate('Main');
        }
      })
      .catch(error => {
        //display error message
        console.warn(error);
      })
      .finally(() => setLoading(false));
  }

  return (
    <KeyboardAvoidingView behavior="height" enabled style={{flex: 1}}>
      {/* <StatusBar style="auto" translucent backgroundColor="#f7f7f7" /> */}
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
              source={require('../../../assets/images/login.png')}
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
                fontWeight: 'bold',
                alignSelf: 'center',
                padding: 30,
              }}
              size="h3">
              Login
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
            <Button
              mode="contained"
              onPress={() => {
                // login();
                onLogin();
              }}
              style={{
                marginTop: 20,
              }}
              disabled={loading}>
              {loading ? 'Loading' : 'Continue'}
            </Button>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
                justifyContent: 'center',
              }}>
              <Text size="md">Don't have an account?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.replace('Register');
                }}>
                <Text
                  style={{
                    marginLeft: 5,
                    fontWeight: 'bold',
                  }}>
                  Register here
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.replace('ForgetPassword');
                }}>
                <Text style={{fontWeight: 'bold'}}>Forget password</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
