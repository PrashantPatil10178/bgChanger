import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const Random = () => {
    let x = Math.floor(Math.random() * 255);
    let y = Math.floor(Math.random() * 255);
    let z = Math.floor(Math.random() * 255);
    return `rgb(${x},${y},${z})`;
  };
  const [color, setcolor] = useState(Random);
  const [triangle, settriangle] = useState(Random);
  const [square, setsquare] = useState(Random);
  const [Circle, setCircle] = useState(Random);

  return (
    <>
      <StatusBar backgroundColor={color} />
      <View
        style={{
          height: '100%',
          width: '100%',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: color,
          gap: 45,
        }}>
        <View style={[styles.Triangle, {borderBottomColor: triangle}]} />
        <TouchableOpacity
          style={styles.div}
          onPress={() => {
            setcolor(Random);
            setsquare(Random);
            setCircle(Random);
            settriangle(Random);
          }}>
          <Text style={styles.Text}>Click Me Change the Color</Text>
        </TouchableOpacity>
        <View style={[styles.Square, {backgroundColor: square}]} />
        <View style={[styles.Circle, {backgroundColor: Circle}]} />
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  Triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 25, // Adjust the width of the triangle
    borderRightWidth: 25, // Adjust the width of the triangle
    borderBottomWidth: 50,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  Square: {
    height: 50,
    width: 50,
  },
  Circle: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  conatiner: {
    height: '100%',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2E2BA',
  },
  div: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  Text: {
    color: '#11001C',
    textTransform: 'uppercase',
  },
});
