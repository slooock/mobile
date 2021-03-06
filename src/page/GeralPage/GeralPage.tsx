import React, { useState } from 'react';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import TabBar from '../../components/TabBar/TabBar';
import HomePage from '../HomePage/HomePage';
import Statistic from '../Statistic/Statistic';
import InformationPage from '../Information/InformationPage';

function GeralPage(){
  const [indice, setIndice] = useState(4);
  
  function funcaoPai(indice: number){
    setIndice(indice);
  }
  
  return(
    <View style={styles.flexOne}>
      {indice ===1 && (<HomePage/>)}
      {indice ===2 && (<Statistic/>)}
      {indice ===4 && (<InformationPage/>)}
      
      {/* <Statistic/> */}
      <TabBar indice={indice} changeIndice={funcaoPai}/>
    </View>
  );
}
export default GeralPage;