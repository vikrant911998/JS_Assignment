//Question 1
function getTime(number_of_seconds){
    let number_of_hours = Math.floor(number_of_seconds/3600);
    number_of_seconds = number_of_seconds - number_of_hours*3600;
    let number_of_minutes = Math.floor(number_of_seconds/60);
    number_of_seconds = number_of_seconds - number_of_minutes*60;
    
    console.log('Hours = ',number_of_hours,' Minutes = ',number_of_minutes,' Seconds = ',number_of_seconds);
}
var seconds = parseInt(prompt('Enter the Number of Seconds'));

getTime(seconds);
