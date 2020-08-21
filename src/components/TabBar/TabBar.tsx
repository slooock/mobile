import React, { useState } from 'react';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import stylesFunction from './styles';

interface TabBarProps {
  indice?: number,
  changeIndice: (indice:number)=>void,
}

const TabBar: React.FC<TabBarProps> = ({indice, changeIndice}) => {
  const styles = stylesFunction();
  const [home, setHome] = useState(true);
  const [chart, setChart] = useState(false);
  const [news, setNews] = useState(false);
  const [info, setInfo] = useState(false);

  const { navigate } = useNavigation();

  function selectMenu(page: string){
   
    if(page === 'home') {
      setHome(true);
      setChart(false)
      setNews(false);
      setInfo(false);
      // navigate('HomePage');
      changeIndice(1);
    } else if(page === 'chart') {
      setHome(false);
      setChart(true)
      setNews(false);
      setInfo(false);
      // navigate('Statistic');
      changeIndice(2);
    } else if(page === 'news') {
      setHome(false);
      setChart(false)
      setNews(true);
      setInfo(false);
      changeIndice(3);
    } else if(page === 'info') {
      setHome(false);
      setChart(false)
      setNews(false);
      setInfo(true);
      changeIndice(4);
    }
  }
  
  return(
    <View style={styles.tabBar}>
      <RectButton 
        onPress={()=>{selectMenu('home')}}
        style={home ? styles.iconTabBar : styles.iconTabBarDeselect}>
          <Ionicons name="md-home" size={32} color={home?'white': 'gray'} />
        </RectButton>
        <RectButton 
          onPress={()=>{selectMenu('chart')}}
          style={chart ? styles.iconTabBar : styles.iconTabBarDeselect}>
          <AntDesign name="barchart" size={32} color={chart?'white': 'gray'} />
        </RectButton>
        <RectButton 
          onPress={()=>{selectMenu('news')}}
          style={news ? styles.iconTabBar : styles.iconTabBarDeselect}>
          <FontAwesome name="newspaper-o" size={32} color={news?'white': 'gray'} />
        </RectButton>
        <RectButton 
          onPress={()=>{selectMenu('info')}}
          style={info ? styles.iconTabBar : styles.iconTabBarDeselect}>
          <Ionicons name="md-information-circle" size={32} color={info?'white': 'gray'} />
        </RectButton>
      </View>
  );
}
export default TabBar;