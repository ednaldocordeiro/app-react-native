import { Image, StyleSheet, Text, View } from "react-native";

export default function ScreenB() {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: 'center', backgroundColor: '#000000'}}>
      <Image 
        source={require('../assets/foto.jpeg')}
        style={styles.image}
      />
      <View style={styles.divider}/>
      <Text style={{fontWeight: 'bold', color: 'white'}}>
        EDNALDO CORDEIRO LINS JUNIOR
      </Text>
      <Text style={{color: 'white'}}>
        2019323260
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 100, 
    height: 100, 
    borderRadius: 100, 
    borderWidth: 1, 
    borderColor: '#aaa', 
  },
  divider: {
    width: '70%', 
    height: 2, 
    borderBottomColor: '#aaa', 
    borderBottomWidth: .7,
    marginVertical: 15
  }
})