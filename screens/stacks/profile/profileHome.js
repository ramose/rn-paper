import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  //   Button,
  TouchableOpacity,
  Animated,
  ScrollView,
  Pressable,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {TextInput, Button, Divider, List} from 'react-native-paper';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import CustomTextInput from '../../../components/textInput';

const ProfileHomeScreen = ({navigation}) => {
  const [camResponse, setCamResponse] = useState(null);
  const [username, setUsername] = useState('Jhon Doe');
  const [userEmail, setUserEmail] = useState('jhondoe@email.com');
  const [userId, setUserId] = useState('12');
  const [userPin, setUserPin] = useState('123456');
  const [samePassword, setSamePassword] = useState(true);

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

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  function onSubmit(data) {
    console.log('submit:', data);
    setSamePassword(true);
    if (data.password != data.passwordConfirmation) {
      setSamePassword(false);
    }
  }

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
          {errors.email && errorMessage('emailnya salah')}

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
          />

          {errors.name && errorMessage()}
          <CustomTextInput
            label="Name"
            control={control}
            name="name"
            style={styles.input}
            required={true}
            defaultValue=""
          />

          {errors.code && errorMessage()}
          <CustomTextInput
            label="Code"
            control={control}
            name="code"
            style={styles.input}
            required={true}
            defaultValue=""
          />

          {errors.mobile && errorMessage()}
          <CustomTextInput
            label="Mobile"
            control={control}
            name="mobile"
            style={styles.input}
            required={true}
            defaultValue=""
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
            defaultValue=""
          />

          {errors.city && errorMessage()}
          <CustomTextInput
            label="City"
            control={control}
            name="city"
            style={styles.input}
            required={true}
            defaultValue=""
          />

          {errors.state && errorMessage()}
          <CustomTextInput
            label="State"
            control={control}
            name="state"
            style={styles.input}
            required={true}
            defaultValue=""
          />

          {errors.country && errorMessage()}
          <CustomTextInput
            label="Country"
            control={control}
            name="country"
            style={styles.input}
            required={true}
            defaultValue=""
          />

          {errors.ktp && errorMessage()}
          <CustomTextInput
            label="KTP"
            control={control}
            name="ktp"
            style={styles.input}
            required={true}
            defaultValue=""
          />

          {/* onPress={handleSubmit(onSubmit)} */}
          <Button onPress={handleSubmit(onSubmit)} mode="contained">
            Submit
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
                navigation.navigate('CarAdd')
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
