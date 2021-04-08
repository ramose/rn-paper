import React, {useEffect, useRef} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  //   Button,
  TouchableOpacity,
  Animated,
  FlatList,
  ScrollView,
} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import {useForm, Controller} from 'react-hook-form';
import {TextInput, Button, Divider, List, Appbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const CarAddScreen = ({navigation}) => {
  
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = data => console.log(data);

  const moveAnim = useRef(new Animated.Value(400)).current;

  const startAnim = () => {
    Animated.timing(moveAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const user = {
    name: 'John Doe',
    id: '45',
    email: 'jhondoe@email.com',
    pin: '767676',
  };

  useEffect(() => {
    startAnim();
  });

  //   onChange = ()

  return (
    <View style={styles.root}>
      <View>
        <Appbar>
          <Appbar.BackAction onPress={() => navigation.pop()} />
          <Text style={{color: 'white'}}>Tambah Mobil</Text>
          <View style={{flex: 1}} />
          <Appbar.Action
            icon="check"
            onPress={() => console.log('Done edit')}
          />
        </Appbar>
      </View>

      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={{padding: 23}}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/user.png')}
          />

          <View style={styles.container}>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  label="Merek"
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="brand"
              rules={{required: true}}
              defaultValue=""
            />
            {/* {errors.username && <Text>This is required.</Text>} */}
            {/* {errors.username} */}

            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  label="Tahun"
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="year"
              rules={{required: true}}
              defaultValue=""
            />

            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  label="Capacity"
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="cap"
              rules={{required: true}}
              defaultValue=""
            />

            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  label="Cylinder"
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="cyl"
              rules={{required: true}}
              defaultValue=""
            />

            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  label="Type"
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="type"
              rules={{required: true}}
              defaultValue=""
            />

            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  label="Name"
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="name"
              rules={{required: true}}
              defaultValue=""
            />

            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  label="Transmission"
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="trans"
              rules={{required: true}}
              defaultValue=""
            />

            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  label="KTP"
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="ktp"
              rules={{required: true}}
              defaultValue=""
            />

            {/* onPress={handleSubmit(onSubmit)} */}
            <Button onPress={handleSubmit(onSubmit)} mode="contained">
              Save
            </Button>
          </View>
        </View>
      </ScrollView>
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
