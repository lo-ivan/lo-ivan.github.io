function addValue(){
    // get the operands value
    var num1 = document.getElementById("input_a").value;
    var num2 = document.getElementById("input_b").value;

    if (!(isNaN(num1) || isNaN(num2) || num1.trim() == '' || num2.trim() == ''))
    {
        // parse to float
        var floatNum1 = parseFloat(num1);
        var floatNum2 = parseFloat(num2);

        // perform operation
        var result = floatNum1 + floatNum2;

        // creating the text output
        var text = floatNum1 + " + " + floatNum2 + " = " + result;
        
        // (if you want to check) print out in console
        console.log(text);

        // change the text area
        document.mycalculator.output.value = text;
    }
    else
    {
        alert("Please fill out the operands with number.");
    }
}

function mulValue(){
    // get the operands value
    var num1 = document.getElementById("input_a").value;
    var num2 = document.getElementById("input_b").value;

    if (!(isNaN(num1) || isNaN(num2) || num1.trim() == '' || num2.trim() == ''))
    {
        // parse to float
        var floatNum1 = parseFloat(num1);
        var floatNum2 = parseFloat(num2);

        // perform operation
        var result = floatNum1 * floatNum2;

        // creating the text output
        var text = floatNum1 + " * " + floatNum2 + " = " + result;
        
        // (if you want to check) print out in console
        console.log(text);

        // change the text area
        document.mycalculator.output.value = text;
    }
    else
    {
        alert("Please fill out the operands with number.");
    }
}

function divValue(){
    // get the operands value
    var num1 = document.getElementById("input_a").value;
    var num2 = document.getElementById("input_b").value;

    if (!(isNaN(num1) || isNaN(num2) || num1.trim() == '' || num2.trim() == ''))
    {
        // parse to float
        var floatNum1 = parseFloat(num1);
        var floatNum2 = parseFloat(num2);

        // perform operation
        var result = floatNum1 / floatNum2;

        // creating the text output
        var text = floatNum1 + " / " + floatNum2 + " = " + result;
        
        // (if you want to check) print out in console
        console.log(text);

        // change the text area
        document.mycalculator.output.value = text;
    }
    else
    {
        alert("Please fill out the operands with number.");
    }
}