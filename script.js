const Calculator = {
    leftOperand: 0,
    operator: "",
    rightOperand: 0,
    total: 0,

    getLeftOperand() {
        return this.leftOperand;
    },

    getRightOperand() {
        return this.rightOperand;
    },

    getOperator() {
        return this.operator;
    },

    getTotal() {
        return this.total;
    },

    setLeftOperand(num) {
        this.leftOperand = parseInt(num);
    },

    setRightOperand(num) {
        this.rightOperand = parseInt(num);
    },

    setOperator(op) {
        this.operator = op;
    },

    add() {
        this.total = this.leftOperand + this.rightOperand;
    },

    sub() {
        this.total = this.leftOperand - this.rightOperand;
    },

    mult() {
        this.total = this.leftOperand * this.rightOperand;
    },

    divide() {
        if (this.rightOperand == 0) {
            alert("Wow you really though you were slick huh");
            this.clear();
        }
        else {
           this.total = this.leftOperand / this.rightOperand;
        }
    },

    clear() {
        this.leftOperand = 0;
        this.rightOperand = 0;
        this.operator = "";
    },

    calculate(num1, op, num2) {
        this.setLeftOperand(num1);
        this.setRightOperand(num2);
        this.setOperator(op);
    
        console.log(this);

        switch (this.operator) {
            case "+":{
                this.add();
                break;
            }
            case "-":{
                this.sub();
                break;
            }
            case "*":{
                this.mult();
                break;
            }
            case "/":{
                this.divide();
                break;
            }
            default: break; 
        };
        console.log(this);
    }
}

let leftOperand = "";
let rightOperand = "";
let operator = "";
let isLeftOperand = true;
let hasRightOperand = false;
let hasOperator = false;
let hasDot = false;
const calc = Calculator;

const expression = document.querySelector(".expression");

let button = document.querySelector(".zero");
button.addEventListener("click", () => {
    if (isLeftOperand) {leftOperand += "0";}
    else {rightOperand += "0";}
    expression.textContent = `${leftOperand} ${operator} ${rightOperand}`;
});

button = document.querySelector(".one");
button.addEventListener("click", () => {
    if (isLeftOperand) {leftOperand += "1";}
    else {rightOperand += "1";}
    expression.textContent = `${leftOperand} ${operator} ${rightOperand}`;
});

button = document.querySelector(".two");
button.addEventListener("click", () => {
    if (isLeftOperand) {leftOperand += "2";}
    else {rightOperand += "2";}
    expression.textContent = `${leftOperand} ${operator} ${rightOperand}`;
});

button = document.querySelector(".three");
button.addEventListener("click", () => {
    if (isLeftOperand) {leftOperand += "3";}
    else {rightOperand += "3";}
    expression.textContent = `${leftOperand} ${operator} ${rightOperand}`;
});

button = document.querySelector(".four");
button.addEventListener("click", () => {
    if (isLeftOperand) {leftOperand += "4";}
    else {rightOperand += "4";}
    expression.textContent = `${leftOperand} ${operator} ${rightOperand}`;
});

button = document.querySelector(".five");
button.addEventListener("click", () => {
    if (isLeftOperand) {leftOperand += "5";}
    else {rightOperand += "5";}
    expression.textContent = `${leftOperand} ${operator} ${rightOperand}`;
});
button = document.querySelector(".six");
button.addEventListener("click", () => {
    if (isLeftOperand) {leftOperand += "6";}
    else {rightOperand += "6";}
    expression.textContent = `${leftOperand} ${operator} ${rightOperand}`;
});

button = document.querySelector(".seven");
button.addEventListener("click", () => {
    if (isLeftOperand) {leftOperand += "7";}
    else {rightOperand += "7";}
    expression.textContent = `${leftOperand} ${operator} ${rightOperand}`;
});

button = document.querySelector(".eight");
button.addEventListener("click", () => {
    if (isLeftOperand) {leftOperand += "8";}
    else {rightOperand += "8";}
    expression.textContent = `${leftOperand} ${operator} ${rightOperand}`;
});

button = document.querySelector(".nine");
button.addEventListener("click", () => {
    if (isLeftOperand) {leftOperand += "9";}
    else {rightOperand += "9";}
    expression.textContent = `${leftOperand} ${operator} ${rightOperand}`;
});

