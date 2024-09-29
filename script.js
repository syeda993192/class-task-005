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

      // Adjust months and days if necessary
      if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // Get number of days in previous month
    }

    if (months < 0) {
        years--;
        months += 12;
    }

     // Update the output fields
     document.getElementById("years").textContent = years;
     document.getElementById("months").textContent = months;
     document.getElementById("days").textContent = days;
 
}
