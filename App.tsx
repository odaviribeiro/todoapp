import React from 'react';
import { HomeScreen } from './src/screens';
import { Loading } from './src/components';
import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter';
import { registerRootComponent } from 'expo';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) return <Loading />;
  return <HomeScreen />;
}

registerRootComponent(App);
