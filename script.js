document.getElementById ('akanList').addEventListener('submit',function(event) {
event.preventDefault();
    const birthdate = document.getElementById('birthdate').value;
    const results = document.getElementById('results')
    const gender = document.getElementById('gender');
    const genderSelect = genderSelect.value;
    if(!birthdate || !gender){
    results. textContent = 'Please enter a valid birthdate and select your gender.';
     return;
    }
}
const date = new Date(birthdate);
const dayOfTheWeek = date.getDay();
const gender = gender.value;
const CC =Math.floor(year/100);
const YY = year%100;
d = ((4 * CC - 2 * CC - 1) + (45 * YY) + (1026* (MM + 1))+ DD) % 7
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
let akanName = "";
if (gender === "male") {
 akanName = maleNames[dayOfTheWeek];
}else if (gender === "female") {
 akanName = femaleNames[dayOfTheWeek]; 
}else{
 result.textContent = 'Invalid gender selected.';
 return;
}
document.getElementById('result').textContent = 'Your Akan name is:${akanName}';
});