import React from 'react';
import { View, Text, StyleSheet,Button,TouchableOpacity } from 'react-native';

const SettingScreen = ({navigation,route}) => {
  const {username} = route.params;

  const handleBack = () =>{
    navigation.navigate('Login')
  }

  const handleProfile = () =>{
    navigation.navigate('Profile')
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{username} Settings</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>General</Text>
          <View style={styles.option}>
            <Text style={styles.optionText}>Account Details</Text>
          </View>
          <View style={styles.option}>
            <Text style={styles.optionText}>Privacy</Text>
          </View>
          <TouchableOpacity onPress={handleProfile}>
          <View style={styles.option} >
            <Text style={styles.optionText}>Account</Text>
          </View>
          </TouchableOpacity>
          
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Display & Brightness</Text>
          <View style={styles.option}>
            <Text style={styles.optionText}>Brightness</Text>
          </View>
          <View style={styles.option}>
            <Text style={styles.optionText}>Wallpaper</Text>
          </View>
          <View style={styles.option}>
            <Text style={styles.optionText}>Display Zoom</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Sounds & Haptics</Text>
          <View style={styles.option}>
            <Text style={styles.optionText}>Ringtone</Text>
          </View>
          <View style={styles.option}>
            <Text style={styles.optionText}>Volume</Text>
          </View>
          <Button title="Logout" onPress={handleBack}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: 'orange',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  option: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
  },
  optionText: {
    fontSize: 16,
  },
});

export default SettingScreen;
