let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML === '=') {
            if (string.includes("%")) {
                let num1 = string.split("%");
                string = (num1[1] * num1[0]) / 100;
                document.querySelector('input').value = string;
            } else {
                string = eval(string);
                document.querySelector('input').value = string;
            }
        } else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
        if (e.target.innerHTML === 'AC') {
            string = "";
            document.querySelector('input').value = string;
        }
    });
});

document.addEventListener("keydown", (e) => {
    if (!isNaN(parseInt(e.key)) || e.key === '.' || e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/' || e.key === '%') {
        string += e.key;
        document.querySelector('input').value = string;
    }
    if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        if (string.includes("%")) {
            let num1 = string.split("%");
            string = (num1[1] * num1[0]) / 100;
            document.querySelector('input').value = string;
        } else {
            string = eval(string);
            document.querySelector('input').value = string;
        }
    }
    if (e.key === "Escape" || e.key === "Backspace") {
        string = "";
        document.querySelector('input').value = string;
    }

    if (!isNaN(parseInt(e.key))) {
        let num = (e.key);
        let btn = document.querySelector(`.button${num}`);
        if (btn) {
            btn.style.boxShadow = "0 0 2px rgb(127, 152, 2)";
            btn.style.transform = "translatey(7px)";

            btn.style.color = "yellow";
            setTimeout(function() {
                btn.style.boxShadow = "";
                btn.style.transform = "";
                btn.style.color = "rgb(134, 134, 7)";
            }, 100);
        }
    }
});

