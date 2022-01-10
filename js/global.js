/* This will handle the webpage responsiveness and animations on the webpage*/
/* This will also handle dark mode configuration */


//Show links if user clicks "My Work" drop down button
function excMyWorkDD()
{
    var showMyWork = document.getElementById("mywork_dd");

    console.log(showMyWork);
    if (showMyWork.style.display == "block") {
        showMyWork.style.display = "none";
    } else {
        showMyWork.style.display = "block";

    }
}

//Closing "My Work" drop down if user clicks elsewhere on page  