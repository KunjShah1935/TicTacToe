let btn1=document.querySelector("#cell1");
let btn2=document.querySelector("#cell2");
let btn3=document.querySelector("#cell3");
let btn4=document.querySelector("#cell4");
let btn5=document.querySelector("#cell5");
let btn6=document.querySelector("#cell6");
let btn7=document.querySelector("#cell7");
let btn8=document.querySelector("#cell8");
let btn9=document.querySelector("#cell9");
let btn10=document.querySelector("#reset");
let turn='X';
let bool1='True';
let bool2='True';
let bool3='True';
let bool4='True';
let bool5='True';
let bool6='True';
let bool7='True';
let bool8='True';
let bool9='True';
let win = (x,p) => {
    let arr = [
  [1, 2, 3],
  [1, 4, 7],
  [1, 5, 9],
  [4, 5, 6],
  [7, 8, 9],
  [2, 5, 8],
  [3, 6, 9],
  [3, 5, 7]
];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].every(val => x.includes(val))) {
            alert(`Player ${p} wins!`);
            location.reload();
        }
    }
};
let arr1=[];
let arr1push = (x) => {
    arr1.push(x);
    arr1.sort((a, b) => a - b);
    if (arr1.length >= 3) {
         win(arr1,1);
    }
    if(arr1.length==5){
          alert(`GAME DRAW!`);
        location.reload();
    }
}
let arr2=[];
let arr2push=(x)=>{
    arr2.push(x);
    arr2.sort((a, b) => a - b);
    if (arr2.length >= 3) {
         win(arr2,2);
    }
}

btn1.addEventListener("click",()=>{ 
    if(bool1==='True'){ 
    if(turn==='X'){
        btn1.innerText='X';
        turn='O'
        bool1='False';
        arr1push(1);
    }
    else{
        btn1.innerText='O';
        turn='X';
        bool1='False';
        arr2push(1);
    }}
});

btn2.addEventListener("click",()=>{ 
    if(bool2==='True'){  
    if(turn==='X'){
        btn2.innerText='X';
        turn='O';
        bool2='False';
        arr1push(2);
    }
    else{
        btn2.innerText='O';
        turn='X';
        bool2='False';
        arr2push(2);
    }}
});
btn3.addEventListener("click",()=>{  
    if(bool3==='True'){  
    if(turn==='X'){
        btn3.innerText='X';
        turn='O';
        bool3='False';
        arr1push(3);
    }
    else{
        btn3.innerText='O';
        turn='X';
        bool3='False';
        arr2push(3);
    }}
});
btn4.addEventListener("click",()=>{  
    if(bool4==='True'){  
    if(turn==='X'){
        btn4.innerText='X';
        turn='O';
        bool4='False';
        arr1push(4);
    }
    else{
        btn4.innerText='O';
        turn='X';
        bool4='False';
        arr2push(4);
    }}
});
btn5.addEventListener("click",()=>{  
    if(bool5==='True'){  
    if(turn==='X'){
        btn5.innerText='X';
        turn='O'
        bool5='False';
        arr1push(5);
    }
    else{
        btn5.innerText='O';
        turn='X';
        bool5='False';
        arr2push(5);
    }}
});
btn6.addEventListener("click",()=>{  
    if(bool6==='True'){  
    if(turn==='X'){
        btn6.innerText='X';
        turn='O'
        bool6='False';
        arr1push(6);
    }
    else{
        btn6.innerText='O';
        turn='X';
        bool6='False';
        arr2push(6);
    }}
});
btn7.addEventListener("click",()=>{  
    if(bool7==='True'){  
    if(turn==='X'){
        btn7.innerText='X';
        turn='O'
        bool7='False';
        arr1push(7);
    }
    else{
        btn7.innerText='O';
        turn='X';
        bool7='False';
        arr2push(7);
    }}
});
btn8.addEventListener("click",()=>{  
    if(bool8==='True'){  
    if(turn==='X'){
        btn8.innerText='X';
        turn='O'
        bool8='False';
        arr1push(8);
    }
    else{
        btn8.innerText='O';
        turn='X';
        bool8='False';  
        arr2push(8);
    }}
});
btn9.addEventListener("click",()=>{  
    if(bool9==='True'){  
    if(turn==='X'){
        btn9.innerText='X';
        turn='O'
        bool9='False';
        arr1push(9);
    }
    else{
        btn9.innerText='O';
        turn='X';
        bool9='False';
        arr2push(9);
    }}
});
btn10.addEventListener("click",()=>{location.reload();});
