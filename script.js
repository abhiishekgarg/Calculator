var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var operands = [0, 1, 2, 3, 4, 5, 6, 8, 9];
var operand1 = 0;
var operand2 = 0;
var operator = null;


for(var i=0; i<buttons.length; i++)
{
    buttons[i].addEventListener('click', function()
    {
        var value = this.getAttribute("data-value");
        switch(value)
        {
            case 'AC':
                display.innerText = "";
                break;
            case '+/-':
                operand1 = parseFloat(display.textContent);
                operand1 *= -1;
                display.innerText = operand1;
                break;
            case '%':
                operand1 = parseFloat(display.textContent);
                operator = '%';
                display.innerText = operator;
                break;
            case '/':
                operand1 = parseFloat(display.textContent);
                operator = '/';
                display.innerText = operator;
                break;
            case '*':
                operand1 = parseFloat(display.textContent);
                operator = '*';
                display.innerText = operator;
                break;
            case '-':
                operand1 = parseFloat(display.textContent);
                operator = '-';
                display.innerText = operator;
                break;
            case '+':
                operand1 = parseFloat(display.textContent);
                operator = '+';
                display.innerText = operator;
                break;
            case '.':
                var flag = false;
                for(var j=0; j<display.innerText.length; j++)
                {
                    if(display.innerText[j] == '.')
                    {
                        flag = true;
                    }
                }
                if(flag == false) display.innerText += ".";
                else break;
                break;
            case '=':
                operand2 = parseFloat(display.textContent);
                if(operator == '%')
                {
                    operand2 /= 100;
                    operator = '*';
                }
                var result = eval(operand1 + " " + operator + " " + operand2);
                display.innerText = result;
                break;
            default:
                if(display.innerText[0] == operator)
                {
                    display.innerText = "";
                    
                }
                display.innerText += value; 
        }
    });
}

document.addEventListener("keydown", function(event) 
{
    var value = event.key;
    switch(value)
        {
            case 'AC':
                display.innerText = "";
                break;
            case 'Escape':
                display.innerText = "";
                break;
            case '+/-':
                operand1 = parseFloat(display.textContent);
                operand1 *= -1;
                display.innerText = operand1;
                break;
            case '%':
                operand1 = parseFloat(display.textContent);
                operator = '%';
                display.innerText = operator;
                break;
            case '/':
                operand1 = parseFloat(display.textContent);
                operator = '/';
                display.innerText = operator;
                break;
            case '*':
                operand1 = parseFloat(display.textContent);
                operator = '*';
                display.innerText = operator;
                break;
            case '-':
                operand1 = parseFloat(display.textContent);
                operator = '-';
                display.innerText = operator;
                break;
            case '+':
                operand1 = parseFloat(display.textContent);
                operator = '+';
                display.innerText = operator;
                break;
            case '.':
                var flag = false;
                for(var j=0; j<display.innerText.length; j++)
                {
                    if(display.innerText[j] == '.')
                    {
                        flag = true;
                    }
                }
                if(flag == false) display.innerText += ".";
                else break;
                break;
            case 'Enter':
            case '=':
                operand2 = parseFloat(display.textContent);
                if(operator == '%')
                {
                    operand2 /= 100;
                    operator = '*';
                }
                var result = eval(operand1 + " " + operator + " " + operand2);
                display.innerText = result;
                break;
            default:
                for(var i=0; i<operands.length; i++)
                {
                    if(value == operands[i])
                    {
                        if(display.innerText[0] == operator)
                    {
                        display.innerText = "";
                    }
                    display.innerText += value;
                    }
                }
        }
});
