document.addEventListener("DOMContentLoaded", function() {
    const calendar = document.getElementById("calendar");
    
    // Define available and not available dates
    const availableDates = ["2023-06-01", "2023-06-02", "2023-06-03"];
    
    // Create calendar days dynamically
    const startDate = new Date();
    startDate.setDate(1);
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + 1);
    endDate.setDate(0);
    
    let currentDate = startDate;
    while (currentDate <= endDate) {
      const dayElement = document.createElement("div");
      dayElement.classList.add("day");
      
      const dateString = currentDate.toISOString().split("T")[0];
      dayElement.dataset.date = dateString;
      
      if (availableDates.includes(dateString)) {
        dayElement.classList.add("available");
        dayElement.addEventListener("click", handleDateSelection);
      } else {
        dayElement.classList.add("not-available");
        dayElement.removeEventListener("click", handleDateSelection);
      }
      
      dayElement.textContent = currentDate.getDate();
      
      calendar.appendChild(dayElement);
      
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    function handleDateSelection(event) {
      const selectedDate = event.target.dataset.date;
      console.log("Selected date:", selectedDate);
    }
  });
  