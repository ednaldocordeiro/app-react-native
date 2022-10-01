import { View, Image } from "react-native";

export default function ScreenA() {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: 'center', backgroundColor: '#000000'}}>
      <Image 
        source={require('../assets/logo_if.png')}
        style={{width: 200, height: 210}}
      />
    </View>
  )
}