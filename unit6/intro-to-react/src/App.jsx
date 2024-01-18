import logo from './logo.svg';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AboutMe from './components/about/AboutMe';
import Employee from './components/employeeinformation/Employee';
import PresidentVotes from './components/presidents/PresidentVotes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Employee />
      <PresidentVotes />
      <Footer />
    </div>
  );
}

export default App;
