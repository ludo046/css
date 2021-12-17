(() => {

    const container = document.getElementById('calculatrice');
    container.className = `calculatrice`;

    const screen = document.createElement('div');
    screen.className = `calculatrice_screen`;

    const buttons = document.createElement('div');
    buttons.className = `calculatrice_buttons`;

    container.appendChild(screen);
    container.appendChild(buttons);

    const buttonValues = ["C", "()", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "back", "0", ".", "="];

    buttonValues.map((element) => {
        const button = document.createElement('button');
        button.className = `calculatrice_buttons_button`;
        button.textContent = `${element}`;
        buttons.appendChild(button);
    });

    const toDisplay = document.getElementsByClassName('calculatrice_buttons_button');
    for (let element of toDisplay) {
        calculatriceEvent(element, 'click');
    }

    function calculatriceEvent(domElement, eventType) {
        domElement.addEventListener(`${eventType}`, (e) => {
            let elementType;
            eventType === "keydown" ? elementType = e.key : elementType = domElement.textContent;
            if (
                elementType === "1" ||
                elementType === "2" ||
                elementType === "3" ||
                elementType === "4" ||
                elementType === "5" ||
                elementType === "6" ||
                elementType === "7" ||
                elementType === "8" ||
                elementType === "9" ||
                elementType === "0" ||
                elementType === "(" ||
                elementType === ")" ||
                elementType === "()" ||
                elementType === "/" ||
                elementType === "*" ||
                elementType === "%" ||
                elementType === "-" ||
                elementType === "+" ||
                elementType === "." ||
                elementType === "Enter" ||
                elementType === "=" ||
                elementType === "Backspace" ||
                elementType === "back" ||
                elementType === "Delete" ||
                elementType === "C"
            ) {
                let lastElement = "";
                let firstElement = "";
                let open = +0;
                let close = +0;
                for (const element of screen.textContent) {
                    if (element === "(") {
                        open++;
                    } else if (element === ")") {
                        close++;
                    }
                    if (firstElement === "") {
                        firstElement = element;
                    }
                    lastElement = element;
                }
                if (
                    elementType === "(" &&
                    firstElement !== "" &&
                    lastElement !== "(" &&
                    lastElement !== "/" &&
                    lastElement !== "*" &&
                    lastElement !== "%" &&
                    lastElement !== "-" &&
                    lastElement !== "+"
                ) {
                    screen.textContent += "*(";
                } else if (elementType === "Enter" || elementType === "=") {
                    if (
                        lastElement === "+" ||
                        lastElement === "-" ||
                        lastElement === "*" ||
                        lastElement === "%" ||
                        lastElement === "/"
                    ) {
                        screen.textContent = eval((screen.textContent).slice(0, -1));
                    } else if (open > close) {
                        toAdd = open - close;
                        for (i = 0; i < toAdd; i++) {
                            if (lastElement === '(') {
                                screen.textContent += "1)";
                                lastElement="null"
                            } else {
                                screen.textContent += ")";
                            }
                        }
                        screen.textContent = eval(screen.textContent);
                    } else {
                        screen.textContent = eval(screen.textContent);
                    }
                } else if (elementType === "Delete" || elementType === "C") {
                    screen.textContent = "";
                } else if (elementType === "()") { // parentheses ()
                    if (
                        lastElement === "0" && open > close ||
                        lastElement === "1" && open > close ||
                        lastElement === "2" && open > close ||
                        lastElement === "3" && open > close ||
                        lastElement === "4" && open > close ||
                        lastElement === "5" && open > close ||
                        lastElement === "6" && open > close ||
                        lastElement === "7" && open > close ||
                        lastElement === "8" && open > close ||
                        lastElement === "9" && open > close ||
                        lastElement === ")" && open > close
                    ) {
                        screen.textContent += ")";
                    } else {
                        if (
                            lastElement !== "/" &&
                            lastElement !== "*" &&
                            lastElement !== "%" &&
                            lastElement !== "-" &&
                            lastElement !== "+" &&
                            lastElement !== "(" &&
                            firstElement !== ""
                        ) {
                            screen.textContent += "*(";
                        } else {
                            screen.textContent += "(";
                        }
                    }
                } else if (
                    elementType === ")" && firstElement === "" ||
                    elementType === ")" && open <= close ||
                    elementType === "%" && lastElement === "*" ||
                    elementType === "%" && lastElement === "/" ||
                    elementType === "%" && lastElement === "-" ||
                    elementType === "%" && lastElement === "+" ||
                    elementType === "%" && lastElement === "%" ||
                    elementType === "%" && lastElement === "(" ||
                    elementType === "%" && firstElement === "" ||
                    elementType === "/" && lastElement === "/" ||
                    elementType === "/" && lastElement === "*" ||
                    elementType === "/" && lastElement === "-" ||
                    elementType === "/" && lastElement === "+" ||
                    elementType === "/" && lastElement === "%" ||
                    elementType === "/" && lastElement === "(" ||
                    elementType === "/" && firstElement === "" ||
                    elementType === "*" && lastElement === "/" ||
                    elementType === "*" && lastElement === "%" ||
                    elementType === "*" && lastElement === "*" ||
                    elementType === "*" && lastElement === "-" ||
                    elementType === "*" && lastElement === "+" ||
                    elementType === "*" && lastElement === "(" ||
                    elementType === "*" && firstElement === "" ||
                    elementType === "-" && lastElement === "/" ||
                    elementType === "-" && lastElement === "*" ||
                    elementType === "-" && lastElement === "-" ||
                    elementType === "-" && lastElement === "+" ||
                    elementType === "+" && lastElement === "/" ||
                    elementType === "+" && lastElement === "*" ||
                    elementType === "+" && lastElement === "-" ||
                    elementType === "+" && lastElement === "+" ||
                    elementType === "." && lastElement === "."
                ) {
                    console.log('no entry');
                }
                else if (elementType === "Backspace" || elementType === "back") {
                    if (firstElement !== "") {
                        screen.textContent = (screen.textContent).slice(0, -1);
                    }
                } else if (
                    lastElement === ')' && elementType === "0" ||
                    lastElement === ')' && elementType === "1" ||
                    lastElement === ')' && elementType === "2" ||
                    lastElement === ')' && elementType === "3" ||
                    lastElement === ')' && elementType === "4" ||
                    lastElement === ')' && elementType === "5" ||
                    lastElement === ')' && elementType === "6" ||
                    lastElement === ')' && elementType === "7" ||
                    lastElement === ')' && elementType === "8" ||
                    lastElement === ')' && elementType === "9"
                ) {
                    screen.textContent += `*${elementType}`;
                } else if (lastElement === '(' && elementType === ')') {
                    screen.textContent += `1${elementType}`;
                }
                else {
                    screen.textContent += elementType;
                }
            }
        });
    }
    calculatriceEvent(document, 'keydown');
})();

    /*     for (let element of toDisplay) {
            element.addEventListener('click', () => {
                let lastElement;
                let firstElement = "";
                let open = +0;
                let close = +0;
    
                for (const letter of screen.textContent) {
                    if (letter === "(") {
                        open++;
                    } else if (letter === ")") {
                        close++;
                    }
                    if (firstElement === "") {
                        firstElement = element;
                    }
    
                    lastElement = letter;
                }
    
                if (element.textContent !== "=" && element.textContent !== "C" && element.textContent !== "()" && element.textContent !== "/" && element.textContent !== "*" && element.textContent !== "back" && element.textContent !== "%" && element.textContent !== ".") {
                    if (
                        lastElement === ')' && element.textContent === "0" ||
                        lastElement === ')' && element.textContent === "1" ||
                        lastElement === ')' && element.textContent === "2" ||
                        lastElement === ')' && element.textContent === "3" ||
                        lastElement === ')' && element.textContent === "4" ||
                        lastElement === ')' && element.textContent === "5" ||
                        lastElement === ')' && element.textContent === "6" ||
                        lastElement === ')' && element.textContent === "7" ||
                        lastElement === ')' && element.textContent === "8" ||
                        lastElement === ')' && element.textContent === "9"
                    ) {
                        screen.textContent += `*${element.textContent}`;
                    } else {
                        screen.textContent += element.textContent;
                    }
                }
                else {
                    if (element.textContent === "=") { // equal =
                        if (
                            lastElement === "+" ||
                            lastElement === "-" ||
                            lastElement === "*" ||
                            lastElement === "%" ||
                            lastElement === "/"
                        ) {
                            screen.textContent = eval((screen.textContent).slice(0, -1));
                        } else if (open > close) {
                            toAdd = open - close;
                            for (i = 0; i < toAdd; i++) {
                                screen.textContent += ")";
                            }
                            screen.textContent = eval(screen.textContent);
                        } else {
                            screen.textContent = eval(screen.textContent);
                        }
                    } else if (element.textContent === "()") { // parentheses ()
                        if (
                            lastElement === "0" && open > close ||
                            lastElement === "1" && open > close ||
                            lastElement === "2" && open > close ||
                            lastElement === "3" && open > close ||
                            lastElement === "4" && open > close ||
                            lastElement === "5" && open > close ||
                            lastElement === "6" && open > close ||
                            lastElement === "7" && open > close ||
                            lastElement === "8" && open > close ||
                            lastElement === "9" && open > close ||
                            lastElement === ")" && open > close
                        ) {
                            screen.textContent += ")";
                        } else {
                            if (
                                lastElement !== "/" &&
                                lastElement !== "*" &&
                                lastElement !== "%" &&
                                lastElement !== "-" &&
                                lastElement !== "+" &&
                                lastElement !== "(" &&
                                firstElement !== ""
                            ) {
                                screen.textContent += "*(";
                            } else {
                                screen.textContent += "(";
                            }
                        }
                    } else if (
                        element.textContent === ")" && firstElement === "" ||
                        element.textContent === ")" && open <= close ||
                        element.textContent === "%" && lastElement === "*" ||
                        element.textContent === "%" && lastElement === "/" ||
                        element.textContent === "%" && lastElement === "-" ||
                        element.textContent === "%" && lastElement === "+" ||
                        element.textContent === "%" && lastElement === "%" ||
                        element.textContent === "/" && lastElement === "/" ||
                        element.textContent === "/" && lastElement === "*" ||
                        element.textContent === "/" && lastElement === "-" ||
                        element.textContent === "/" && lastElement === "+" ||
                        element.textContent === "/" && firstElement === "" ||
                        element.textContent === "*" && lastElement === "/" ||
                        element.textContent === "*" && lastElement === "*" ||
                        element.textContent === "*" && lastElement === "-" ||
                        element.textContent === "*" && lastElement === "+" ||
                        element.textContent === "*" && firstElement === "" ||
                        element.textContent === "-" && lastElement === "/" ||
                        element.textContent === "-" && lastElement === "*" ||
                        element.textContent === "-" && lastElement === "-" ||
                        element.textContent === "-" && lastElement === "+" ||
                        element.textContent === "+" && lastElement === "/" ||
                        element.textContent === "+" && lastElement === "*" ||
                        element.textContent === "+" && lastElement === "-" ||
                        element.textContent === "+" && lastElement === "+" ||
                        element.textContent === "." && lastElement === "."
                    ) {
                        console.log('no entry');
                    } else if (element.textContent === "back") {
                        if (firstElement !== "") {
                            screen.textContent = (screen.textContent).slice(0, -1);
                        }
                    } else if (element.textContent === 'C') { // delete current display
                        screen.textContent = "";
                    } else {
                        screen.textContent += element.textContent;
                    }
                }
            });
        } */

    /*         document.addEventListener("keydown", (e) => {
                if (
                    e.key === "1" ||
                    e.key === "2" ||
                    e.key === "3" ||
                    e.key === "4" ||
                    e.key === "5" ||
                    e.key === "6" ||
                    e.key === "7" ||
                    e.key === "8" ||
                    e.key === "9" ||
                    e.key === "0" ||
                    e.key === "(" ||
                    e.key === ")" ||
                    e.key === "/" ||
                    e.key === "*" ||
                    e.key === "%" ||
                    e.key === "-" ||
                    e.key === "+" ||
                    e.key === "." ||
                    e.key === "Enter" ||
                    e.key === "Backspace" ||
                    e.key === "Delete"
                ) {
                    let lastElement = "";
                    let firstElement = "";
                    let open = +0;
                    let close = +0;
        
                    for (let element of screen.textContent) {
                        if (element === "(") {
                            open++;
                        } else if (element === ")") {
                            close++;
                        }
        
                        if (firstElement === "") {
                            firstElement = element;
                        }
        
                        lastElement = element;
                    }
        
                    if (
                        e.key === "(" &&
                        firstElement !== "" &&
                        lastElement !== "(" &&
                        lastElement !== "/" &&
                        lastElement !== "*" &&
                        lastElement !== "%" &&
                        lastElement !== "-" &&
                        lastElement !== "+"
                    ) {
                        screen.textContent += "*(";
                    } else if (e.key === "Enter") {
                        if (
                            lastElement === "+" ||
                            lastElement === "-" ||
                            lastElement === "*" ||
                            lastElement === "%" ||
                            lastElement === "/"
                        ) {
                            screen.textContent = eval((screen.textContent).slice(0, -1));
                        } else if (open > close) {
                            toAdd = open - close;
                            for (i = 0; i < toAdd; i++) {
                                screen.textContent += ")";
                            }
                            screen.textContent = eval(screen.textContent);
                        } else {
                            screen.textContent = eval(screen.textContent);
                        }
                    } else if (e.key === "Delete") {
                        screen.textContent = "";
                    } else if (
                        e.key === ")" && firstElement === "" ||
                        e.key === ")" && open <= close ||
                        e.key === "%" && lastElement === "*" ||
                        e.key === "%" && lastElement === "/" ||
                        e.key === "%" && lastElement === "-" ||
                        e.key === "%" && lastElement === "+" ||
                        e.key === "%" && lastElement === "%" ||
                        e.key === "/" && lastElement === "/" ||
                        e.key === "/" && lastElement === "*" ||
                        e.key === "/" && lastElement === "-" ||
                        e.key === "/" && lastElement === "+" ||
                        e.key === "/" && firstElement === "" ||
                        e.key === "*" && lastElement === "/" ||
                        e.key === "*" && lastElement === "*" ||
                        e.key === "*" && lastElement === "-" ||
                        e.key === "*" && lastElement === "+" ||
                        e.key === "*" && firstElement === "" ||
                        e.key === "-" && lastElement === "/" ||
                        e.key === "-" && lastElement === "*" ||
                        e.key === "-" && lastElement === "-" ||
                        e.key === "-" && lastElement === "+" ||
                        e.key === "+" && lastElement === "/" ||
                        e.key === "+" && lastElement === "*" ||
                        e.key === "+" && lastElement === "-" ||
                        e.key === "+" && lastElement === "+" ||
                        e.key === "." && lastElement === "."
                    ) {
                        console.log('no entry');
                    }
                    else if (e.key === "Backspace") {
                        if (firstElement !== "") {
                            screen.textContent = (screen.textContent).slice(0, -1);
                        }
                    } else if (
                        lastElement === ')' && e.key === "0" ||
                        lastElement === ')' && e.key === "1" ||
                        lastElement === ')' && e.key === "2" ||
                        lastElement === ')' && e.key === "3" ||
                        lastElement === ')' && e.key === "4" ||
                        lastElement === ')' && e.key === "5" ||
                        lastElement === ')' && e.key === "6" ||
                        lastElement === ')' && e.key === "7" ||
                        lastElement === ')' && e.key === "8" ||
                        lastElement === ')' && e.key === "9"
                    ) {
                        screen.textContent += `*${e.key}`;
                    }
                    else {
                        screen.textContent += e.key;
                    }
                }
            }); */


