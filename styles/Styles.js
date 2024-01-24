import { StyleSheet } from "react-native";
import Constants from "expo-constants";
 

export default StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight+5,
        borderWidth: 1,
        backgroundColor: '#9b5d01ff',
        borderBlockColor: '#520000ff',
        padding: 10,
        borderRadius: 10,
        margin: 10,
        padding: 10,
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        color: '#520000ff',
        margin: 10,
    },
    input: {
        margin: 10,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10
    },
    button: {
        borderRadius: 5,
        margin: 10,
        backgroundColor: 'black',
        borderWidth: 1,
        padding: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        hover: {
            backgroundColor: '#520000ff',
        }
    },
    item: {
        backgroundColor: 'hsla(0, 0%, 0%, 1)',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
      },
    napit: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },
    
});
  



