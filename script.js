function ageCalculate() {
    // Get the input date value
    const birthDate = new Date(document.getElementById("date-input").value);
    const today = new Date();

    if (isNaN(birthDate.getTime())) {
        alert("Please enter a valid date");
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

