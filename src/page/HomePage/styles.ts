import { StyleSheet, PixelRatio, Dimensions } from "react-native";

const sizeText = (tamanhoTexto: number) => {
  const screenHeight = Dimensions.get('window').height;
  return screenHeight * tamanhoTexto / 100;
}



function styles() {
  if (Dimensions.get('window').height > 750) {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#FFF'
      },
      header: {
        backgroundColor: '#473F97',
        height: 368,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        padding: 25,
        paddingTop: 60
      },
      appbarButton: {
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      appBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
      },
      textAppBar: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: sizeText(3.35),
        color: '#FFF',
      },
      selectButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 120,
        height: 40,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        borderRadius: 20,
        padding: 10
      },
      textHome: {
        marginTop: 30,
        color: "#FFF",
        fontSize: 18,
        fontFamily: 'Poppins_600SemiBold',
      },
      bioTextHome: {
        marginTop: 10,
        color: "#FFF",
        fontSize: 14,
      },
      buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
      },
      buttonsInto: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#FF4D58',
        height: 50,
        width: '48%',
        borderRadius: 25,
        alignItems: "center"
      },
      buttonsIntoSMS: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#4D79FF',
        height: 50,
        width: '48%',
        borderRadius: 25,
        alignItems: "center"
      },
      textButton: {
        color: "#FFF",
        fontSize: 19,
        fontFamily: 'Poppins_600SemiBold',
        marginRight: 10
      },
      prevetionContainer: {

        marginTop: 10,
        marginHorizontal: 20
      },
      title: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 23,
      },
      prevetionRowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        fontWeight: 'bold',
        justifyContent: 'space-between',
        marginTop: 20
        // marginHorizontal: 30
      },
      itemPrevention: {
        width: 100,
        alignItems: 'center',
      },
      textPrevention: {
        marginTop: 10,
        textAlign: 'center',
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 12
      },
      imageGroup32: {
        marginTop: 30,
        // width: '100%',
        // height: 130,
        // flex:1,
        // backgroundColor: '#CCC',
        // resizeMode: 'contain',
        // justifyContent: 'center',
        alignItems: 'center'
      },
      tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30
      },
      iconTabBar: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 50,
        backgroundColor: '#4C79FF',
        borderRadius: 25
      },
      iconTabBarDeselect: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 50,
        borderRadius: 25
      }

    });
    return styles;
  } else {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      imagePrevention: {
        marginTop: 10,
        width: '100%',
        height: 70,
        resizeMode: 'contain',
      },
      header: {
        backgroundColor: '#473F97',
        height: 280,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        padding: 15,
        paddingTop: 40
      },
      appbarButton: {
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      appBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
      },
      textAppBar: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: sizeText(3.35),
        color: '#FFF',
      },
      selectButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
        height: 30,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        borderRadius: 15,
        padding: 5
      },
      textHome: {
        marginTop: 15,
        color: "#FFF",
        fontSize: 20,
        fontFamily: 'Poppins_600SemiBold',
      },
      bioTextHome: {
        marginTop: 5,
        color: "#FFF",
        fontSize: 13,
      },
      buttons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 15
      },
      buttonsInto: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#FF4D58',
        height: 40,
        width: '44%',
        borderRadius: 20,
        alignItems: "center"
      },
      buttonsIntoSMS: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#4D79FF',
        height: 40,
        width: '44%',
        borderRadius: 20,
        alignItems: "center"
      },
      textButton: {
        color: "#FFF",
        fontSize: 17,
        fontFamily: 'Poppins_600SemiBold',
        marginRight: 10
      },
      prevetionContainer: {
        marginTop: 10,
        marginHorizontal: 20
      },
      title: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 23,
      },
      prevetionRowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        fontWeight: 'bold',
        justifyContent: 'space-between',
        marginTop: 4
        // marginHorizontal: 30
      },
      itemPrevention: {
        width: 100,
        alignItems: 'center',
      },
      textPrevention: {
        marginTop: 10,
        textAlign: 'center',
        fontFamily: 'Poppins_600SemiBold',
      },
      imageGroup32: {
        marginTop: 10,
        width: '100%',
        height: 140,
        resizeMode: 'contain',
      },
      tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30
      },
      iconTabBar: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 50,
        backgroundColor: '#4C79FF',
        borderRadius: 25
      },
      iconTabBarDeselect: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 50,
        borderRadius: 25
      }

    });
    return styles;

  }
}
export default styles;