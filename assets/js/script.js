let mark = document.getElementById("mark");
let chats = document.querySelectorAll(".chat-box-content")
let ticks = document.querySelectorAll(".unmarked")
mark.addEventListener("click", function(){
    chats.forEach(function(chat) {
        chat.classList.add("chat-box-blue")
    })
    ticks.forEach(function(tick){
        tick.classList.replace('unmarked', 'marked')
    })
})