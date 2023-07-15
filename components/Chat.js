import { useEffect, useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';
import { GiftedChat, Bubble, InputToolbar,  } from 'react-native-gifted-chat';
import { collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import CustomActions from './CustomActions';
import MapView from 'react-native-maps';


const Chat = ({ route, navigation, db, isConnected, storage }) => {
  const [messages, setMessages] = useState([]);
  const { name, color, userID } = route.params;



  //Sets chat bubbles colors
  const renderBubble = (props) => {
    return <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: "#000"
        },
        left: {
          backgroundColor: "#FFF"
        }
      }}
    />
  }
  
  //Render Custom Actions button
  const renderCustomActions = (props) => {
    return <CustomActions storage={storage} userID={userID} {...props} />;
  };

  //Render custom view
  const renderCustomView = (props) => {
    const { currentMessage } = props;
    if (currentMessage.location) {
      // console.log(currentMessage.location)
      return (
          <MapView
            style={{
              width: 150,
              height: 100,
              borderRadius: 13,
              margin: 3
            }}
            region={{
              latitude: currentMessage.location.latitude,
              longitude: currentMessage.location.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
      );
    }
    return null;
  }

  //Disable inputtoolbar when offline
  const renderInputToolbar = (props) => {
    if (isConnected) return <InputToolbar {...props} />;
    else return null;   
  }

  //Load messages from cache
  const loadCachedMessages = async () => {
    const cachedMessages = await AsyncStorage.getItem('messages') || [];
    setMessages(JSON.parse(cachedMessages));
  }

  let unsubMessages;

  useEffect(() => {
    if (isConnected === true) {

      // unregister current onSnapshot() listener to avoid registering multiple listeners when
      // useEffect code is re-executed.
      if (unsubMessages) unsubMessages();
      unsubMessages = null;

      //Sets Chat screen title to name
      navigation.setOptions({ title: name });
      
      //Get messages from firestore
      const q = query(collection(db, 'messages'), orderBy('createdAt', 'desc'));
      unsubMessages = onSnapshot(q, (docs) => {
        let newMessages = [];
        docs.forEach(doc => {
          newMessages.push({ 
            id: doc.id, 
            ...doc.data(),
            createdAt: new Date(doc.data().createdAt.toMillis()),
          });
        });
        setMessages(newMessages);
        cacheMessages(newMessages);
      });
    } else loadCachedMessages();



    const cacheMessages = async (messagesToCache) => {
      try {
        await AsyncStorage.setItem('messages', JSON.stringify(messagesToCache));
      } catch (error) {
        console.log(error.message);
      }
    }
    
    
    // Clean up code
    return () => {
      if (unsubMessages) unsubMessages();
    }
 
  }, []);

  // Adds new messages to previous messages and saves in 'messages' state
  const onSend = (newMessages) => {
    addDoc(collection(db, 'messages'), newMessages[0])
  }
  
  return (
    <View style={[ styles.container, { backgroundColor: color} ]}>
      <GiftedChat
        messages={messages}
        renderBubble={renderBubble}
        renderInputToolbar={renderInputToolbar}
        renderActions={renderCustomActions}
        renderCustomView={renderCustomView}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: userID,
          name
        }}
     />
     { Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30
  },
});

export default Chat;