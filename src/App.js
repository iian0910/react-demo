// 外部套件
import { useEffect, useState } from 'react';
import axios from 'axios';

// 內部套件
import logo from './assets/images/logo.svg';
import './assets/style/App.css';
import Input from './components/Input';
import './assets/style/all.scss'



function App() {
  const [text, setText] = useState('')
  const onChangeHandler = (e) => {
    setText(e.target.value)
  }

  useEffect(() => {
    (async() => {
      const { data } = await axios.get(process.env.REACT_APP_PATH_URL)
      console.log('result =>', data)
    })()
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Quis ut sint est deserunt mollit minim cupidatat ea consequat aliqua do commodo aliquip.
        </p>
        <button type='button' className='btn btn-primary'>Primary</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br/>
        <Input
          id="sampleText"
          text="這是一個 Input"
          value={text}
          onChangeHandler={onChangeHandler}
        />
        { text }
      </header>
    </div>
  );
}

export default App;
