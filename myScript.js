document.addEventListener('DOMContentLoaded',function(){
    var buttons=document.getElementsByClassName('myButton');

    for(var i=0;i<buttons.length;i++){
        buttons[i].addEventListener('mouseover',function(){
            this.style.backgroundColor='green';
        })

        buttons[i].addEventListener('mouseout',function(){
            this.style.backgroundColor='';
        })
        buttons[i].addEventListener('click',function(){
             this.style.backgroundColor='red';
        })
    }
})