button = document.querySelector(".dot");
button.addEventListener("click", () => {
    if (!hasDot && isLeftOperand) {
        if (leftOperand == "") {leftOperand += "0."}
        else {leftOperand += ".";}
        hasDot = true;
    }
    else {
        if (!hasDot) {
            if (rightOperand == "") {rightOperand += "0."}
            else {rightOperand += ".";}
            hasDot = true;
        }
    }
    expression.textContent = `${leftOperand} ${operator} ${rightOperand}`;
});

button = document.querySelector(".plus");
button.addEventListener("click", () => {
    if (!hasOperator) {
        operator = "+";
        isLeftOperand = false;
        hasDot = false;
        hasOperator = true;
    }
    else {
        if (rightOperand != "") {
            calc.calculate(leftOperand, operator, rightOperand);
            operator = "+";
            leftOperand = calc.getTotal() + "";
            rightOperand = "";
            hasRightOperand = false;
            hasOperator = false;
            hasDot = false;
        }
        else {operator = "+"};
    }
    expression.textContent = `${leftOperand} ${operator} ${rightOperand}`;
});

button = document.querySelector(".minus");
button.addEventListener("click", () => {
    if (!hasOperator) {
        operator = "-";
        isLeftOperand = false;
        hasDot = false;
        hasOperator = true;
    }
    else {
        if (rightOperand != "") {
            calc.calculate(leftOperand, operator, rightOperand);
            operator = "-";
            leftOperand = calc.getTotal() + "";
            rightOperand = "";
            hasRightOperand = false;
            hasOperator = false;
            hasDot = false;
        }
        else {operator = "-"};
    }
    expression.textContent = `${leftOperand} ${operator} ${rightOperand}`;
});

button = document.querySelector(".multiply");
button.addEventListener("click", () => {
    if (!hasOperator) {
        operator = "*";
        isLeftOperand = false;
        hasDot = false;
        hasOperator = true;
    }
    else {
        if (rightOperand != "") {
            calc.calculate(leftOperand, operator, rightOperand);
            operator = "*"
            leftOperand = calc.getTotal() + "";
            rightOperand = "";
            hasRightOperand = false;
            hasOperator = false;
            hasDot = false;
        }
        else {operator = "*"};
    }
    expression.textContent = `${leftOperand} ${operator} ${rightOperand}`;
});

button = document.querySelector(".divide");
button.addEventListener("click", () => {
    if (!hasOperator) {
        operator = "/";
        isLeftOperand = false;
        hasDot = false;
        hasOperator = true;
    }
    else {
        if (rightOperand != "") {
            calc.calculate(leftOperand, operator, rightOperand);
            leftOperand = calc.getTotal() + "";
            rightOperand = "";
            hasRightOperand = false;
            hasOperator = false;
            hasDot = false;
            operator = "/";
        }
        else {operator = "/"};
    }
    expression.textContent = `${leftOperand} ${operator} ${rightOperand}`;
});

button = document.querySelector("#clear");
button.addEventListener("click", () => {
    leftOperand = "";
    rightOperand = "";
    operator = "";
    isLeftOperand = true;
    hasRightOperand = false;
    hasOperator = false;
    hasDot = false;

    calc.clear();
    console.log(calc);

    expression.textContent = `${leftOperand} ${operator} ${rightOperand}`;
});

button = document.querySelector("#back");
button.addEventListener("click", () => {
    if (isLeftOperand) {
        if (leftOperand[leftOperand.length -1] == ".") {hasDot = false;}
        leftOperand = leftOperand.substring(0, leftOperand.length - 1);
    }

    else {
        if (rightOperand == "") {
            operator = "";
            hasOperator = false;
            isLeftOperand = true;
        }
        else {
            if (rightOperand[rightOperand.length -1] == ".") {hasDot = false;}
            rightOperand = rightOperand.substring(0, rightOperand.length - 1);
        }
    }

    expression.textContent = `${leftOperand} ${operator} ${rightOperand}`;
});

button = document.querySelector(".equal");
button.addEventListener("click", () => {
    calc.calculate(leftOperand, operator, rightOperand);
    leftOperand = calc.getTotal() + "";
    operator = "";
    rightOperand = "";
    hasRightOperand = false;
    hasOperator = false;
    hasDot = false;
    calc.clear();
    console.log(calc);

    expression.textContent = `${leftOperand} ${operator} ${rightOperand}`;
});
