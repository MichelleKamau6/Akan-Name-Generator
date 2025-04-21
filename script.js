document.getElementById ('akanList').addEventListener('submit',function(event) {
event.preventDefault();
    const birthdate = document.getElementById('birthdate').value;
    const result = document.getElementById('results')
    const gender = document.getElementById('gender')
    if(!birthdate || !gender){
    results. textContent = 'Please enter a valid birthdate and select your gender.';
     return;
    }
const date = new Date(birthdate);
const dayOfTheWeek = date.getDay();

const maleNames =[
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
];
const femaleNames =[
    "Akosau",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
];
const dayNames =[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    
];
let akanName = "";
if (gender === "male") {
 akanName = maleNames[dayOfTheWeek];
}else if (gender === "female") {
 akanName = femaleNames[dayOfTheWeek]; 
}else{
 result.textContent = 'Invalid gender selected.';
 return;
}
result.textContent =  'You were born on a ${dayNames[dayOfTheWeek]}. is:${akanName}';
});