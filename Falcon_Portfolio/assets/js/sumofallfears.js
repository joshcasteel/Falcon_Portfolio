const solveFear = () => {
    //collect the inputs
    let num1 = parseInt(document.getElementById("fearNum1").value);
    let num2 = parseInt(document.getElementById("fearNum2").value);
    let num3 = parseInt(document.getElementById("fearNum3").value);
    let num4 = parseInt(document.getElementById("fearNum4").value);
    let num5 = parseInt(document.getElementById("fearNum5").value);
    let input = parseInt(document.getElementById("fearInput").value);

    //create an array
    let fearArray = [num1, num2, num3, num4, num5];

    //validation
    let errors = false;
    for (let i = 0; i < fearArray.length; i++) {
        if (fearArray[i] >= 1 && fearArray[i] <= 100 && Number.isInteger(fearArray[i])) {
            errors = false;
        } else {
            errors = true;
            document.getElementById("fearResults").innerHTML = "Please enter numbers between 1 and 100";
            break;
        }
    }
    if (!errors && input >= 1 && input <= 100 && Number.isInteger(input)) {
        errors = false;
    } else {
        errors = true;
        document.getElementById("fearResults").innerHTML = "Please enter numbers between 1 and 100";
    }

    //an array to store matching pairs
    let matchingPairs = [];

    if (!errors) {
        //filter numbers larger than the input
        fearArray = fearArray.filter(x => x < input);
        //find all pairs that equal the input
        for (let j = 0; j < fearArray.length; j++) {
            for (let k = 0; k < fearArray.length; k++) {
                if (fearArray[j] + fearArray[k] == input)
                    matchingPairs.push([fearArray[j], fearArray[k]])
            }
        }

        //check to see any matches were found
        if (matchingPairs.length == 0) {
            document.getElementById("fearResults").innerHTML = "No matches found";
        } else {
            //nested loops store all combinations, such as (7 + 3) and (3 + 7)
            //we can remove the duplicates by cutting the array in half
            matchingPairs = matchingPairs.slice(0, (matchingPairs.length / 2));
            //preparing our array for output as HTML
            let resultString = "";
            matchingPairs.forEach(x => resultString += `${x[0]} + ${x[1]} <br />`);
            document.getElementById("fearResults").innerHTML = "The following matches were found: <br />" + resultString;
        }
    }
}



const clearFear = () => {
    document.getElementById("fearNum1").value = 3;
    document.getElementById("fearNum2").value = 7;
    document.getElementById("fearNum3").value = 15;
    document.getElementById("fearNum4").value = 10;
    document.getElementById("fearNum5").value = 2;
    document.getElementById("fearInput").value = 17;
    document.getElementById("fearResults").innerHTML = "";
}

const showFear = () => {
    //pre element hidden attribute is active by default
    //show code button will toggle the hidden attribute
    document.getElementById("soafCode").toggleAttribute("hidden");
    //when the hidden attribute is inactive it returns null
    //here we change the text of the button based on that condition
    if (document.getElementById("soafCode").getAttribute("hidden") == null) {
        document.getElementById("showFearCode").innerHTML = "Hide Code";
    } else {
        document.getElementById("showFearCode").innerHTML = "Show Code";
    }
}