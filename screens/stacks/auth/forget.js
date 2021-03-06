import React, { useState } from 'react';
import {
	ScrollView,
	TouchableOpacity,
	View,
	KeyboardAvoidingView,
	Image,
    StatusBar
} from 'react-native';
// import * as firebase from 'firebase';

import { Text, TextInput, Button } from 'react-native-paper';

const ForgetScreen = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);

	async function forget() {
		setLoading(true);
		// await firebase
		// 	.auth()
		// 	.sendPasswordResetEmail(email)
		// 	.then(function () {
		// 		setLoading(false);
		// 		navigation.navigate('Login');
		// 		alert('Your password reset has been sent to your email');
		// 	})
		// 	.catch(function (error) {
		// 		setLoading(false);
		// 		alert(error);
		// 	});
	}
	return (
		<KeyboardAvoidingView behavior="height" enabled style={{ flex: 1 }}>
			<StatusBar style="auto" translucent backgroundColor="#f7f7f7" />
			<View style={{flex:1}}>
				<ScrollView
					contentContainerStyle={{
						flexGrow: 1,
					}}
				>
					<View
						style={{
							flex: 1,
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: '#f7f7f7',
						}}
					>
						<Image
							resizeMode="contain"
							style={{
								height: 220,
								width: 220,
							}}
							source={require('../../../assets/images/forget.png')}
						/>
					</View>
					<View
						style={{
							flex: 3,
							paddingHorizontal: 20,
							paddingBottom: 20,
							backgroundColor: '#fff',
						}}
					>
						<Text
							style={{
								alignSelf: 'center',
								padding: 30,
                                fontWeight:'bold'
							}}
						>
							Forget Password
						</Text>
						<Text>Email</Text>
						<TextInput
							containerStyle={{ marginTop: 15 }}
							placeholder="Enter your email"
							value={email}
							autoCapitalize="none"
							autoCompleteType="off"
							autoCorrect={false}
							keyboardType="email-address"
							onChangeText={(text) => setEmail(text)}
						/>
						<Button
                        mode='contained'
							onPress={() => {
								forget();
							}}
							style={{
								marginTop: 20,
							}}
							disabled={loading}
						>{loading ? 'Loading' : 'Send email'}</Button>

						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								marginTop: 15,
								justifyContent: 'center',
							}}
						>
							<Text size="md">Already have an account?</Text>
							<TouchableOpacity
								onPress={() => {
									navigation.replace('Login');
								}}
							>
								<Text
									
									style={{
										marginLeft: 5,
                                        fontWeight:'bold'
									}}
								>
									Login here
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</View>
		</KeyboardAvoidingView>
	);
}

export default ForgetScreen