// Run script after the page loads
document.addEventListener("DOMContentLoaded", function() {
    const benefitInput=document.getElementById("hobbyInput"); //read input box
    const addButton = document.getElementById("addBtn"); // Adding button
    const benefitsList = document.getElementById("benefitsList"); //new benefits will be added
    const contactForm = document.querySelector("form");
    const dateTime=document.getElementById("datetime"); //update date and time

    // Handle adding a new benefit to the list when user clicks the button
    addButton.addEventListener("click",function() // Validate and append a new benefit item with delete functionality
    {
        const benefitText=benefitInput.value.trim();
        // Prevent empty or whitespace-only entries from being added
        if (benefitText.length < 5) {
            alert("Benefit must be at least 5 characters long.");
            return;
        }
        
        const validText = /^[a-zA-Z0-9\s.,'-]+$/;
        if (!validText.test(benefitText)) {
            alert("Please enter valid characters only.");
            return;
        }

        const listItem=document.createElement("li");
        listItem.textContent = benefitText; //adds the new list

        //Create a delete button for the list item (let user remove)
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent="Delete";
        deleteBtn.addEventListener("click", function() {
            listItem.remove();
        });
        
        listItem.appendChild(deleteBtn); //let user delete the item
        benefitsList.appendChild(listItem); //shown in the web page

        //Clear the input after adding 
        benefitInput.value="";
    });

    //CONTACT FORM
    //Show confirmation when contact form is submitted
    contactForm.addEventListener("submit",function(e)
    {
        e.preventDefault();
        alert("Thanks! Your message has been submitted successfully.");
    });
    
    //DATE AND TIME
    //Display current date and time in the footer   
    function updateDateTime() {
    const now = new Date();

    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const dayName = days[now.getDay()];
    const date = String(now.getDate()).padStart(2, '0');
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const formatted = `${dayName}, ${date} ${month} ${year}, ${hours}:${minutes}:${seconds}`;

    dateTime.textContent = formatted;
}

setInterval(updateDateTime, 1000);
updateDateTime();
});