
//Show links if user clicks "My Work" drop down button
function showMyWorkDD(event)
{
    event.stopPropagation();
    document.getElementById("mywork_dd").classList.toggle("show");
}

//Closing "My Work" drop down if user clicks elsewhere on page 
window.onclick = function(event)
{
    showMyWorkDD(event);
} 

