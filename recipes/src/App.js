import { useState } from 'react'
import BtnMain from "./btns/btn_main";



function App() {

  const [ screen, setScreen ] = useState(0)
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
  
  
  const screenMaker = (numbHolders, momentaryNumbHolder, result) => {
    if(numbHolders.length == 0 && momentaryNumbHolder == 0){
      return result
    }
  }


  
  const btnMaker = () => {
    
    for( let i = 0; i < 20; i++ ) {
      btnHolder.push(BtnMain(keys[i], screenMaker))
    }
    
  }
  
  
  btnMaker();
  console.log(btnHolder)
  return (
    <div className="App">
      <div className='screen'>
        { screenMaker }
      </div>
      <div className='keyboard'>
        {btnHolder.map(el => {return el})}
      </div>
    </div>
  );
}

export default App;
