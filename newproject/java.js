var counter = 1;
    setInterval(function(){
        document.getElementById('r' + counter ) .checked = true ;
        counter++;
        if(counter > 3){
            counter = 1;
        }
    }, 5000);
    