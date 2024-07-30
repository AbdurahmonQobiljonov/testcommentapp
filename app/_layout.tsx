import React, { Component } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SheetProvider } from 'react-native-actions-sheet';
import { ActivityIndicator, StyleSheet } from 'react-native';
import FontLoader from '@/hooks/loadFonts';
import axios from 'axios';
import * as Location from 'expo-location';
import { rootStore } from '@/models';

interface Cords {
  latitude: string;
  longitude: string;
}
interface IState {
  location: Cords | null;
  sunrise: string | null;
  sunset: string | null;
  fontsLoaded: boolean;
}

class AppNavigator extends Component {
  render() {
    return (
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="comments"
          options={{
            title: 'Comments',
            presentation: 'modal',
          }}
        />
      </Stack>
    );
  }
}
class App extends Component {
  private ApiKey = '70ecc26c3b4ca078bde12525b0e80074';
  private _baseOpenweatherUrl = 'https://api.openweathermap.org/data/3.0/onecall';

  state: IState = {
    fontsLoaded: false,
    location: null,
    sunrise: null,
    sunset: null,
  };

  theme = rootStore.theme;

  async componentDidMount() {
    await this.loadFonts();
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      this.setState({
        errorMsg: 'Permission to access location was denied',
      });
      return;
    }

    let location = await Location.getCurrentPositionAsync({});

    this.setState({
      location: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
    });

    const res = await axios.get(
      `${this._baseOpenweatherUrl}?lat=${this.state.location?.latitude}&lon=${this.state.location?.longitude}&appid=${this.ApiKey}`,
    );

    this.setState({
      sunrise: res.data.current.sunrise,
      sunset: res.data.current.sunset,
    });

    if (this.state.sunrise && this.state.sunset) {
      const date = new Date();
      const seconds = Math.floor(date.getTime() / 1000);

      if (seconds >= +this.state.sunrise && seconds <= +this.state.sunset) {
        this.theme.setMode('light');
      } else {
        this.theme.setMode('dark');
      }
    }
  }

  loadFonts = async () => {
    try {
      await FontLoader.loadFonts();
      this.setState({ fontsLoaded: true });
    } catch (error) {
      console.error('Error loading fonts: ', error);
    }
  };

  render() {
    if (!this.state.fontsLoaded) {
      return <ActivityIndicator size="large" style={s.activityIndecator} />;
    }

    return (
      <>
        <SafeAreaProvider>
          <GestureHandlerRootView
            style={{
              flex: 1,
            }}>
            <SheetProvider context="global">
              <AppNavigator />
            </SheetProvider>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </>
    );
  }
}

const s = StyleSheet.create({
  activityIndecator: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default App;
