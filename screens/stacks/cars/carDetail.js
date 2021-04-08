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

const CarDetailScreen = ({route, navigation}) => {

    const {item} = route.params
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
    <View>
      <Appbar>
        <Appbar.BackAction onPress={() => navigation.pop()} />
        <Text style={{color: 'white'}}>Detail Mobil</Text>
        <View style={{flex: 1}} />
        <Appbar.Action icon="check" onPress={() => console.log('Done edit')} />
      </Appbar>
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
                  label="Nama"
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={item.name}
                />
              )}
              name="username"
              rules={{required: true}}
              defaultValue=""
            />
            {/* {errors.username && <Text>This is required.</Text>} */}
            {/* {errors.username} */}

            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  label="Driver ID"
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={user.id}
                />
              )}
              name="id"
              rules={{required: true}}
              defaultValue=""
            />

            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  label="Email"
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={user.email}
                />
              )}
              name="email"
              rules={{required: true}}
              defaultValue=""
            />

            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  label="Kata Sandi / PIN"
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={user.pin}
                />
              )}
              name="password"
              rules={{required: true}}
              defaultValue=""
            />

            {/* onPress={handleSubmit(onSubmit)} */}
            <Button onPress={handleSubmit(onSubmit)} mode="contained">
              Submit
            </Button>
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

export default CarDetailScreen;
