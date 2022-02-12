import './App.scss';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TableStatisticMobile from './components/TableStatisticMobile';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Main />
     <TableStatisticMobile />
     <Footer />
    </div>
  );
}

export default App;
