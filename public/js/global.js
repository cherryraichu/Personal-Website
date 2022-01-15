var navbarClick = document.querySelector(".topnav");

//Show links if user clicks "My Work" drop down button
function showMyWorkDD(event)
{
    event.stopPropagation();
    document.getElementById("mywork_dd").classList.toggle("show");
}

//Closing "My Work" drop down if user clicks elsewhere on page 
document.addEventListener("click", function(event)
{
    if (event.target.closest(".topnav") ) 
    {
        return;
    } 
    else
    {
        event.stopPropagation();
        showMyWorkDD(event);
    }
});


