import './App.css';
import Timeline from './components/Timeline/Timeline';
import CounterHeader from './components/CounterHeader/CounterHeader';
import MainHeader from './components/MainHeader/MainHeader';


const targetValues = {
  days: 1095, 
  hours: 26280, 
  minutes: 1576800, 
  seconds: 94608000
};


function App() {
  return (
    <div className="App">
      <MainHeader/>
      <CounterHeader imgUrl={"/bg.mp4"} targetValue={targetValues.days} text={"dni uśmiechów"} isEven={false}/>
      <CounterHeader imgUrl={"/cats.mp4"} targetValue={targetValues.hours} text={"godzin przytulasów"} isEven={true}/>
      <CounterHeader imgUrl={"/pug.mp4"} targetValue={targetValues.minutes} text={"minut pełnych wspomnień"} isEven={false}/>
      <CounterHeader imgUrl={"/concert.mp4"} targetValue={targetValues.seconds} text={"sekund wspólnie spędzonych chwil"} isEven={true}/>
      <Timeline/>
    </div>
  );
}

export default App;
