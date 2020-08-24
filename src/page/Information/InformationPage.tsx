import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import styles from './styles';
import {Linking} from 'expo';
import * as WebBrowser from 'expo-web-browser';


function InformationPage() {
  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync('https://github.com/slooock');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Developed by</Text>
      <Text>Kayque Avelar</Text>
      <Button title="GitHub" onPress={_handlePressButtonAsync} />
    </View>
  );
}

export default InformationPage;