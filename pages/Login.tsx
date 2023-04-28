import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground, SafeAreaView, KeyboardAvoidingView, Platform, Linking, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
// export const loginBackground = require('../assets/loginBackground.png');

SplashScreen.preventAutoHideAsync();

type LoginProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
};

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const [isLoaded] = useFonts({
    "poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
  });

  const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setIsEmailFocused(false);
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
  };

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync(); //hide the splashscreen
    }
  }, [isLoaded]);

  const handleLogin = () => {
    // Implement your login logic here
    // On successful login, navigate to the main app screens
    navigation.navigate('Main');
  };

  const handleForgetPass = () => {
    // Implement your login logic here
    // On successful login, navigate to the main app screens
    // navigation.navigate('');
  };

  const handleSignUp = () => {
    // Implement your login logic here
    // On successful login, navigate to the main app screens
    navigation.navigate('Register');
  };

  if (!isLoaded) {
    return null;
  }
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../assets/loginBackground.png')}
    >
      <Text style={{ position: "absolute", top: 74, left: 27, fontSize: 36, color: '#FFFFFF', fontFamily: 'Poppins-Medium', fontWeight: '600' }}>
        monark
      </Text>
      {/* <Image source={require('../assets/logo.png')} style={{ position: "absolute", top: 70, left: 20, }} /> */}

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.content}
      >
        <View style={styles.loginDiv} onLayout={handleOnLayout}>
          <Text style={styles.title}>Welcome</Text>
          <View style={styles.inputSection}>
            {
              isEmailFocused ? (
                <MaterialCommunityIcons style={styles.inputIcon} name="email-outline" size={22} color="#3A83FF" />
              ) : <MaterialCommunityIcons style={styles.inputIcon} name="email-outline" size={22} color="#DDE2EB" />
            }
            <TextInput
              onFocus={handleEmailFocus}
              onBlur={handleEmailBlur}
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={setEmail}
              value={email}
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputSection}>
            {/* <MaterialCommunityIcons style={styles.inputIcon} name="lock-outline" size={25} color="#DDE2EB" /> */}
            {
              isPasswordFocused ? (
                <MaterialCommunityIcons style={styles.inputIcon} name="lock-outline" size={22} color="#3A83FF" />
              ) : <MaterialCommunityIcons style={styles.inputIcon} name="lock-outline" size={22} color="#DDE2EB" />
            }
            
            {/* {
              isPasswordFocused ? (
                <Image
                  source={require('../assets/icons/lock-icon-focus.png')}
                  style={{ marginLeft: 20,}}
                />
              ) : <Image
                source={require('../assets/icons/lock-icon.png')}
                style={{ marginLeft: 20 }}
              />
            } */}
            <TextInput
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              onChangeText={setPassword}
              value={password}
              autoCapitalize="none"
            />
          </View>

          <Text style={{ color: '#436FE0', textAlign: 'right', marginBottom: 5, marginTop: 7, fontSize: 16, fontFamily: 'poppins-Regular' }}
            onPress={handleForgetPass}>
            Forgot password?
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>

          <Text style={{ marginBottom: 30, textAlign: 'center', fontSize: 16, fontFamily: 'poppins-Regular' }}>
            Don't have an account? {' '}
            <TouchableOpacity 
            onPress={handleSignUp}
            activeOpacity={0.7}
            >
            <Text style={{ fontSize: 16, color: '#436FE0', fontFamily: 'poppins-Regular' }}>
              Create account
            </Text>
            </TouchableOpacity>
          </Text>

        </View>

      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: "red"
  },
  title: {
    fontSize: 28,
    marginBottom: 25,
    color: '#0A1C4B',
    fontWeight: '500',
    fontFamily: 'Poppins-Medium'
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#DDE2EB',
    borderWidth: 0,
    // borderBottomWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 17,
    fontFamily: 'poppins-Regular'
  },
  button: {
    backgroundColor: '#436FE0',
    paddingHorizontal: 50,
    paddingVertical: 18,
    borderRadius: 50,
    marginVertical: 15
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',

  },
  loginDiv: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderTopRightRadius: 50,
    paddingTop: 30,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  inputSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#DDE2EB',
    marginBottom: 20,
  },
  inputIcon: {
    marginLeft: 20
  },
});

export default Login;