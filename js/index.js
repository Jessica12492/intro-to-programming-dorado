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

const messageForm = document.querySelector("form[name=leave_message]")
console.log(messageForm);

messageForm.addEventListener('submit', event => {
    event.preventDefault();

    const name = event.target.name.value

    //console.log(Name)
    const emailAddress = event.target.email.value
    //console.log(emailAddress)
    const message = event.target.message.value
    console.log(name, emailAddress, message);


    messageForm.reset();

    const messageSection = document.getElementById('messages')
    console.log(messageSection)

    const messageList = messageSection.querySelector('ul')
    console.log(messageList)
    const newMessage = document.createElement('li')
    console.log(newMessage)

    newMessage.innerHTML = `
       <a class="link" href="mailto:${emailAddress}">
       ${name}:</a>
       <span>wrote:
       ${message}
       
     </span>`;


    messageList.appendChild(newMessage);

    const removeButton = document.createElement('button')
    removeButton.innerText = 'remove'
    removeButton.setAttribute('type', 'button')

    removeButton.addEventListener('click', (remove) => {
        const entry = document.getElementById('messages')

        removeButton.parentNode.remove()

        console.log(entry)


        // entry.remove();


    })

    newMessage.appendChild(removeButton);



});
