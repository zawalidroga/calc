import { useState } from 'react'
import BtnMain from "./btns/btn_main";



function App() {

  const [ screen, setScreen ] = useState(0)
  const [ result, setResult ] = useState(0)
  const numbHolder = []
  

  const keys = [
    '%',
    'CE',
    'C',
    '/',
    '7',
    '8',
    '9',
    'X',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '+/-',
    '0',
    ',',
    '='
  ];
  const btnHolder = [];
  const momentaryNumbHolder = [];
  


  
  const btnMaker = () => {
    
    for( let i = 0; i < 20; i++ ) {
      btnHolder.push(BtnMain(keys[i], numbHolder, momentaryNumbHolder, result))
    }
    
  }
  
  
  btnMaker();
  console.log(btnHolder)
  return (
    <div className="App">
      <div className='screen'>
        { result }
      </div>
      <div className='keyboard'>
        {btnHolder.map(el => {return el})}
      </div>
    </div>
  );
}

export default App;
