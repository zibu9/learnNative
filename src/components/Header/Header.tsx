import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const days: string[] = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
const months: string[] = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

const Header = () => {
  const date = new Date();
  return (
    <View style={styles.container}>
        <Text style={styles.date}>{`${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingTop:20,
    paddingLeft:25,
  },
  date:{
    fontSize:26,
    fontWeight:"bold",
    color: "black"
  },
});

export default Header