import './App.css';
import Search from './component/Search';
import Images from './component/Images';

function App() {
  return (
      <Search renderContent={(images) =>  <Images images={images} />
      }/>
  );
}

export default App;