import logo from '../assets/HolbertonLogo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from '../utils/utils.js'

function App() {
	return (
	  <div className="App">
		<div className="App-header">
		  <img src={logo} className="App-logo" alt="logo" />
		  <h1>School dashboard</h1>
		</div>
		<div className="App-body">
		  <p>Login to access the full dashboard</p>
		  <div className='formName'>
			<label htmlFor='email'>Email: </label>
			<input name='email' type='email' id='email'></input>
			<label htmlFor='password'>Password: </label>
			<input name='password' type='password' id='password'></input>
			<button>OK</button>
		  </div>
		</div>
		<div className="App-footer">
		  <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
		</div>
	  </div>
	);
  }
  
  
  export default App;
