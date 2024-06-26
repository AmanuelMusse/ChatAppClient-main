import React from 'react';
import { View, 
       Text, 
       Image, 
       StyleSheet, 
       FlatList, 
       TouchableOpacity,
       Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS } from '../theme/theme';

const Card = ({id, name, image, description }) => {

  const navigator = useNavigation();
  const handleCard = async ()=>{
    await AsyncStorage.setItem("groupId",id)
    console.log(id);
    await AsyncStorage.setItem("freindId", "")
    navigator.navigate('GroupChat')
  }
  return (
    <TouchableOpacity onPress={handleCard}>
     <View style={styles.cardContainer}>
      <View style={styles.avatarContainer}>
        <Image source={{uri:'https://img.freepik.com/free-photo/portrait-young-candid-man-student-boy-with-clean-face-relaxed-facial-expression-casual-smile-checked-shirt-t-shirt-summer-outfit-look-white-background_176420-45901.jpg?w=900&t=st=1704900938~exp=1704901538~hmac=e87ad01633272c2ba5311a1c8b15542c7dd7b19879f14d30cd8b137edd21b60c'}} style={styles.avatar} />
        {true && <View style={styles.statusIndicator} />}
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.lastMessage}>{description}</Text>
        <View style={styles.lastSeenContainer}>
        <Text style={styles.lastSeenText}>{"13:30"}</Text>
      </View>
      </View>
    </View>  
    </TouchableOpacity>
    
);};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: '#ffff'
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
  },
  avatar: {
    width: Dimensions.get('screen').height *0.1,
    height: Dimensions.get('screen').height *0.1,
    borderRadius: Dimensions.get('screen').height *0.05,
  },
  statusIndicator: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.primaryGreen,
    borderWidth:3,
    borderColor: 'white'
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: COLORS.fontHeader
  },
  lastMessage: {
    fontSize: 14,
    color: '#757575',
  },
  lastSeenContainer: {
    width: 80,
    alignItems: 'flex-end',
  },
  lastSeenText: {
    fontSize: 12,
    color: '#9E9E9E',
  },
});

export default Card;