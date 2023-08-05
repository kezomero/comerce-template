import React,{useState,useEffect} from 'react';
import { View, Text,SafeAreaView,Image, FlatList,Button,StyleSheet,TouchableOpacity,Dimensions,TextInput,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Svg, { Path } from 'react-native-svg';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import ProductCard from '../components/Product';

const renderProductCard = ({ item }) => <ProductCard product={item} />


const LandingScreen = ({ navigation, route }) => {
  const { username,role } = route.params;
  const [animationLoaded, setAnimationLoaded] = useState(false);

  const handleGoToBottomTabs = () => {
    navigation.navigate('Wait', { username,role });
  };

  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

  const windowHeight = Dimensions.get('window').height;

  useEffect(() => {
    // Simulate a delay for the splash screen (optional)
    setTimeout(() => {
      setAnimationLoaded(true);
      // Navigate to the main screen or any other screen after the splash screen
      // Replace 'MainScreen' with your desired screen component
      // navinpm install @react-native-community/blur
navigation.navigate('MainScreen');
    }, 2000); // Delay in milliseconds (adjust as needed)
  }, []);


  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.top}>
    <View style={styles.header}>
    <FeatherIcon name="menu" size={25} color="orange" onPress={() => setBottomSheetVisible(true)} />
      <Text style={styles.logo} >Opasso<FeatherIcon name="shopping-cart" size={30} color="#000000" /></Text>
    <View>
      <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',paddingHorizontal:5,}}>
      <FeatherIcon name="shopping-bag" size={25} color="orange" />
      <FeatherIcon name="log-in" size={25} color="orange" />
      </View>
    </View>

    </View>

    <View style={styles.search}>
      <View style={styles.searchcont}>
      <TextInput
        style={styles.input}
        placeholder="Search Item"
        
        placeholderTextColor="#000"
      />
      </View>
    </View>
      
      <Text style={styles.welcome}>Welcome, {username}
      <FeatherIcon name="meh" size={30} color="orange" /></Text>
      <Text style={styles.welcome}>Work: {role}</Text>
      </View>
      
      <ScrollView vertical={true}>
      <View style={styles.cardContainer}>
      <View style={styles.card}>
      <LottieView
          source={require('../assets/wait.json')}
          autoPlay
          loop
          
        />

      </View>
      </View>

      <View style={styles.cheap}>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
        <Text style={styles.cheaptext}>Super Deals 
        <FeatherIcon name='arrow-right' size={20} color='orange'/>
        </Text>
        </TouchableOpacity>
        <ScrollView horizontal={true} style={styles.super}>
        
        <Image
    source={require('../assets/2-after.jpg')}
    style={styles.image}
    resizeMode="cover"
  />
  <Image
    source={require('../assets/Original-Image.jpg')}
    style={styles.image}
    resizeMode="cover"
  />
  <Image
    source={require('../assets/1-after.jpg')}
    style={styles.image}
    resizeMode="cover"
  />
  <Image
    source={require('../assets/car.jpg')}
    style={styles.image}
    resizeMode="cover"
  />
        
        

        </ScrollView>
      </View>

      <View style={styles.newp}>
        <Text style={styles.cheaptext}>New Products 
        <FeatherIcon name='arrow-right' size={20} color='orange'/>
        </Text>
        <View style={styles.row}>
        <View style={styles.img}>
          <Text>Image1</Text>
        </View>
        <View style={styles.img}>
          <Text>Image1</Text>
        </View>
        </View>

        <View style={styles.row}>
        <View style={styles.img}>
          <Text>Image1</Text>
        </View>
        <View style={styles.img}>
          <Text>Image1</Text>
        </View>
        

        </View>
      </View>
      
      
      <Modal isVisible={isBottomSheetVisible} 
      onBackdropPress={() => setBottomSheetVisible(false)} 
      style={styles.modalContainer}>
        <View style={[styles.bottomSheetContainer, { height: windowHeight * 0.7 }]}>
          <Text>Menu</Text>
          {
            <LottieView
          source={require('../assets/baskets.json')}
          autoPlay
          loop={false}
          onAnimationFinish={() => {
            console.log('Animation finished');
          }}
        />
          }
        </View>
      </Modal>
      </ScrollView>
      
    </SafeAreaView>
  );
};

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',

  },
  welcome:{
    fontSize: 20,
    paddingHorizontal:15,
    
    fontWeight:'bold',
    
  },
  top:{
    backgroundColor:'white',
    height:150,
    justifyContent:'center',
    paddingHorizontal:15,
  },
  logo:{
    fontSize:40,
    fontWeight:'bold',
    
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  modalContainer: {
    justifyContent: 'flex-end',
    margin: 0,
    height:'50%',
  },
  bottomSheetContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowRadius: 5,
    elevation: 5,
  },
  searchcont:{
    paddingHorizontal:15,
    backgroundColor:'lightgrey',
    paddingVertical:10,
    borderRadius:15,
    marginVertical:10,
  },
  cardContainer:{
    justifyContent: 'center',
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'center',
    paddingHorizontal:20,
    
  },
  card:{
    height:80,
    width:'80%',
    margin:10,
    borderRadius:10,
  },
  cheap:{
    paddingHorizontal:15,
    
    justifyContent:'space-between',
  },
  cheaptext:{
    fontSize:20,
    fontWeight:'bold',
  },
  super:{
    height:100,
    alignItem:'center',
    textAlign:'center',
    paddingVertical:15,
    width:'100%',
    
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  row:{
    justifyContent:'space-between',
    flexDirection:'row',
    flexWrap:'wrap',
    marginBottom:23,
  },
  newp:{
    flexDirection:'column',
    justifyContent:'space-evenly',
    paddingHorizontal:15,
    paddingVertical:23,
  },
  img:{
   
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    margin: 8,
    padding: 16,
    alignItems: 'center',
      
      
    
  }

})

export default LandingScreen;
