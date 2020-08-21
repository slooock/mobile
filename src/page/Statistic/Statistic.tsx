import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';

import styles from './styles';
import menuIcon from '../../assets/menu.png';
import bellIcon from '../../assets/bell.png';

function Statistic() {
  const [local,setLocal] = useState(true);
  function changeLocal(){
    setLocal(!local);
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.appbarButton}>
          <BorderlessButton>
            <Image
              source={menuIcon}
            />
          </BorderlessButton>
          <BorderlessButton>
            <Image
              source={bellIcon}
            />
          </BorderlessButton>
        </View>
        <View style={styles.appBar}>
          <Text style={styles.textAppBar}>Statistics</Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <View style={styles.sliderButtons}>
          <RectButton
            onPress={() => {changeLocal(); }}
            style={local ? styles.buttonTabSelect : styles.buttonTab}>
            <Text style={local ? styles.textButtonSelect : styles.textButton}>My Country</Text>
          </RectButton>
          <RectButton
            onPress={() => {changeLocal(); }}
            style={!local ? styles.buttonTabSelect : styles.buttonTab}>
             <Text style={!local ? styles.textButtonSelect : styles.textButton}>Global</Text>
          </RectButton>
        </View>
      </View>
      <View style={styles.containerMenuText}>
        <Text style={styles.menuTextSelect}>Total</Text>
        <Text style={styles.menuText}>Today</Text>
        <Text style={styles.menuText}>Yesterday</Text>
      </View>
      <View style={styles.containerTwoBoxes}>
        <View style={styles.boxOne}>
          <Text style={styles.titleBox}>Affected</Text>
          <Text style={styles.resultBox}>336,851</Text>
        </View>
        <View style={styles.boxTwo}>
          <Text style={styles.titleBox}>Death</Text>
          <Text style={styles.resultBox}>9,620</Text>
        </View>
      </View>
      <View style={styles.containerThreeBoxes}>
        <View style={styles.boxThreeOne}>
          <Text style={styles.titleBox}>Recovered</Text>
          <Text style={styles.resultBoxSmall}>17,977</Text>
        </View>
        <View style={styles.boxThreeTwo}>
          <Text style={styles.titleBox}>Active</Text>
          <Text style={styles.resultBoxSmall}>301,251</Text>
        </View>
        <View style={styles.boxThreeThree}>
          <Text style={styles.titleBox}>Serious</Text>
          <Text style={styles.resultBoxSmall}>8,702</Text>
        </View>
      </View>

      <View style={styles.dailyNewCases}>
        <Text style={styles.textDaily}>Daily New Cases</Text>
      </View>

    </View>
  );
}

export default Statistic;