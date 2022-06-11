import './App.css';
import {Provider} from 'react-redux'
import configureStore from './store/configureStore';
import Users from './components/Users'

const store = configureStore()

function App() {
  return (
    <Provider
    store={store}
    className="App">
      <header className="App-header">
        <h1>Redux with API call</h1>
        <Users />
      </header>
    </Provider>
  );
}

export default App;
