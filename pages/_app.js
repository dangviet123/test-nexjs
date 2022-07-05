
import { Provider } from 'react-redux';
import { configureStore } from '../src/stores/configureStore';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/themes/theme';
import { CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();
export default function App (props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (

    <Provider store={configureStore()}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
        <CssBaseline />
          <Component {...pageProps} />
          
        </ThemeProvider>
      </CacheProvider>
      
    </Provider>
    
  )
}