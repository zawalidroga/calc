import React, { useState } from 'react';


function BtnMain(btnMainTxt, screenMaker) {

    const [result, setResult] = useState()
    const [numbHolder, setNumbHolder] = useState([])
    const [momentaryNumbHolder, setMomentaryNumbHolder] = useState([])
    const [numb, setNumb] = useState(0)
    
    
    const numbPusher = () => {
        switch (btnMainTxt) {
            case 'C':
                //trzeba użyć screenHoldera
                setMomentaryNumbHolder([]);

                break;
            case '%':
                let numbPer = '';
                momentaryNumbHolder.map((e) => {
                    numbPer = numbPer + e;
                    console.log(numbPer)
                });
                setMomentaryNumbHolder([...numb/100]);
                break;
            case 'CE':
                setMomentaryNumbHolder([]);
                setNumbHolder([]);
                setNumb(0);
                break;
            case '/':
            case '-':
            case '+':
            case 'X':
                momentaryNumbHolder.map((e) => {
                    numb = numb + e;
                });
                setNumbHolder([...btnMainTxt])
                setNumbHolder([...parseInt(numb)]);
                setMomentaryNumbHolder([]);
                setNumb(0);
            break;
            case '=':
                momentaryNumbHolder.map((e) => {
                    setNumb(numb + e);
                });
                //numbHolder.push(parseInt(numb));
                setMomentaryNumbHolder([]);
                

                switch (numbHolder[0]) {
                    case '+':
                        setResult(numbHolder[1] + numb);
                        break;
                    case '-':
                        setResult(numbHolder[1] + numb);
                        break;
                    case 'X':
                        setResult(numbHolder[1] + numb);
                        break;
                    case '/':
                        if (numbHolder[2] === 0) {
                            setResult('ERR 101')
                        } else {
                            setResult(numbHolder[1] / numb);
                        };
                        break;
                    default:
                    setResult('ERR 100')
                }
                setNumbHolder([]);
                setNumb(0);
                setMomentaryNumbHolder([]);

                screenMaker(numbHolder, momentaryNumbHolder, result);
                break;
            default:
                setMomentaryNumbHolder(arr => [...arr, parseInt(btnMainTxt)]);
            
        }

        console.log(momentaryNumbHolder)
        console.log(numbHolder)
        console.log(numb)
        console.log(result)
    }
    
    return(
    
        <button className={`${btnMainTxt} btnBoard`} key={btnMainTxt} onClick={numbPusher}>
            {btnMainTxt}
        </button>
    )
};

export default BtnMain;