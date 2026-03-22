// Run script after the page loads
document.addEventListener("DOMContentLoaded", function() {
    const benefitInput=document.getElementById("hobbyInput"); //read input box
    const addButton = document.getElementById("addBtn"); // Adding button
    const benefitsList = document.getElementById("benefitsList"); //new benefits will be added
    const contactForm = document.querySelector("form");
    const dateTime=document.getElementById("datetime"); //update date and time

    //Adds a new benefits to the list
    addButton.addEventListener("click",function() //respond only when use click mouse
    {
        const benefitText=benefitInput.value.trim();
        if(benefitText === "")return; //prevent from blank entries

        const listItem=document.createElement("li");
        listItem.textContent = benefitText; //adds the new list

        //Create a delete button for the list item (let user remove)
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent="Delete";
        deleteBtn.onclick=function()
        {
            listItem.remove();
        };
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
        alert("Form is Submitted Successfully!");
    });
    
    //DATE AND TIME
    //Display current date and time in the footer
    function updateTime()
    {
        const now= new Date();
        dateTime.textContent=now.toLocaleString();
    }

    updateTime();
    setInterval(updateTime, 1000);
});