import BtnMain from "./btns/btn_main";
import ScreenMain from "./screen/screen_main";


function App() {

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
  const numbHolder = [];
  const momentaryNumbHolder = [];
  let result = 0;
  
  const btnMaker = () => {
    
    for( let i = 0; i < 20; i++ ) {
      btnHolder.push(BtnMain(keys[i], numbHolder, momentaryNumbHolder, result))
    }
    
  }
  
  //const screenMaker = (e) => {
  
  //}

  
  btnMaker();
  console.log(btnHolder)
  return (
    <div className="App">
      <div className='screen'>
  
      </div>
      <div className='keyboard'>
        {btnHolder.map(el => {return el})}
      </div>
    </div>
  );
}

export default App;
