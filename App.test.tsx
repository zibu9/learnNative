import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import TaskScreen from './src/screens/Tasks/TaskScreen';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';


const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.app}>
        <TaskScreen />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
    app:{
      flex:1,
    }
});
 
export default App;
