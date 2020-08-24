import { StyleSheet, Dimensions } from "react-native";
const sizeText = (tamanhoTexto: number) => {
  const screenHeight = Dimensions.get('window').height;
  return screenHeight * tamanhoTexto / 100;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#473F97',
  },
  header: {
    paddingHorizontal: 25,
    paddingTop: 60,
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
  buttons:{
    paddingHorizontal: 25,
  },
  sliderButtons: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#6C65AC',
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    paddingHorizontal: 4
  },
  buttonTabSelect:{
    backgroundColor: '#FFF',
    height: 40,
    width: 150,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: "center"
  },
  buttonTab:{
    // backgroundColor: '#FFF',
    height: 40,
    width: 150,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: "center"
  },
  textButtonSelect: {
    fontSize: 14,
    color: "#6C65AC"
  },
  textButton: {
    fontSize: 14,
    color: "#FFF"
  },
  containerMenuText:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 60,
    marginTop: 25,
  },
  menuTextSelect: {
    fontSize: 14,
    fontFamily: 'Poppins_600SemiBold',
    color: '#FFF'
  },
  menuText: {
    fontSize: 14,
    fontFamily: 'Poppins_600SemiBold',
    color: '#8984BC'
  },
  containerTwoBoxes:{
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    marginTop: 20
  },
  boxOne:{
    width: 155,
    height:100,
    backgroundColor:"#FFB259",
    justifyContent:'space-between',
    alignItems: 'flex-start',
    borderRadius: 13,
    paddingHorizontal:14,
    paddingTop: 10,
    paddingBottom: 5,
  },
  boxTwo:{
    width: 155,
    height:100,
    backgroundColor:"#FF5959",
    justifyContent:'space-between',
    alignItems: 'flex-start',
    borderRadius: 13,
    paddingHorizontal:14,
    paddingTop: 10,
    paddingBottom: 5
  },
  titleBox:{
    fontSize: 13,
    color: '#FFF',
    fontFamily: 'Poppins_600SemiBold',
  },
  titleBoxAll:{
    fontSize: 17,
    color: '#FFF',
    fontFamily: 'Poppins_600SemiBold',
  },
  resultBox: {
    fontSize: 24,
    fontFamily: 'Poppins_600SemiBold',
    color: '#FFF',
  },
  containerThreeBoxes:{
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    marginTop: 14,
  },
  boxThreeOne:{
    width: 100,
    height:100,
    backgroundColor:"#4CD97B",
    justifyContent:'space-between',
    alignItems: 'flex-start',
    borderRadius: 13,
    paddingHorizontal:14,
    paddingTop: 10,
    paddingBottom: 5,
  },

  boxThreeOneAll:{
    width: '100%',
    
    height:100,
    backgroundColor:"#4CD97B",
    justifyContent:'space-between',
    alignItems: 'flex-start',
    borderRadius: 13,
    paddingHorizontal:14,
    paddingTop: 10,
    paddingBottom: 5,
  },
  boxThreeTwo:{
    width: 100,
    height:100,
    backgroundColor:"#4DB5FF",
    justifyContent:'space-between',
    alignItems: 'flex-start',
    borderRadius: 13,
    paddingHorizontal:14,
    paddingTop: 10,
    paddingBottom: 5
  },
  boxThreeThree:{
    width: 100,
    height:100,
    backgroundColor:"#9059FF",
    justifyContent:'space-between',
    alignItems: 'flex-start',
    borderRadius: 13,
    paddingHorizontal:14,
    paddingTop: 10,
    paddingBottom: 5
  },
  resultBoxSmall:{
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Poppins_600SemiBold',
  },
  resultBoxSmallAll:{
    color: '#FFF',
    fontSize: 25,
    fontFamily: 'Poppins_600SemiBold',
  },
  dailyNewCases:{
    flex:1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 40,
    paddingTop: 30,
    paddingHorizontal: 25
  },
  textDaily:{
    fontSize: 20,
    fontFamily: 'Poppins_600SemiBold',
  },
  chart:{
    // backgroundColor: '#CCC',
    alignItems:'center',
    // position: 'absolute',
    // paddingTop: '-100%'
    
  }

});
export default styles;