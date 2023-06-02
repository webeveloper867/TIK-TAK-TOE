

    let btn0 = document.getElementById("btn0")
    let btn1 = document.getElementById("btn1")
    let btn2 = document.getElementById("btn2")

    let resetBtn = document.getElementById("reset");

    let sound1 = new Audio("sound1.wav");
    let sound2 = new Audio("sound2.mp3");

    let x_number = true;

    let player = document.getElementById("player");
    player.textContent = "Player X turn";

    resetBtn.addEventListener("click", () =>{
        reset();
    })


    btn0.addEventListener("click", () =>{
        sound2.play();
        if(x_number){
            sound2.play();
            player.textContent = "Player O turn";
            btn0.innerHTML = "X";
            x_number = false
            Winner()
        }
        else{
            sound2.play();
            player.textContent = "Player X turn";
            btn0.innerHTML = "O";
            x_number = true;
            Winner()
        }

        x_number != x_number;
        btn0.disabled = true;
    })

    btn1.addEventListener("click", () =>{
        sound2.play();
        if(x_number){
            sound2.play();
            player.textContent = "Player O turn";
            btn1.innerHTML = "X";
            x_number = false
            Winner()
        }
        else{
            sound2.play();
            player.textContent = "Player X turn";
            btn1.innerHTML = "O";
            x_number = true;
            Winner()
        }
        x_number != x_number;
        btn1.disabled = true;
    })

    btn2.addEventListener("click", () =>{
        sound2.play();
        if(x_number){
            sound2.play();
            player.textContent = "Player O turn";
            btn2.innerHTML = "X";
            x_number = false
            Winner()
        }
        else{
            sound2.play();
            player.textContent = "Player X turn";
            btn2.innerHTML = "O";
            x_number = true;
            Winner()
        }
        
        x_number != x_number;
        btn2.disabled = true;
    })
    let btn3 = document.getElementById("btn3")
    let btn4 = document.getElementById("btn4")
    let btn5 = document.getElementById("btn5")
    btn3.addEventListener("click", () =>{
        sound2.play();
        if(x_number){
            sound2.play();
            player.textContent = "Player O turn";
            btn3.innerHTML = "X";
            x_number = false
            Winner()
        }
        else{
            sound2.play();
            player.textContent = "Player X turn";
            btn3.innerHTML = "O";
            x_number = true;
            Winner()
        }
        x_number != x_number;
        btn3.disabled = true;
    })
    
    btn4.addEventListener("click", () =>{
        sound2.play();
        if(x_number){
            sound2.play();
            player.textContent = "Player O turn";
            btn4.innerHTML = "X";
            x_number = false
            Winner()
        }
        else{
            sound2.play();
            player.textContent = "Player X turn";
            btn4.innerHTML = "O";
            x_number = true;
            Winner()
        }
        x_number != x_number;
        btn4.disabled = true;
    })
    btn5.addEventListener("click", () =>{
        sound2.play();
        if(x_number){
            sound2.play();
            player.textContent = "Player O turn";
            btn5.innerHTML = "X";
            x_number = false
            Winner()
        }
        else{
            sound2.play();
            player.textContent = "Player X turn";
            btn5.innerHTML = "O";
            x_number = true;
            Winner()
        }
        x_number != x_number;
        btn5.disabled = true;
    })
    let btn6 = document.getElementById("btn6")
    let btn7 = document.getElementById("btn7")
    let btn8 = document.getElementById("btn8")

    btn6.addEventListener("click", () =>{
        sound2.play();
        if(x_number){
            sound2.play();
            player.textContent = "Player O turn";
            btn6.innerHTML = "X";
            x_number = false
            Winner()
        }
        else{
            sound2.play();
            player.textContent = "Player X turn";
            btn6.innerHTML = "O";
            x_number = true;
            Winner()
        }
        x_number != x_number;
        btn6.disabled = true;
    
    })

    btn7.addEventListener("click", () =>{
        sound2.play();
        if(x_number){
            sound2.play();
            player.textContent = "Player O turn";
            btn7.innerHTML = "X";
            x_number = false
            Winner()
        }
        else{
            sound2.play();
            player.textContent = "Player X turn";
            btn7.innerHTML = "O";
            x_number = true;
            Winner()
        }
        x_number != x_number;
        btn7.disabled = true;
    })

    btn8.addEventListener("click", () =>{
        sound2.play();
        if(x_number){
            sound2.play();
            player.textContent = "Player O turn";
            btn8.innerHTML = "X";
            x_number = false
            Winner()
        }
        else{
            sound2.play();
            player.textContent = "Player X turn";
            btn8.innerHTML = "O";
            x_number = true;
            Winner()
        }
        x_number != x_number;
        btn8.disabled = true;
    })



    function Winner(){
        
        if(
            // row
            ((btn0.innerHTML == btn1.innerHTML) && (btn0.innerHTML == btn2.innerHTML) && (btn0.innerHTML != "")) ||
            ((btn3.innerHTML == btn4.innerHTML) && (btn3.innerHTML == btn5.innerHTML) && (btn3.innerHTML != "")) ||
            ((btn6.innerHTML == btn7.innerHTML) && (btn6.innerHTML == btn8.innerHTML) && (btn6.innerHTML != "")) ||
            // column
            ((btn0.innerHTML == btn3.innerHTML) && (btn0.innerHTML == btn6.innerHTML) && (btn0.innerHTML != "")) ||
            ((btn1.innerHTML == btn4.innerHTML) && (btn1.innerHTML == btn7.innerHTML) && (btn1.innerHTML != "")) ||
            ((btn2.innerHTML == btn5.innerHTML) && (btn2.innerHTML == btn8.innerHTML) && (btn2.innerHTML != "")) ||
            //diagnol
            ((btn0.innerHTML == btn4.innerHTML) && (btn0.innerHTML == btn8.innerHTML) && (btn0.innerHTML != "")) ||
            ((btn2.innerHTML == btn4.innerHTML) && (btn2.innerHTML == btn6.innerHTML) && (btn2.innerHTML != ""))
            
        ){
            sound1.play()
            if(player.innerHTML == "Player X turn"){
                
                alert("O is Winner")
                reset();
            }
            else if(player.innerHTML == "Player O turn"){
                
                alert("X is Winner")
                reset();
            }
        }else if(
            (btn0.innerHTML != "") &&
            (btn1.innerHTML != "") &&
            (btn2.innerHTML != "") &&
            (btn3.innerHTML != "") &&
            (btn4.innerHTML != "") &&
            (btn5.innerHTML != "") &&
            (btn6.innerHTML != "") &&
            (btn7.innerHTML != "") &&
            (btn8.innerHTML != "")
        ){
            alert("Alka draw shu")
            reset();
        }

    }

    function reset(){
        sound1.play();
        btn0.innerHTML = "";
        btn1.innerHTML = "";
        btn2.innerHTML = "";
        btn3.innerHTML = "";
        btn4.innerHTML = "";
        btn5.innerHTML = "";
        btn6.innerHTML = "";
        btn7.innerHTML = "";
        btn8.innerHTML = "";
    }


