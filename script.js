
        let isAutoPlaying = false;
        let intervalId;

        function autoPlay(){
            if(!isAutoPlaying){
                intervalId = setInterval(function(){
                const playerMove = pickCompMove();
                playGame(playerMove);
                },1000);
                isAutoPlaying = true;
            }
            else{
                clearInterval(intervalId);
                isAutoPlaying = false;
            }
        }




        let result = '';
        let userMove = '';
        let computerMove = '';

            //can only use them in javasc
            let score = JSON.parse(localStorage.getItem('score')) || {
                    wins :0, 
                    losses:0, 
                    ties :0
                };

            updateScoreElement();

            // if(!score){
            //     score ={
            //         wins :0, losses:0, ties :0
            //     };
            // }

            function res(){
                document.querySelector('.js-result').innerHTML = `${result}`;
            }
            function move(userMove,computerMove){
                document.querySelector('.js-move').innerHTML = `You picked ${userMove}. Computer picked ${computerMove}.`;
            }
            
            function playGame(userMove){
                    const computerMove = pickCompMove();
                    let v = 0;
                if(computerMove === 'rock' && userMove === 'scissors'|| computerMove === 'paper' && userMove === 'rock'|| computerMove === 'scissors' && userMove === 'paper'){
                    result = ' ahaaa, better luck next timeee.';
                    v = -1;
                } else if (computerMove === 'scissors' && userMove === 'scissors' || computerMove === 'rock' && userMove === 'rock' || computerMove === 'paper' && userMove === 'paper'){
                    result = 'Tie-Tie';
                    v = 0;
                } else if (computerMove === 'paper' && userMove === 'scissors'|| computerMove === 'scissors' && userMove === 'rock'|| computerMove === 'rock' && userMove === 'paper'){
                    result = 'Hurrayyy, you won!!!';
                    v = 1;
                }

                if( v == 1){
                    score.wins+=1;

                }else if( v == -1){
                    score.losses+=1;
                }else if(v==0){
                    score.ties+=1;
                }

                localStorage.setItem('score',JSON.stringify(score));
                updateScoreElement();
                
                res();
                move(userMove,computerMove);

            }

            function updateScoreElement(){
                document.querySelector('.js-score').innerHTML = `Wins : ${score.wins},  Losses : ${score.losses}, Tie : ${score.ties}`;
            }

            function pickCompMove(){
                const RandomNo = Math.random();
                let computerMove = '';

                if(RandomNo >= 0 && RandomNo < 1/3){
                    computerMove = 'rock';
                } else if(RandomNo>=1/3 && RandomNo <2/3 ){
                    computerMove = 'paper';
                }else{
                    computerMove = 'scissors';
                }

                return computerMove;
            }
