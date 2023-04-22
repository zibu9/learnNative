import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import TaskScreen from './src/screens/Tasks/TaskScreen';


const App = () => {
  return (
    <SafeAreaView>
      <TaskScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
 
export default App;
