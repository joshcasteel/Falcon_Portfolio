const solveFizzBuzz = () => {
    //get values and assign to variables
    let fizzNum = parseInt(document.getElementById("fizzNum").value);
    let buzzNum = parseInt(document.getElementById("buzzNum").value);

    //assign variables to array for validation
    let arrFizzBuzz = [fizzNum, buzzNum];
    let errors = false;

    for (let k = 0; k < arrFizzBuzz.length; k++) {
        console.log(k)
        if (arrFizzBuzz[k] <= 100 && arrFizzBuzz[k] >= 1 && Number.isInteger(arrFizzBuzz[k])) {
            errors = false;
        } else {
            errors = true;
            document.getElementById("fizzBuzzResults").innerHTML = "Please enter 2 numbers between 1 and 100";
            break;
        }
    }

    //declaring an array to hold our results
    let results = [];

    //checking for matches to inputs
    if (!errors) {
        for (let i = 1; i <= 100; i++) {
            if (i % fizzNum == 0 && i % buzzNum == 0) {
                results[i - 1] = "<span style='color: purple; font-size: 18px'>FizzBuzz</span>";
            } else if (i % fizzNum == 0) {
                results[i - 1] = "<span style='color: red; font-size: 18px'>Fizz</span>";
            } else if (i % buzzNum == 0) {
                results[i - 1] = "<span style='color: blue; font-size: 18px'>Buzz</span>";
            } else {
                results[i - 1] = i;
            }
        }
        //adding spacing to the results array for readability
        results = results.join(', ');
        document.getElementById("fizzBuzzResults").innerHTML = results;
    }
     
}

const showFizzBuzz = () => {
    //pre element hidden attribute is active by default
    //show code button will toggle the hidden attribute
    document.getElementById("fbCode").toggleAttribute("hidden");
    //when the hidden attribute is inactive it returns null
    //here we change the text of the button based on that condition
    if (document.getElementById("fbCode").getAttribute("hidden") == null) {
        document.getElementById("showFizzBuzzCode").innerHTML = "Hide Code";
    } else {
        document.getElementById("showFizzBuzzCode").innerHTML = "Show Code";
    }
}

const clearFizzBuzz = () => {
    document.getElementById("fizzNum").value = 3;
    document.getElementById("buzzNum").value = 5;
    document.getElementById("fizzBuzzResults").innerHTML = "";
}