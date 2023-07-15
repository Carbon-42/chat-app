import { StyleSheet } from 'react-native';
import Start from './components/Start';
import Chat from './components/Chat';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initializeApp } from 'firebase/app';
import { getFirestore, enableNetwork, disableNetwork } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

//Import react, react-native, netinfo components
import { useNetInfo } from '@react-native-community/netinfo';
import { useEffect } from 'react';
import { Alert } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {

  // Check network status
  const connectionStatus = useNetInfo();

  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert('Connection lost!');
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDRMYj5PdXFGGBTeOyD6X45l6R19Os0uF0",
    authDomain: "chat-app-d073c.firebaseapp.com",
    projectId: "chat-app-d073c",
    storageBucket: "chat-app-d073c.appspot.com",
    messagingSenderId: "973446138790",
    appId: "1:973446138790:web:009671d8d36ba4b0bf9d67"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore DATABASE and get a reference to the service
  const db = getFirestore(app);

  //Initialize Cloud Firestore STORAGE and get a reference to the service
  const storage = getStorage(app);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Start'>
        <Stack.Screen
            name='Start'
            component={Start}
          />
          <Stack.Screen
            name='Chat'
          >
            {props => <Chat storage={storage} isConnected={connectionStatus.isConnected} db={db} {...props}/>}
          </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
