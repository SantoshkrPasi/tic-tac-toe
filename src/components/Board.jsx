import React , {useState} from 'react'
import Square from './Square'

function Board() {
    let bool = true;
    const [state , setState] = useState(Array(9).fill(null));
    const [value , setValue] = useState(bool);
  
    const winner = () => {
        let winnerLogic = [
            [0 , 1 , 2],
            [3 , 4 , 5],
            [6 , 7 , 8],
            [0 , 3 , 6],
            [1 , 4 , 7],
            [2 , 5 , 8],
            [0 , 4 , 8],
            [2 , 4 , 6]
        ]
        for(let logic of winnerLogic)
        {
            const [a , b , c] = logic;
            if(state[a] === state[b] && state[b] === state[c] && state[a] !== null)
            return state[a];
        }
        return false;
    }

   const handleClick = (index) => {  
    if(state[index] !== null)
    return; 
   let arr = [...state];
   arr[index] =  value === true ? "X" : "O";
   setState(arr);
   setValue(!value);
   }

   const button = () =>{
   setState(Array(9).fill(null));
    setValue(true);
   }

  return (
    winner()?<>{winner()} is the winner{" "}
    <button onClick={button} style={{margin : "10px" ,padding : "10px"}}>Play Again</button>
    </>:
    <>        
    <div className='board-container'>
        <h1>Player {value?"X":"O"}  will move</h1>
        <div className="row">
           <Square onclick = {()=>handleClick(0)} value = {state[0]}/>
           <Square onclick = {()=>handleClick(1)} value = {state[1]}/>
           <Square onclick = {()=>handleClick(2)} value = {state[2]}/>
        </div>
        <div className="row">
           <Square onclick ={()=>handleClick(3)} value = {state[3]}/>
           <Square onclick ={()=>handleClick(4)} value = {state[4]}/>
           <Square onclick ={()=>handleClick(5)} value = {state[5]}/>           
        </div>
        <div className="row">
           <Square onclick ={()=>handleClick(6)} value = {state[6]}/>
           <Square onclick ={()=>handleClick(7)} value = {state[7]}/>
           <Square onclick ={()=>handleClick(8)} value = {state[8]}/>
        </div>
    </div>
    </>
  )
}

export default Board