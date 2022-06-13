let screen = document.querySelector('.output')

let buttons = Array.from(document.getElementsByClassName('button'))

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'AC':
                screen.innerText = '';
                break;
            case '←':
                if (screen.innerText) {
                    screen.innerText = screen.innerText.slice(0, -1);
                }
                break;
            case '=':
                try {
                    screen.innerText = eval(screen.innerText)
                } catch {
                    screen.innerText = 'ERROR'
                }
                break;
            default:
                screen.innerText += e.target.innerText;
        }
    })
})