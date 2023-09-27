const button = document.querySelector('button');

function clickHandler(message:string) {
    debugger
    console.log("Clicked"+message);
}

if (button) {
    button.addEventListener('click', clickHandler.bind(null,"test"));
}