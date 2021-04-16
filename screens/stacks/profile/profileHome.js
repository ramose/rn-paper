import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Pressable,
  Alert
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {TextInput, Button, Divider, List} from 'react-native-paper';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import CustomTextInput from '../../../components/textInput';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileHomeScreen = ({navigation}) => {
  const [camResponse, setCamResponse] = useState(null);
  const [name, setName] = useState('');
  // const [code, setCode] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [ktp, setKtp] = useState('');
  const [note, setNote] = useState('');
  const [profile, setProfile] = useState({});

  // Camera options

  function showCamera() {
    launchCamera(
      {
        mediaType: 'photo',
        maxWidth: 450,
        quality: 0.25,
        cameraType: 'back',
        saveToPhotos: false,
      },
      response => {
        if (response.uri === undefined) {
        } else {
          setCamResponse(response);
        }

        console.log(response.uri);
      },
    );
  }

  const showAlert = (msg) => {
    Alert.alert(
      '',
      msg,
      [
        {
          title:'OK',
          onPress:() => {}
        }
      ]
    )
  }

  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm({mode: 'onBlur'});

  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('profile', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('profile');
      // return jsonValue != null ? JSON.parse(jsonValue) : null;
      let data = await JSON.parse(jsonValue);

      // console.log('profile: ', data);
      // setProfile(JSON.parse(jsonValue))

      setValue('name', data['name']);
      setValue('code', data['code']);
      setValue('mobile', data['mobile']);
      setValue('address', data['address']);
      setValue('city', data['city']);
      setValue('state', data['state']);
      setValue('country', data['country']);
      setValue('ktp_no', data['ktp_no']);
      setValue('note', data['note']);

      // setUsername(profileData['name'])
    } catch (e) {
      // error reading value
      console.log('error: ', e);
    }
  };

  function onSubmit(data) {
    storeData(data);
    showAlert('Sukses menyimpan data')
  }

  useEffect(() => {
    getData();
  }, []);

  const errorMessage = msg => {
    console.log(msg);
    if (msg === undefined) {
      return <Text style={{color: 'red'}}>This is required.</Text>;
    } else {
      return <Text style={{color: 'red'}}>{msg}</Text>;
    }
  };

  return (
    <View style={{paddingTop: 10, paddingLeft: 10, paddingRight: 10, flex: 1}}>
      <Text style={styles.title}>Profil</Text>
      {/* <Button onPress={() => getData()}>Get Data</Button> */}
      <ScrollView keyboardShouldPersistTaps="handled">
        <View>
          {/** Image */}

          <Pressable onPress={() => showCamera()} style={styles.image}>
            {camResponse === null && (
              <Image
                style={styles.image}
                source={require('../../../assets/images/user.png')}
              />
            )}

            {camResponse && (
              <Image style={styles.image} source={{uri: camResponse.uri}} />
            )}
          </Pressable>

          {/** Form */}
          {/* {errors.email && errorMessage('emailnya salah')}
          <CustomTextInput
            label="Email"
            control={control}
            name="email"
            style={styles.input}
            required={true}
            defaultValue=""
            type="email-address"
          />

          {errors.password && errorMessage()}

          {!samePassword && errorMessage('password tidak cocok.')}

          <CustomTextInput
            label="Password"
            control={control}
            name="password"
            style={styles.input}
            required={true}
          />

          {errors.passwordConfirmation && (
            <Text style={{color: 'red'}}>This is required.</Text>
          )}

          {!samePassword && errorMessage('password tidak cocok.')}
          <CustomTextInput
            label="Password Confirmation"
            control={control}
            name="passwordConfirmation"
            style={styles.input}
            required={true}
          />

          <View
            style={{backgroundColor: '#cecece', height: 1, marginVertical: 10}}
          /> */}

          {errors.name && errorMessage()}
          <CustomTextInput
            label="Name"
            control={control}
            name="name"
            style={styles.input}
            required={true}
          />

          {errors.code && errorMessage()}
          <CustomTextInput
            label="Code"
            control={control}
            name="code"
            style={styles.input}
            required={true}
          />

          {errors.mobile && errorMessage()}
          <CustomTextInput
            label="Mobile"
            control={control}
            name="mobile"
            style={styles.input}
            required={true}
            defaultValue={mobile}
            type="numeric"
          />

          <View
            style={{backgroundColor: '#cecece', height: 1, marginVertical: 10}}
          />

          {errors.address && errorMessage()}
          <CustomTextInput
            label="Address"
            control={control}
            name="address"
            style={styles.input}
            required={true}
          />

          {errors.city && errorMessage()}
          <CustomTextInput
            label="City"
            control={control}
            name="city"
            style={styles.input}
            required={true}
          />

          {errors.state && errorMessage()}
          <CustomTextInput
            label="State"
            control={control}
            name="state"
            style={styles.input}
            required={true}
          />

          {errors.country && errorMessage()}
          <CustomTextInput
            label="Country"
            control={control}
            name="country"
            style={styles.input}
            required={true}
          />

          {errors.ktp_no && errorMessage()}
          <CustomTextInput
            label="KTP"
            control={control}
            name="ktp_no"
            style={styles.input}
            required={true}
          />

{errors.note && errorMessage()}
          <CustomTextInput
            label="Note"
            control={control}
            name="note"
            style={styles.input}
            required={false}
            multiline={true}
            numberOfLines={4}
          />

          {/* onPress={handleSubmit(onSubmit)} */}
          <Button onPress={handleSubmit(onSubmit)} mode="contained">
            Save
          </Button>

          {/* Divider */}
          <Divider style={{marginTop: 30}} />

          {/* Menu Daftar Mobil */}
          <View style={{marginTop: 20}}>
            <List.Item
              title="Data Mobil"
              left={props => <List.Icon {...props} icon="car" />}
              onPress={() => {
                // navigation.navigate('CarList');
                navigation.navigate('CarAdd');
              }}
            />
            <List.Item
              title="Logout"
              left={props => <List.Icon {...props} icon="logout" />}
              onPress={() => {
                navigation.replace('Login');
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignContent:'flex-start'
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
  button: {
    backgroundColor: '#5C20B8',
    padding: 5,
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.7,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    padding: 0,
    // borderColor: 'gray',
    // borderWidth: 1,
    borderRadius: 5,
    // width: Dimensions.get('window').width * 0.7,
    marginBottom: 10,
    // fontSize: 16,
    // backgroundColor: '#f3f3f3',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ProfileHomeScreen;
