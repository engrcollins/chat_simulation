var t;
function eventTime() {
    //time variables declarations
    var d = new Date();
    var mins = d.getMinutes();
    var hrs = d.getHours();
    var hours ="";
	var minutes="";
    var meridian ="";
    
    //time presentation logic
    if (hrs > 12) {
		hours = hrs - 12;
		meridian = "pm";	
	} else {
		hours = hrs;
		if(hours == 12){
		  meridian = "pm";
		}else{
		  meridian = "am";
		}
	}
	if (hours < 10) {
		hours = '0' + hours;
	}		
	if (mins < 10) {
		minutes= '0' + mins;
	} else {
		minutes = mins;
	}

    //time presentation
    t = `${hours}:${minutes}${meridian}`
  }

  //Automatic scroll


  
let msgList = [
    {
        singer: "cole",
        lyrics: "Yea...ok...",
        timer: 22
    },
    {
        singer: "ike",
        lyrics: "You making all these promises. You say you want me. You tell me say you need me bad oo, you know I like it. Controllaaaaaaaa.",
        timer: 135
    },
    {
        singer: "cole",
        lyrics: "Controllaaaaaaaa",
        timer: 26
    },
    {
        singer: "ike",
        lyrics: "You give me mind. Controllaaaaaaaa",
        timer: 45
    },
    {
        singer: "cole",
        lyrics: "Controlla........",
        timer: 25
    },
    {
        singer: "ike",
        lyrics: "A'ight, so am telling telling everybody I know I know, say me I am crazy for youuu, they say I too like fine thing oo, you know I like that kind thing oo",
        timer: 173
    },
    {
        singer: "ike",
        lyrics: "Take me take me any where I would go nobody got me like you do no no no, me I don find that thing ooo...me I can't let that thing go I'd lie for you...I think I'd die for you...probably cry for youu if you want I can dance for youu...controllaa......Controllaa........",
        timer: 298
    },
    {
        singer: "cole",
        lyrics: "Controllaaaa....Aaih... But you can't just diss and come tell man sorry",
        timer: 81
    },
    {
        singer: "ike",
        lyrics: "I go, I go do you right baby boy no worry",
        timer: 51
    },
    {
        singer: "cole",
        lyrics: "Nah, It don't work like that when you love somebody",
        timer: 61
    },
    {
        singer: "ike",
        lyrics: "Ah ah ah ah… Don't think about the things goin wrong. Think about you & me having fun yeeee....",
        timer: 107
    },
    {
        singer: "cole",
        lyrics: "That’s why I neeeeed...all the energy that you bring to me",
        timer: 70
    },
    {
        singer: "ike",
        lyrics: "(You for my life boo)",
        timer: 31
    },
    {
        singer: "cole",
        lyrics: "But when it comes to you, youuuuuuu...I think I'd lie for you",
        timer: 71
     },
    {
        singer: "ike",
        lyrics: "I think I'd cry for you", 
        timer:40
    },
    {
        singer: "cole",
        lyrics: "I think I'd die for you",
        timer: 35
    },
    {
        singer: "ike",
        lyrics: "Me I go fight for you. Do things when you want me to",
        timer: 25
    },
    {
        singer: "cole",
        lyrics: "Like controlla, controlla, yeah. Like controlla, controlla, yeah",
        timer: 50
    }
];


function playAudio() {
    var p = document.getElementById(myAudio)
    p.play();
}

blockID_1 = 'cole_1'
blockID_2 = 'ike_1'
var typingSpeed = 80;
var x;
var msg;
var num=0;
var singer;

  //messaging
function sendMessage(msg){
    x = document.getElementById("typist")
    function clearTypist(){
        x.innerHTML = "";
    }
    if (num < msgList.length) {
        msg = msgList[num].lyrics
        var txt = msg; 
        var block;
        clearTypist();
        var i = 0;
        typeWriter();
        function typeWriter(){
                if (i < txt.length) {
                    x.innerHTML += txt.charAt(i);
                    i++;
                    setTimeout(typeWriter, typingSpeed);
                }else{
                    var singer = msgList[num].singer
                    console.log(msg)
                    console.log(i)
                    var msgArea = document.getElementById('msgArea')
                    var blockDiv = document.createElement("div")
                    var image = document.createElement('img')
                    var msgPara = document.createElement('p')
                    var msgTime = document.createElement('span')
                    var link = document.createElement('a')
                    blockDiv.id =`${singer}_${num}`
                    block = blockDiv.id
                    if(singer == "cole"){
                        blockDiv.className = 'cole ike'
                        msgTime.className = 'time-right'
                        image.setAttribute("src", "./images/ike11.jpg")
                        image.setAttribute("class", "left")
                    }
                    if(singer == 'ike'){
                        blockDiv.className = 'cole'
                        msgTime.className = 'time-left'
                        image.setAttribute("src", "./images/cole11.jpg")
                        image.setAttribute("class", "right")
                    }
                    msgArea.append(blockDiv);
                    blockDiv.append(image)
                    blockDiv.append(msgTime)
                    eventTime()
                    msgTime.append(t)
                    link.setAttribute("href", `#${singer}_${num-1}` )
                    blockDiv.append(link)
                    blockDiv.append(msgPara)
                    y = document.getElementById(block);
                    z = y.lastChild
                    function emojilize(){
                        var list = ['&#128515', '&#128526'];
                        emoji = document.createElement('span')
                        emoji.innerHTML = list[1]
                        emoticon = emoji.innerHTML
                        console.log(emoticon)
                        x.innerHTML = x.innerHTML + emoticon
                    }
                    emojilize();
                    if("num >= 4"){
                        link.click();
                    }
                    z.textContent = x.innerHTML;
                    $("#scroller").animate({ scrollTop: 2000000 }, "slow");
                }
            } 
            num++;
            setTimeout(sendMessage, typingSpeed*msgList[num-1].timer);
        }else{
            clearTypist(); 
        }
}