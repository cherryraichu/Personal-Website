var navbarClick = document.querySelector(".topnav");
var ddVisibility = null; 

//Show links if user clicks "My Work" drop down button
function showMyWorkDD(event)
{
    ddVisibility = window.getComputedStyle(document.getElementById("mywork_dd"));

    event.stopPropagation();
    document.getElementById("mywork_dd").classList.toggle("show");
}

//Closing "My Work" drop down if user clicks elsewhere on page 
document.addEventListener("click", function(event)
{
    if (event.target.closest(".topnav") || ddVisibility == null
    || ddVisibility.display == "none") 
    {
        //Don't toggle dropdown if user clicked on the navbar
        //Don't toggle dropdown if the dropdown is already hidden
        return;
    }
    else 
    {
        //Else toggle dropdown
        event.stopPropagation();
        showMyWorkDD(event);
    }
});




