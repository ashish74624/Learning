const socket = io('ws://localhost:3001')

const activity = document.querySelector('.activity');
const msgInput = document.querySelector('input')

function sendMessage(e) {
    e.preventDefault()
    if (msgInput.value) {
        socket.emit('message', msgInput.value) // client emits(sends) the msg to the server
        msgInput.value = ""
    }
    msgInput.focus()
}

document.querySelector('form')
    .addEventListener('submit', sendMessage)

// Listen for messages 
socket.on("message", (data) => {
    activity.textContent=""
    const li = document.createElement('li')
    li.textContent = data
    document.querySelector('ul').appendChild(li)
})

msgInput.addEventListener('keypress',()=>{
    socket.emit("activity", socket.id.subString(0,5))//Sends(emits) your activity to the server
})

let activityTimer;
socket.on("activity",(name)=>{
    activity.textContent = `${name} is typing...`;

    //Clear after 3 seconds
    clearTimeout(activityTimer);
    activityTimer= setTimeout(()=>{
        activity.textContent=""
    },3000)
})