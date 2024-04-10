
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux'
import { AppRouter } from './router';
function App() {
  return (
    <div className="layout">
      <BrowserRouter>
        <Provider store={store}>
          <AppRouter/>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
