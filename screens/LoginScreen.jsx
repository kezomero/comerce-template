import React, { useEffect, useState } from 'react';
import { SafeAreaView,} from 'react-native';
import LottieView from 'lottie-react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { View, TextInput, Button, StyleSheet,Text,Image,KeyboardAvoidingView,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { BlurView } from '@react-native-community/blur';
import FastImage from 'react-native-fast-image';

const LoginScreen = () => {
  const [animationLoaded, setAnimationLoaded] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role,setRole] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Perform login logic here
    navigation.navigate('BottomTabs', { username,role });
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  useEffect(() => {
    // Simulate a delay for the splash screen (optional)
    setTimeout(() => {
      setAnimationLoaded(true);
      // Navigate to the main screen or any other screen after the splash screen
      // Replace 'MainScreen' with your desired screen component
      // navigation.navigate('MainScreen');
    }, 6000); // Delay in milliseconds (adjust as needed)
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {animationLoaded ? (
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
        placeholder="Role"
        value={role}
        onChangeText={setRole}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity
      onPress={handleLogin}
      style={styles.btn}
      >
        <Text>Login</Text>
      </TouchableOpacity>
      
      <Button title="Register" onPress={handleRegister} />
      </View>
      </ImageBackground>
      ) : (
        <LottieView
          source={require('../assets/anim.json')}
          autoPlay
          loop={false}
          onAnimationFinish={() => {
            console.log('Animation finished');
          }}
        />
      )}
    </SafeAreaView>
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
    marginTop:'70%',
  },
  backgroundImage: {
    flex: 1,
    marginTop:10,
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

export default LoginScreen;
