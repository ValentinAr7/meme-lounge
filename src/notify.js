const container = document.getElementById('errorBox');
const span = container.querySelector('span');

export function notify(message){
    span.textContent = message
    container.style.display = 'block'
}