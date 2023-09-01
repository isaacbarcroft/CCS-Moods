import "./styles.css";

const submitFeelings = document.querySelector('#submitFeelings');

const classes = ["feeling-groovy", "totally-rad", "no-idea", "freaking-go", "nah"];
const valueToClass = (value) => {
    if (value === "Feeling Groovy") {
        return "feeling-groovy";
    }
    if (value === "Totally Rad") {
        return "totally-rad";
    }
    if (value === "You Have No Idea") {
        return "no-idea";
    }
    if (value === "Let's Freaking Go") {
        return "freaking-go";
    }
    if (value === "Nah") {
        return "nah";
    }
    return "default-mood";
}

const toggleMood = (classes, newMood, span) => {
    classes.map((mood) => {
        span.remove(mood);
    })
    span.add(valueToClass(newMood));
}


submitFeelings.addEventListener('click', function (event) {
    event.preventDefault();
    const feelingsInput = document.querySelector("[name=mood]:checked");
    const myFeelings = document.querySelector("#myFeelings");
    const feelingsValue = feelingsInput.value;
    myFeelings.innerHTML = feelingsInput.value;
    const newMood = myFeelings.classList;

    toggleMood(classes, feelingsValue, newMood);

})

