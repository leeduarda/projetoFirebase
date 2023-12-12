import { StyleSheet } from "react-native";

export default StyleSheet.create({
    View: {
        backgroundColor: '#fff',
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15,
      },
      ViewCard: {
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 25,
        shadowOpacity: 1.0,    
      },
      titleText: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 30,
        fontWeight: 'bold',
      },
      labelText: {
        marginTop: 5,
        marginBottom: 5,
        fontSize: 15,
      },
      labelTextOu: {
        marginTop: 5,
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
      },
      input: {
        height: 40,
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#fbfbfb',
        borderRadius: 5,
        elevation: 5,
        shadowOpacity: 1.0, 
      },
      button: {
        alignItems: 'center',
        backgroundColor: '#1E90FF',
        padding: 10,
        marginTop: 15,
        marginBottom: 5,
        borderRadius: 5,
        elevation: 5,
        shadowOpacity: 1.0, 
      },
      textbutton: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
      },
});