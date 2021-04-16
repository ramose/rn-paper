import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import {useForm} from 'react-hook-form';
import {
  TextInput,
  Appbar,
  Title,
  IconButton,
  Colors,
  Button,
  ActivityIndicator,
} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {launchCamera} from 'react-native-image-picker';
import CustomTextInput from '../../../components/textInput';
import {BottomSheet, ListItem} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {modelsUrl} from '../../../services/api';

const CarAddScreen = ({navigation}) => {
  const [camResponse, setCamResponse] = useState(null);
  const [showSheetModel, setshowSheetModel] = useState(false);
  const [showSheetTipe, setshowSheetTipe] = useState(false);
  const [showSheetTrans, setshowSheetTrans] = useState(false);
  const [model, setModel] = useState('model');
  const [type, setType] = useState('type');
  const [transmission, setTransmission] = useState('transmission');
  const [models, setModels] = useState([]);
  const [busy, setBusy] = useState(false);

  const containerStyle = {backgroundColor: 'white', padding: 20};

  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm({mode: 'onBlur'});

  function onSubmit(data) {
    storeData(data);
  }

  const getModels = () => {
    console.log('get models...');
    axios
      .get(modelsUrl)
      .then(function (response) {
        console.log(response.data.data);
        setModels(response.data.data);
        setBusy(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // const models = [{title: 'Model 1'}, {title: 'Model 2'}, {title: 'Model 3'}];
  const transmissions = [{title: 'Manual'}, {title: 'Automatic'}];

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
        setCamResponse(response);
        console.log(response.uri);
      },
    );
  }

  const storeData = async data => {
    try {
      const json = JSON.stringify(data);
      await AsyncStorage.setItem('vehicle', json);
      showAlert('Sukses menyimpan data');
    } catch (error) {
      showAlert('' + error);
    }
  };

  const getData = async () => {
    try {
      const json = await AsyncStorage.getItem('vehicle');
      let data = await JSON.parse(json);

      console.log('data: ', data);

      setValue('model', data['model']);
      setValue('plate', data['plate']);
      setValue('capacity', data['capacity']);
      setValue('year', data['year']);
      setValue('transmission', data['transmission']);
      setValue('status', data['status']);
      setValue('note', data['note']);
    } catch (error) {}
  };

  const showAlert = msg => {
    Alert.alert('', msg, [
      {
        title: 'OK',
        onPress: () => {},
      },
    ]);
  };

  useEffect(() => {
    setBusy(true);
    getData();
    getModels();
    // setBusy(false);
  }, []);

  return (
    <View style={styles.root}>
      <View>
        <Appbar>
          <Appbar.BackAction onPress={() => navigation.pop()} />
          <Text style={{color: 'black'}}>Data Mobil</Text>
          {/* <View style={{flex: 1}} />
          <Appbar.Action
            icon="check"
            onPress={() => console.log('Done edit')}
          /> */}
        </Appbar>
      </View>

      {busy === true && (
        <View style={{alignItems:'center'}}>
          <ActivityIndicator animating={true} style={{marginTop: 30}} />
          <Text>Loading models</Text>
        </View>
      )}

      {busy === false && (
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={{padding: 18}}>
            {/** Image */}
            {/* <TouchableOpacity onPress={() => showCamera()}>
            {camResponse === null && (
              <Image
                style={styles.image}
                source={require('../../../assets/images/user.png')}
              />
            )}

            {camResponse && (
              <Image style={styles.image} source={{uri: camResponse.uri}} />
            )}
          </TouchableOpacity> */}

            {/** Form */}

            {/** Pilih Model */}
            <BottomSheet
              isVisible={showSheetModel}
              containerStyle={{backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)'}}>
              <View
                style={{
                  flexDirection: 'row',
                  padding: 10,
                  backgroundColor: 'white',
                }}>
                <Title>Pilih Model</Title>
                <View style={{flex: 1}} />
                <IconButton
                  icon="close"
                  color={Colors.red500}
                  onPress={() => {
                    setshowSheetModel(false);
                  }}
                />
              </View>

              <ScrollView>
                {models.map((l, i) => (
                  <ListItem
                    key={i}
                    containerStyle={l.containerStyle}
                    onPress={l.onPress}>
                    <TouchableOpacity
                      onPress={() => {
                        // setModel(l.title);
                        setValue('model', l.name);
                        setshowSheetModel(false);
                      }}>
                      <ListItem.Content>
                        <ListItem.Title style={l.titleStyle}>
                          {l.name}
                        </ListItem.Title>
                      </ListItem.Content>
                    </TouchableOpacity>
                  </ListItem>
                ))}
              </ScrollView>
            </BottomSheet>

            {/** Pilih transmisi */}
            <BottomSheet
              isVisible={showSheetTrans}
              containerStyle={{backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)'}}>
              <View
                style={{
                  flexDirection: 'row',
                  padding: 10,
                  backgroundColor: 'white',
                }}>
                <Title>Pilih Transmisi</Title>
                <View style={{flex: 1}} />
                <IconButton
                  icon="close"
                  color={Colors.red500}
                  onPress={() => {
                    setshowSheetTrans(false);
                  }}
                />
              </View>

              <ScrollView>
                {transmissions.map((l, i) => (
                  <ListItem
                    key={i}
                    containerStyle={l.containerStyle}
                    onPress={l.onPress}>
                    <TouchableOpacity
                      onPress={() => {
                        setValue('transmission', l.title);
                        setshowSheetTrans(false);
                      }}>
                      <ListItem.Content>
                        <ListItem.Title style={l.titleStyle}>
                          {l.title}
                        </ListItem.Title>
                      </ListItem.Content>
                    </TouchableOpacity>
                  </ListItem>
                ))}
              </ScrollView>
            </BottomSheet>

            {/* <CustomBottomSheet
            show={showSheetTrans}
            title="Pilih Transmisi"
            items={transmissions}
            onSelect={updateType}
            onPressClose={() => {
              setshowSheetTrans(false);
            }}
          /> */}

            <View style={styles.container}>
              {errors.model && errorMessage()}

              <TouchableOpacity onPress={() => setshowSheetModel(true)}>
                {/* <View
                style={{
                  padding: 10,
                  borderColor: 'gray',
                  borderWidth: 1,
                  borderRadius: 5,
                  marginBottom: 10,
                }}>
                <Text>{model}</Text>
              </View> */}
                <CustomTextInput
                  disabled={true}
                  label="Model"
                  control={control}
                  name="model"
                  style={styles.input}
                  required={true}
                />
              </TouchableOpacity>

              {errors.plate && errorMessage()}
              <CustomTextInput
                label="Plate"
                control={control}
                name="plate"
                style={styles.input}
                required={true}
                defaultValue=""
              />

              {errors.capacity && errorMessage()}
              <CustomTextInput
                label="Capacity"
                control={control}
                name="capacity"
                style={styles.input}
                required={true}
              />

              {errors.year && errorMessage()}
              <CustomTextInput
                label="Year"
                control={control}
                name="year"
                style={styles.input}
                required={true}
                type="numeric"
              />

              <TouchableOpacity onPress={() => setshowSheetTrans(true)}>
                <CustomTextInput
                  disabled={true}
                  label="Transmission"
                  control={control}
                  name="transmission"
                  style={styles.input}
                  required={true}
                />
              </TouchableOpacity>

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
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

/**
 * id: 0,
      brand: 'Toyota',
      year: 1988,
      cap: 45,
      cyl: 4,
      type: 'ABC',
      name: 'Mobil Keren',
      trans: 'Auto',
      ktp: '0909898787676',
 */

const styles = StyleSheet.create({
  root: {
    flex: 1,
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
    width: Dimensions.get.width,
    height: 180,
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

export default CarAddScreen;
