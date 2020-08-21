import { StyleSheet, PixelRatio, Dimensions } from "react-native";

const sizeText = (tamanhoTexto: number) => {
  const screenHeight = Dimensions.get('window').height;
  return screenHeight * tamanhoTexto / 100;
}

function styles() {
  if (Dimensions.get('window').height > 750) {
    const styles = StyleSheet.create({
      tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
        marginBottom: 10,
        backgroundColor: '#FFF',
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
      tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
        marginBottom: 10
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