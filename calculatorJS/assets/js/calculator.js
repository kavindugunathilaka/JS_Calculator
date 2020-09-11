var _number1 , _number2 , _answer , _operator;


function setScreen(nub)
{

    if(document.getElementById('TEXTsCREEN').value != "0")
    {
        document.getElementById('TEXTsCREEN').value += nub;
    }else
    {
        document.getElementById('TEXTsCREEN').value = nub;

    }
    console.log(nub);
}

function reset(){
    document.getElementById("TEXTsCREEN").value = "0";
}

function setoperator(op){
    console.log(op);

    _number1 = document.getElementById('TEXTsCREEN').value;
    document.getElementById('TEXTsCREEN').value = "0";
    console.log("_number1 : " + _number1);
    console.log("_operator  " + op);
        _operator = op;
}


function getAns(){

    _number2 = document.getElementById('TEXTsCREEN').value;
    console.log("_number2 : " + _number2);

    if(_operator == '+'){

        _answer = Number (_number1) + _number2 ;
    }
    

    else if(_operator == '-'){
        _answer = Number (_number1) - _number2 ;
    }


    else if(_operator == '*'){

        _answer = Number (_number1) * _number2 ;
    }

    else if(_operator == '/'){
        
        _answer = Number (_number1) / _number2 ;
    }

    console.log("_answer  : " + _answer); 

    document.getElementById('TEXTsCREEN').value = _answer ; 

}