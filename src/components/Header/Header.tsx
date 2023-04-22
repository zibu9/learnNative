import React from 'react'
import { Text, View } from 'react-native'

const days: string[] = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
const months: string[] = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

const Header = () => {
  const date = new Date();
  return (
    <>
        <Text>{`${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`}</Text>
    </>
  )
}

export default Header