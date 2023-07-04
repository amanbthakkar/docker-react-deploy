import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Edit works?! Yes!!</p>
        <p>But there is no hot reload, unfortunately :O</p>
        <p>
          Hot reload works if the port mapping is the same (ie 3000:3000), but
          does not work for (4000:3000) <br></br>I guess it is in the nuances of
          how it works.
        </p>

        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
