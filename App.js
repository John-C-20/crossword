import logo from './logo.svg';
import Game from "./components/game";
import './App.css';

function App() {
  return React.createElement(
    'div',
    { className: 'App' },
    React.createElement(
      'header',
      { className: 'App-header' },
      React.createElement(Game, null)
    )
  );
}

export default App;