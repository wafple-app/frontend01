import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import { useState } from 'react';
import Login from './screens/login';

const getFonts = () => Font.loadAsync({
  'SourceSansPro-Regular': require('./assets/fonts/SourceSansPro-Regular.ttf'),
  'SourceSansPro-Bold': require('./assets/fonts/SourceSansPro-Bold.ttf')
});


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  return (
    <Login />

    // import AppLoading from 'expo-app-loading';
    // 위에 꺼 써서 아래 loading check 할까하는데 다른 방법있으면 npm install 안할게요
    //
    // if(fontsLoaded){
    //   return (
    //     <Login />
    //   );
    // } else {
    //   return (
    //     <AppLoading
    //       startAsync={getFonts}
    //       onFinish={()=> setFontsLoaded(true)} 
    //       onError={() => console.log('error')}
    //     />
    //   )
  );
}

