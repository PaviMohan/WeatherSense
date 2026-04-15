import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {Header} from './src/components';
import {Weather} from './src/screens/weather/weather';
import {colors} from './src/utills/constants';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {useNetInfo} from '@react-native-community/netinfo';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const {isConnected, type} = useNetInfo();
  console.log('net info ', isConnected, type);

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={colors.backgroundPrimary}
        />
        <View style={styles.container}>
          <Header />
          <Weather />
        </View>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: colors.backgroundPrimary,
    flex: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    gap: 10,
  },
});

export default App;
