function ageCalculate() {
    // Get the input date value
    const birthDate = new Date(document.getElementById("date-input").value);
    const today = new Date();

    if (isNaN(birthDate.getTime())) {
        alert("Please enter a valid date");
        return;
    }