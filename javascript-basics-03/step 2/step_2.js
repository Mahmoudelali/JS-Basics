const show = document.getElementById('show')
const hide = document.getElementById('hide')
const text = document.getElementById('texte')


function display(element , hide_btn , show_btn) {
    hide_btn.onclick = () => {
        element.style.display = 'none';
    }
    show_btn.onclick = () => {
        text.style.display = 'block';
    }
}

display(text , hide , show)