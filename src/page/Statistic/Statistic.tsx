import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

import styles from './styles';
import menuIcon from '../../assets/menu.png';
import bellIcon from '../../assets/bell.png';
import api from '../../service/api';
import transformDate from '../../util';

interface Cases {
  "Active": number,
  "City": string,
  "CityCode": string,
  "Confirmed": number,
  "Country": string,
  "CountryCode": string,
  "Date": string,
  "Deaths": number,
  "Lat": string,
  "Lon": string,
  "Province": string,
  "Recovered": number,
}

interface CasesWorld {
  "TotalConfirmed": number,
  "TotalDeaths": number,
  "TotalRecovered": number
}

type DataProps = {
  day: string;
  quant: number;
};

function Statistic() {
  // const data = [
  //   {day: 'jan', quant: 13000},
  //   {day: 'fev', quant: 16500},
  //   {day: 'mar', quant: 14250},
  //   {day: 'abr', quant: 19000}
  // ];
  const [data, setData] = useState<DataProps[]>([]);
  const [local, setLocal] = useState(true);
  const [confirmed, setConfirmed] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [active, setActive] = useState(0);
  const [calcDay, setCalcDay] = useState(1);
  const [totalConfirmed, setTotalConfirmed] = useState(0);
  const [totalDeaths, setTotalDeaths] = useState(0);
  const [totalRecovered, setTotalRecovered] = useState(0);

  const chartTheme: object = {
    axis: {
      style: {
        tickLabels: {
          // this changed the color of my numbers to white
          fill: '#999FBF',
          padding: 15
        },
        grid: {
          fill: "none",
          stroke: "none",
          pointerEvents: "painted"
        },
        axis: {
          fill: "none",
          stroke: "none",
          pointerEvents: "painted"
        },
      },
    },
  };

  function getDatasCountry(day: number) {
    var url: string = '';
    url = 'dayone/country/brazil'

    api.get(url).then(response => {
      const listCases: Cases[] = response.data;
      const lastDay = listCases[listCases.length - day];
      const { Confirmed } = lastDay;
      const { Deaths } = lastDay;
      const { Recovered } = lastDay;
      const { Active } = lastDay;
      setConfirmed(Confirmed);
      setDeaths(Deaths);
      setRecovered(Recovered);
      setActive(Active);

      var days: DataProps[] = [];
      for (let i: number = 1; i < 7; i += 1) {
        const deaths = listCases[listCases.length - i].Deaths - listCases[listCases.length - (i + 1)].Deaths
        const date: Date = new Date(listCases[listCases.length - i].Date);
        const day = date.getDate().toString();
        days.push({ day: day, quant: deaths });
      }

      setData(days.reverse());

    })
  }

  function getDatasWorld(day: number) {
    var url: string = '';
    url = 'https://api.covid19api.com/world/total'


    api.get(url).then(response => {
      // console.log(response.data);
      const listCases: CasesWorld = response.data;
      const lastDay = listCases;
      const { TotalConfirmed } = lastDay;
      const { TotalDeaths } = lastDay;
      const { TotalRecovered } = lastDay;
      setTotalConfirmed(TotalConfirmed);
      setTotalDeaths(TotalDeaths);
      setTotalRecovered(TotalRecovered);


    });
  }

  useEffect(() => {
    getDatasCountry(1);

  }, []);

  function changeLocal() {
    setLocal(!local);
    var url: string;

    console.log(local);
    if (!local) {
      getDatasCountry(1);
    } else {

      getDatasWorld(1);
    }
    // getDatasCountry(1);
  }

  function transformData(casos: number, type: string) {
    var casosString: string;
    casosString = casos.toString();
    const typesVec: string[] = ['affected', 'deaths'];
    var casosTransform: string = '';
    if (casos > 0) {
      if (casosString.length >= 5 && typesVec.find(it => it === type)) {
        if (casosString.length <= 6) {

          casosTransform = casosTransform.concat(casosString.substring(0, 3))
            .concat(',').concat(casosString.substring(3, casosString.length));
          casosString = casosTransform;
        } else {
          casosTransform = casosTransform.concat(casosString.substring(0, 1))
            .concat('.').concat(casosString.substring(1, 4)).concat(',')
            .concat(casosString.substring(4, casosString.length))

          casosString = casosTransform;
        }
      } else {
        casosTransform = casosTransform.concat(casosString.substring(0, 3))
          .concat(',').concat(casosString[3]).concat(' K');
        casosString = casosTransform;
      }
    }
    return casosString;
  }

  async function changeDates(day: number) {
    await setCalcDay(day);
    getDatasCountry(day);
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
            onPress={() => { changeLocal(); }}
            style={local ? styles.buttonTabSelect : styles.buttonTab}>
            <Text style={local ? styles.textButtonSelect : styles.textButton}>My Country</Text>
          </RectButton>
          <RectButton
            onPress={() => { changeLocal(); }}
            style={!local ? styles.buttonTabSelect : styles.buttonTab}>
            <Text style={!local ? styles.textButtonSelect : styles.textButton}>Global</Text>
          </RectButton>
        </View>
      </View>
      {local ?
        <View style={styles.containerMenuText}>
          <BorderlessButton onPress={() => { changeDates(1) }}>
            <Text style={calcDay === 1 ? styles.menuTextSelect : styles.menuText}>Total</Text>
          </BorderlessButton>
          <BorderlessButton onPress={() => { changeDates(2) }}>
            <Text style={calcDay === 2 ? styles.menuTextSelect : styles.menuText}>Today</Text>
          </BorderlessButton>
          <BorderlessButton onPress={() => { changeDates(3) }}>
            <Text style={calcDay === 3 ? styles.menuTextSelect : styles.menuText}>Yesterday</Text>
          </BorderlessButton>
        </View>
        : <View style={styles.containerMenuText}>
          
          <BorderlessButton onPress={() => { changeDates(3) }}>
            <Text style={calcDay === 3 ? styles.menuTextSelect : styles.menuText}>...</Text>
          </BorderlessButton>
        </View>
      }
      {local ?
        <View >
          <View style={styles.containerTwoBoxes}>
            <View style={styles.boxOne}>
              <Text style={styles.titleBox}>Affected</Text>
              <Text style={styles.resultBox}>{transformData(confirmed, 'affected')}</Text>
            </View>
            <View style={styles.boxTwo}>
              <Text style={styles.titleBox}>Death</Text>
              <Text style={styles.resultBox}>{transformData(deaths, 'deaths')}</Text>
            </View>
          </View>
          <View style={styles.containerThreeBoxes}>
            <View style={styles.boxThreeOne}>
              <Text style={styles.titleBox}>Recovered</Text>
              <Text style={styles.resultBoxSmall}>{transformData(recovered, 'recovered')}</Text>
            </View>
            <View style={styles.boxThreeTwo}>
              <Text style={styles.titleBox}>Active</Text>
              <Text style={styles.resultBoxSmall}>{transformData(active, 'active')}</Text>
            </View>
            <View style={styles.boxThreeThree}>
              <Text style={styles.titleBox}>Serious</Text>
              <Text style={styles.resultBoxSmall}>{transformData(Math.round(active * 0.3), 'serious')}</Text>
            </View>
          </View>
        </View>
        : <View >
          <View style={styles.containerTwoBoxes}>
            <View style={styles.boxOne}>
              <Text style={styles.titleBox}>Affected</Text>
              <Text style={styles.resultBox}>{totalConfirmed}</Text>
            </View>
            <View style={styles.boxTwo}>
              <Text style={styles.titleBox}>Death</Text>
              <Text style={styles.resultBox}>{totalDeaths}</Text>
            </View>
          </View>
          <View style={styles.containerThreeBoxes}>
            <View style={styles.boxThreeOneAll}>
              <Text style={styles.titleBoxAll}>Recovered</Text>
              <Text style={styles.resultBoxSmallAll}>{totalRecovered}</Text>
            </View>
          </View>

        </View>}

      <View style={styles.dailyNewCases}>
        <Text style={styles.textDaily}>Daily New Deaths</Text>
        <View style={styles.chart}>
          <VictoryChart
            width={250}
            height={200}
            theme={chartTheme}
            padding={{ top: 10, bottom: 70, left: 50, right: 40 }}
          >
            <VictoryBar
              data={data}
              x="day"
              y="quant"
              cornerRadius={{ topLeft: 4, topRight: 4, bottomLeft: 4, bottomRight: 4 }}
              barWidth={8}
              style={{
                data: {
                  fill: "#FF5959",
                  width: 25
                }
              }}
            />
          </VictoryChart>
        </View>

      </View>

    </View>
  );
}

export default Statistic;