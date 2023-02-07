const form = document.querySelector('form');
const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');

const directions = document.querySelectorAll('input[name="direction"]');

const css_code = document.querySelector('#css_code')


const bgGenerator = () => {

    let dirValue;

    for (const direction of directions) {
        if (direction.checked) {
            dirValue = direction.value;
        }
    }

    document.body.style.backgroundImage = `linear-gradient(${dirValue}, ${color1.value}, ${color2.value})`;
    css_code.textContent = `background: linear-gradient(${dirValue}, ${color1.value}, ${color2.value});`
}

form.addEventListener('change', bgGenerator);

