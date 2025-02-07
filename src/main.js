//  Redirect to Home page
function goHome(event) {
  event.preventDefault();  // Prevent default anchor link behavior
  window.location.href = '/';  // Redirect to the home page
}

// Time Format on Home Page
function formatDateTime() {
        const now = new Date();
        const options = {
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit',
            hour12: true
        };
        return now.toLocaleString('en-IN', options);
    }

    // Update the date and time dynamically
    function updateDateTime() {
        document.getElementById('dateTime').innerText = formatDateTime();
    }

    // Update every second
    setInterval(updateDateTime, 1000);

    // Initial call to display the time
    updateDateTime();

