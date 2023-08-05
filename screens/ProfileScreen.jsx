import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = ({ navigation,route }) => {
    const { username,role } = route.params;
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/icon.png')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{username}</Text>
        <Text style={styles.username}>{role}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>About</Text>
          <Text style={styles.sectionText}>
            I am a bitch
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Location</Text>
          <Text style={styles.sectionText}>New York, USA</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Interests</Text>
          <Text style={styles.sectionText}>Travel, Photography, Music</Text>
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
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  username: {
    fontSize: 16,
    color: '#777',
    marginTop: 5,
  },
  content: {
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
  },
});

export default ProfileScreen;
