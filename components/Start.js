import { useState } from 'react'; 
import { StyleSheet, View, Text, TextInput, ImageBackground, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native';

const Start = ({ navigation }) => {
  const [name, setName] = useState();
  const [color, setColor] = useState();

  // Chat Screen background colors
  const bgColors = {
    blue: { backgroundColor: '#3399ff' },
    salmon: { backgroundColor: '#fa8072' },
    grey: { backgroundColor: '#dddddd' },
  };

  const { blue, salmon, grey } = bgColors;

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
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
                style={[styles.button_color, blue]} 
                onPress={() => setColor('#3399ff')}
              />
              <TouchableOpacity 
                style={[styles.button_color, salmon]} 
                onPress={() => setColor('#fa8072')}
              />
              <TouchableOpacity 
                style={[styles.button_color, grey]} 
                onPress={() => setColor('#dddddd')}
              />
            </View>
          </View>
          <TouchableOpacity 
            style={styles.button_start} 
            onPress={() => navigation.navigate('Chat', {name: name, color: color})}
          >
            <Text>Start Chatting!</Text>
          </TouchableOpacity>
        </ImageBackground>
      </TouchableWithoutFeedback>
      {Platform.OS === "ios"?<KeyboardAvoidingView behavior="padding" />: null}
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
    opacity: 0.9,
    backgroundColor: 'white'
  },
  button_color: {
    height: 40, 
    width: 40,
    borderRadius: 20,
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10,
  },
  color_dots: {
    flexDirection: 'row',
  },
  button_start: {
    backgroundColor: 'white', 
    padding: 10,
    borderRadius: 5,
    opacity: 0.8,
    marginBottom: 50
  }
});

export default Start;