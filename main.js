const fmess = document.getElementById('form-message')
const fbutt = document.getElementById('form-button')

const xbutt = document.getElementById('x-button')

const sdelay = document.getElementById('setting-delay')

const curMessText = document.getElementById('current-message')

let messageDisplayDelay = 2.5

let allMessageArray = ['Default message 123', 'I wanna some pizza', 'Free coffee!!!']
let displayingMessageArray = allMessageArray;

let currentMessage = ''
let currentMessageID = 0;

sdelay.value = messageDisplayDelay

displayNextMessage()
updateMessageList()

xbutt.onclick = function(){
    for(let i = 0; i < displayingMessageArray.length; i++){
        if(currentMessage === displayingMessageArray[i]){
            displayingMessageArray.splice(i, 1)
            curMessText.innerHTML = ''
            break;
        }
    }
}

fbutt.onclick = function(){
    displayingMessageArray.push(fmess.value)
}

async function displayNextMessage(){

    messageDisplayDelay = sdelay.value

    if(currentMessageID >= displayingMessageArray.length){
        currentMessageID = 0;
    }

    currentMessage = displayingMessageArray[currentMessageID]

    curMessText.innerHTML === undefined ? curMessText.innerHTML = 'No allowed message' : curMessText.innerHTML = currentMessage

    console.log(currentMessageID)
    currentMessageID++
    await delay(messageDisplayDelay)
    displayNextMessage()
}

async function updateMessageList(){
    const _allDiv = document.getElementById('all-div')

    _allDiv.innerHTML = ''

    for(let i = 0; i < allMessageArray.length; i++){
        let _pmess = document.createElement('p')
        let _pmessContent = document.createTextNode(allMessageArray[i])
        
        _pmess.appendChild(_pmessContent)
        _pmess.classList = 'message'

        _allDiv.appendChild(_pmess)
    }
    await delay(messageDisplayDelay)
    updateMessageList()
}

function delay(time){
    return new Promise(resolve => setTimeout(resolve, time*1000));
}