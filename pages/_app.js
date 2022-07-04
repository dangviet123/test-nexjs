
import { Provider } from 'react-redux';
import { useStore } from '../src/stores/configureStore';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/themes/theme';
const App = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
    
  )
}

export default App;