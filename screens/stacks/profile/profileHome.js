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

const ProfileHomeScreen = ({navigation}) => {
  const [camResponse, setCamResponse] = useState(null);
  const [username, setUsername] = useState('Jhon Doe');
  const [userEmail, setUserEmail] = useState('jhondoe@email.com');
  const [userId, setUserId] = useState('12');
  const [userPin, setUserPin] = useState('123456');

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
  }

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View style={{padding: 18, flex: 1}}>
        <Text style={styles.title}>Profil</Text>

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

        {errors.username && (
          <Text style={{color: 'red'}}>This is required.</Text>
        )}
        <View style={styles.container}>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                label="Nama"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => {
                  onChange(value);
                }}
                value={value}
                mode="outlined"
              />
            )}
            name="username"
            rules={{required: true}}
            defaultValue={username}
          />

          {errors.id && <Text style={{color: 'red'}}>This is required.</Text>}
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                label="Driver ID"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => {
                  onChange(value);
                }}
                value={value}
                mode="outlined"
              />
            )}
            name="id"
            rules={{required: true}}
            defaultValue={userId}
          />

          {errors.email && (
            <Text style={{color: 'red'}}>This is required.</Text>
          )}
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                label="Email"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => {
                  onChange(value);
                  setUserEmail(value);
                }}
                value={value}
                mode="outlined"
              />
            )}
            name="email"
            rules={{required: true}}
            defaultValue={userEmail}
          />

          {errors.pin && <Text style={{color: 'red'}}>This is required.</Text>}
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                label="Kata Sandi / PIN"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => {
                  onChange(value);
                  setUserPin(value);
                }}
                value={userPin}
                mode="outlined"
              />
            )}
            name="pin"
            rules={{required: true}}
            defaultValue={userPin}
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
              title="Daftar Mobil"
              left={props => <List.Icon {...props} icon="car" />}
              onPress={() => {
                console.log('daftar mobil...mnA');
                navigation.navigate('CarList');
              }}
            />
          </View>
          {/* <View style={{alignItems:'flex-start'}}>
            <Button style={{paddingLeft:-10}}>Daftar Mobil</Button>
          </View> */}
        </View>
      </View>
    </ScrollView>
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
    marginBottom: 40,
  },
});

export default ProfileHomeScreen;
