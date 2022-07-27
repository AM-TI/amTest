import { Provider } from 'react-redux';
import store from './Redux/Store/index.js';
import MainView from '../src/Components/MainView';
import '../src/Sass/_GlobalStyles.scss';

function App() {
  return (
    <Provider store={store}>
      <>
        <MainView />
      </>
    </Provider>
  );
}

export default App;