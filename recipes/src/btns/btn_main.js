import React from 'react';


function BtnMain(btnMainTxt, numbHolder, momentaryNumbHolder, result) {

    let numb = 0;
    

    
    const numbPusher = () => {
        switch (btnMainTxt) {
            case 'C':
                //trzeba użyć screenHoldera
                momentaryNumbHolder = [];

                break;
            case '%':
                let numbPer = '';
                momentaryNumbHolder.map((e) => {
                    numbPer = numbPer + e;
                    console.log(numbPer)
                });
                momentaryNumbHolder.push(numb/100);
                break;
            case 'CE':
                momentaryNumbHolder = [];
                numbHolder = [];
                numb = 0;
                break;
            case '/':
            case '-':
            case '+':
            case 'X':
                momentaryNumbHolder.map((e) => {
                    numb = numb + e;
                });
                numbHolder.push(btnMainTxt)
                numbHolder.push(parseInt(numb));
                momentaryNumbHolder.length = 0;
                numb = 0;
            break;
            case '=':
                momentaryNumbHolder.map((e) => {
                    numb = numb + e;
                });
                //numbHolder.push(parseInt(numb));
                momentaryNumbHolder.length = 0;
                

                switch (numbHolder[0]) {
                    case '+':
                        result = numbHolder[1] + numb;
                        break;
                    case '-':
                        result = numbHolder[1] - numb;
                        break;
                    case 'X':
                        result = numbHolder[1] * numb;
                        break;
                    case '/':
                        if (numbHolder[2] === 0) {
                            result = 'ERR 101'
                        } else {
                            result = numbHolder[1] / numb;
                        };
                        break;
                    default:
                    result = 'ERR 100'
                }
                numbHolder.length = 0;
                numb = 0;
                momentaryNumbHolder.length = 0;
                break;
            default:
                momentaryNumbHolder.push(parseInt(btnMainTxt));
            
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