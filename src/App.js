import logo from './logo.svg';
import './App.css';
import Timeline from './components/Timeline/Timeline';
import IntroductonHeader from './components/IntroductionHeader/IntroductionHeader';

function App() {
  return (
    <div className="App">
      <IntroductonHeader/>
      <Timeline/>
    </div>
  );
}

export default App;
