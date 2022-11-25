const today = new Date()
const thisYear = today.getFullYear()
console.log(today);
console.log(thisYear);
const footer = document.querySelector('footer');
console.log(footer);
const copyright = document.createElement('p');
console.log(copyright)
copyright.innerHTML = `Jessica Baker ${thisYear}`
footer.appendChild(copyright);
const skills = ["Management", "Communication", "Customer Service", "Coding"]
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul')

for (let index = 0; index < skills.length; index++) {


    const skill = document.createElement('li');

    skill.innerText = skills[index];
    skillsList.appendChild(skill)


}

console.log(skills)







