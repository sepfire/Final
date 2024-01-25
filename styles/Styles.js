import { StyleSheet } from "react-native";
import Constants from "expo-constants";
 

export default StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight+5,
        backgroundColor: '#9b5d01ff',
        borderBlockColor: '#520000ff',
        padding: 10,
        margin: 10,
        padding: 10,
        
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        color: '#ffffffff',
        margin: 10,
    },
    input: {
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10
    },
});
  



