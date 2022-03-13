import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './Components/Counter/Index';

function App() {
  return (
    <div className="App">
      <div className='row h-100vh'>
        <div className='col-md-12 d-flex justify-content-center align-items-center'>
          {/* <details>
            <summary>
              Technologies to learn
            </summary>
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>JavaScript</li>
            </ul>
            <button type="button" className="btn btn-primary">Primary</button>
          </details> */}
          <Counter />
        </div>
      </div>
    </div>
  );
}

export default App;
