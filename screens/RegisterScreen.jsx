import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet,Text,Image,KeyboardAvoidingView,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BlurView } from '@react-native-community/blur';
import FastImage from 'react-native-fast-image';

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [role,setRole] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Perform login logic here
    navigation.navigate('Login', { username,role });
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
    <ImageBackground
        source={require('../assets/splash.png')} // Replace with your image URL or local image path
        style={styles.backgroundImage}
        blurRadius={10} // Adjust the blur radius as per your preference
      >
      <View style={styles.form}>
        
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Role"
        value={role}
        onChangeText={setRole}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity
      onPress={handleRegister}
      style={styles.btn}
      >
        <Text>Register</Text>
      </TouchableOpacity>
      
      <Button title="Back to login" onPress={handleLogin} />
      </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  input: {
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderRadius: 12,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingVertical:12,
    marginTop: 10,
    backgroundColor:'#ccc',
  },
  form:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:'50%',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  btn:{
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderRadius: 18,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingVertical:12,
    marginTop: 10,
    backgroundColor: '#00bfff'

  }
});

export default RegisterScreen;
