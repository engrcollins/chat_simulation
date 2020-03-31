var msgBlock = blockClass = myID = "";
msgBlock_1= 'Yea....ok'
msgBlock_2 = 'You making all these promises. You say you want me.You tell me say you need me bad oo, you know I like it. Controllaaa';
msg_3 = 'Controllaaa'
msg_4 = 'You give me mind. Controllaa'
var speed;
var i = 0
$(document).ready(function(){
    //makeItRain('cole', msgBlock_1, 'demo1');
    makeItRain('cole', msgBlock_1, 'demo1', 200);
    makeItRain('ike cole', msgBlock_2, 'demo2', 300);
    setTimeout(() => {
        makeItRain('ike cole', msgBlock_2, 'demo2', 300);
    }, 2200)



})
    /*var b_1 = setTimeout(() => {
        makeItRain('cole', msgBlock_1, 'demo1', 2000);
         clearTimeout(b_2)
     

    }, 2000);*/
    //makeItRain('ike cole', msgBlock_1, 'demo');

    //makeItRain('cole ike', msgBlock_1, 'demo');
    //makeItRain('cole', msgBlock_1, 'demo');
    function makeItRain(blockClass, msgBlock, myID, speed) {
        var content = document.getElementById('content')
            var blockDiv = document.createElement("div")
            var image = document.createElement('img')
            var msgTime = document.createElement('span')
            var msgPara = document.createElement('p')
            blockDiv.setAttribute('class', blockClass)
            msgTime.setAttribute('class', "time-right")
            msgPara.setAttribute('id', myID)
            if (blockClass == 'cole'){
                image.setAttribute("src", "./images/cole11.jpg")
                image.setAttribute('alt',"Avatar1")
            }else{
                image.setAttribute("src", "./images/ike11.jpg")
                image.setAttribute('alt',"Avatar2")
            }
            console.log(msgBlock)
            image.style.width = '100%'
            content.appendChild(blockDiv);
            typeWriter()
            function typeWriter() {
                blockDiv.appendChild(image)
                blockDiv.append(msgTime)
                msgTime.textContent = '11:00'
                blockDiv.append(msgPara)
                x = document.getElementById(myID)
                    if (i< msgBlock.length){
                        x.innerHTML += msgBlock.charAt(i);
                        i++;
                        setTimeout(typeWriter, speed);
                    }
                }
            }