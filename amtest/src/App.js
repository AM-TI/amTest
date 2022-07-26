import MainView from '../src/Components/MainView';
import { Provider } from 'react-redux';
import store from '../src/Redux/Store';
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