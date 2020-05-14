const solveSun = () => {
    //collect the inputs
    let num1 = parseInt(document.getElementById("sunNum1").value);
    let num2 = parseInt(document.getElementById("sunNum2").value);
    let num3 = parseInt(document.getElementById("sunNum3").value);
    let num4 = parseInt(document.getElementById("sunNum4").value);
    let num5 = parseInt(document.getElementById("sunNum5").value);
    let num6 = parseInt(document.getElementById("sunNum6").value);

    //store inputs in an array
    let sunArray = [num1, num2, num3, num4, num5, num6];

    //validation
    let errors = false;
    for (let i = 0; i < sunArray.length; i++) {
        if (sunArray[i] >= 1 && sunArray[i] <= 10 && Number.isInteger(sunArray[i])) {
            errors = false;
        } else {
            errors = true;
            document.getElementById("sunResults").innerHTML = "Please enter numbers between 1 and 10";
            break;
        }
    }

    //variables for the solution and output
    let sunResults = [];
    let maxHeight = 0;
    let sunOutput = "";
        
    if (!errors) {
        for (let j = 0; j < sunArray.length; j++) {
            if (sunArray[j] > maxHeight) {
                maxHeight = sunArray[j];
                sunResults.push(j + 1);
            }
        }
        sunOutput = "The following buildings can see the sunset: " + sunResults.join(', ');
        document.getElementById("sunResults").innerHTML = sunOutput;
    }
}



const clearSun = () => {
    document.getElementById("sunNum1").value = 3;
    document.getElementById("sunNum2").value = 4;
    document.getElementById("sunNum3").value = 6;
    document.getElementById("sunNum4").value = 2;
    document.getElementById("sunNum5").value = 5;
    document.getElementById("sunNum6").value = 8;
    document.getElementById("sunResults").innerHTML = "";
}

const showSun = () => {
    //pre element hidden attribute is active by default
    //show code button will toggle the hidden attribute
    document.getElementById("sshCode").toggleAttribute("hidden");
    //when the hidden attribute is inactive it returns null
    //here we change the text of the button based on that condition
    if (document.getElementById("sshCode").getAttribute("hidden") == null) {
        document.getElementById("showSunCode").innerHTML = "Hide Code";
    } else {
        document.getElementById("showSunCode").innerHTML = "Show Code";
    }
}