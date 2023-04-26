import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground, SafeAreaView, KeyboardAvoidingView, Platform, Linking, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export const loginBackground = require('../assets/loginBackground.png');

type LoginProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
};

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    // navigation.navigate('');
  };

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={loginBackground}
    >
      <Image source={require('../assets/logo.png')} style={{ position: "absolute", top: 70, left: 20, }} />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.content}
      >
        <View style={styles.loginDiv} >
          <Text style={styles.title}>Welcome</Text>
          <View style={styles.inputSection}>
          <MaterialCommunityIcons style={styles.inputIcon} name="email-outline" size={25} color="#DDE2EB" />
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={setEmail}
              value={email}
              autoCapitalize="none"
            />
          </View>
          
          <View style={styles.inputSection}>
          <MaterialCommunityIcons style={styles.inputIcon} name="lock-outline" size={25} color="#DDE2EB" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={setPassword}
            value={password}
            autoCapitalize="none"
          />
          </View>

          <Text style={{ color: '#436FE0', textAlign: 'right', marginBottom: 5, marginTop: 7, fontSize: 16 }}
            onPress={handleForgetPass}>
            Forgot password?
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>

          <Text style={{ marginBottom: 15, margin: 10, textAlign: 'center', fontSize: 16 }}>
            Don't have an account? {' '}
            <Text style={{ color: '#436FE0' }}
              onPress={handleSignUp}>
              Create account
            </Text>
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
    fontSize: 32,
    marginBottom: 25,
    color: '#0A1C4B',
    fontWeight: '500'
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#DDE2EB',
    borderWidth: 0,
    // borderBottomWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#436FE0',
    paddingHorizontal: 50,
    paddingVertical: 22,
    borderRadius: 50,
    marginVertical: 20
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
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
    marginBottom: 20
  },
  inputIcon: {
    paddingLeft: 20
  },
});

export default Login;