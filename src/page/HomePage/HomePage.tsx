import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import stylesFunction from './styles';
import euaIcon from '../../assets/eua.png';
import setaIcon from '../../assets/seta.png';
import phoneIcon from '../../assets/phone.png';
import messageIcon from '../../assets/message-circle.png';
import menuIcon from '../../assets/menu.png';
import bellIcon from '../../assets/bell.png';
import xmlid15 from '../../assets/XMLID-15.png';
import xmlid80 from '../../assets/XMLID-80.png';
import group from '../../assets/Group.png';
import group32 from '../../assets/Group-32.png';
import {Linking} from 'expo';
import * as SMS from 'expo-sms';

function HomePage() {
  const callNow = async () => {
    let result = await Linking.openURL('tel:192');
  };

  const btnSMSClicked = async () => {
    //await this.askLKermissionsAsync();
    //let result = await Linking.openURL('sms:0609690005');
    // await this.askSMSPermissionsAsync();
    let result = await SMS.sendSMSAsync(['192'], 'I need heelp');
  };

  const styles = stylesFunction();
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
          <Text style={styles.textAppBar}>Covid-19</Text>
          <RectButton style={styles.selectButton}>
            <Image
              source={euaIcon}
            />
            <Text>USA</Text>
            <Image
              source={setaIcon}
            />
          </RectButton>
        </View>


        <Text style={styles.textHome}>Are you feeling sick?</Text>
        <Text style={styles.bioTextHome}>If you feel sick with any of covid-19 symptoms please call or SMS us immediately for help.</Text>


        <View style={styles.buttons}>
          <RectButton style={styles.buttonsInto} onPress={()=>{callNow();}}>
            <Image
              source={phoneIcon}
            />
            <Text style={styles.textButton}>Call Now</Text>
          </RectButton>
          <RectButton style={styles.buttonsIntoSMS} onPress={()=>{btnSMSClicked()}}>
            <Image
              source={messageIcon}
            />
            <Text style={styles.textButton}>Send SMS</Text>
          </RectButton>
        </View>
      </View>

      <View style={styles.prevetionContainer}>
        <Text style={styles.title}>Prevention</Text>
        <View style={styles.prevetionRowContainer}>
          <View style={styles.itemPrevention}>
            <Image source={xmlid80} />
            <Text style={styles.textPrevention}>Avoid close contact</Text>
          </View>
          <View style={styles.itemPrevention}>
            <Image source={xmlid15} />
            <Text style={styles.textPrevention}>Clean your hands often</Text>
          </View>
          <View style={styles.itemPrevention}>
            <Image source={group} />
            <Text style={styles.textPrevention}>Wear a facemask</Text>
          </View>
        </View>
      </View>
      <View style={styles.imageGroup32}>
        <Image source={group32} />
      </View>
    </View>
  );
}

export default HomePage;