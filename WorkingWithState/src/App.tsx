import { Provider } from 'react-redux';
import { myStore } from './store/store';
import { Header } from './Header';
import { Main } from './Main';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Provider store={myStore}>
        <Header />
        <Main />
      </Provider>
    </div>
  );
}

export default App;
