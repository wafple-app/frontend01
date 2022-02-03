import * as React from "react";
import RootNaviagation from "./naviagation";
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { useState } from 'react';

const getFonts = () => Font.loadAsync({
  'SourceSansPro-Regular': require('./src/assets/fonts/SourceSansPro-Regular.ttf'),
  'SourceSansPro-Bold': require('./src/assets/fonts/SourceSansPro-Bold.ttf')
});


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return <RootNaviagation />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={()=> setFontsLoaded(true)} 
        onError={() => console.log('error')}
      />
    )
  }
  
}
