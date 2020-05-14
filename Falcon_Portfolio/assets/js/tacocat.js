const solveTacoCat = () => {
    //get the input
    let input = document.getElementById("tacoCatInput").value;

    //checks for missing word - else continues reversal and comparison
    if (input == "") {
        document.getElementById("tacoCatOutput").innerHTML = "Please enter a word";
    } else {
        input = input.toLowerCase();

        //reverse it
        let inputReversed = input.split('').reverse().join('');

        if (inputReversed == input) {
            document.getElementById("tacoCatOutput").innerHTML = "Your input is a palindrome!";
        } else {
            document.getElementById("tacoCatOutput").innerHTML = "Your input is NOT a palindrome!";
        }
    }
}

const clearTacoCat = () => {
    document.getElementById("tacoCatInput").value = "";
    document.getElementById("tacoCatOutput").innerHTML = "";
}

const showTacoCat = () => {
    //pre element hidden attribute is active by default
    //show code button will toggle the hidden attribute
    document.getElementById("tcCode").toggleAttribute("hidden");
    //when the hidden attribute is inactive it returns null
    //here we change the text of the button based on that condition
    if (document.getElementById("tcCode").getAttribute("hidden") == null) {
        document.getElementById("showTacoCatCode").innerHTML = "Hide Code";
    } else {
        document.getElementById("showTacoCatCode").innerHTML = "Show Code";
    }
}