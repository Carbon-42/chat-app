import { useState } from 'react'; 
import { StyleSheet, View, Text, Button, TextInput, ImageBackground, TouchableOpacity } from 'react-native';

const Start = ({ navigation }) => {
  const [name, setName] = useState();
  const [color, setColor] = useState();

  // Chat Screen background colors
  const bgColors = {
    blue: { backgroundColor: '#3399ff' },
    salmon: { backgroundColor: '#fa8072' },
    grey: { backgroundColor: '#dddddd' },
  };

  const { mint, blue, salmon, grey } = bgColors;

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/background.png')}
        resizeMode='cover'
        style={styles.background}
        >
        <Text style={styles.base_text}>WELCOME TO CHIT CHAT</Text>
        <TextInput 
        style={styles.textInput}
        value={name}
        onChangeText={setName}
        placeholderTextColor='red'
        placeholder='Type your username here'
        />
        <View style={{ alignItems: 'center'}}>
          <Text style={styles.base_text}>CHOOSE A COLOR</Text>
          <View style={styles.color_dots}>
            <TouchableOpacity 
              style={[styles.button, blue]} 
              onPress={() => setColor('#3399ff')}
            />
            <TouchableOpacity 
              style={[styles.button, salmon]} 
              onPress={() => setColor('#fa8072')}
            />
            <TouchableOpacity 
              style={[styles.button, grey]} 
              onPress={() => setColor('#dddddd')}
            />
          </View>
        </View>
        <TouchableOpacity 
          style={styles.start_button} 
          onPress={() => navigation.navigate('Chat', {name: name, color: color})}
        >
          <Text>Start Chatting!</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  base_text: {
    fontSize: 20,
    fontWeight: 600,
  },
  background: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  textInput: {
    width: "88%",
    padding: 15,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15,
    opacity: 0.9
  },
  button: {
    height: 40, 
    width: 40,
    borderRadius: 20,
    // alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10,
  },
  color_dots: {
    flexDirection: 'row',
  },
  start_button: {
    backgroundColor: 'white', 
    padding: 10,
    borderRadius: 5,
    opacity: 0.8
  }
});

export default Start;