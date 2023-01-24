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
/*create new XMLHttpRequest object and store in variable*/
//const githubRequest = new XMLHttpRequest();

/*call open method*/
/*githubRequest.open('GET', 'https://api.github.com/users/Jessica12492/repos');*/
/* call send method on githubrequest*/
/*githubRequest.send();*/
/*add load event listener  parsed the response & store variable inside the callback function*/

//githubRequest.addEventListener('load', event=>{
//event.preventDefault();

/*Create 'GET' request*/
fetch('https://api.github.com/users/Jessica12492/repos')

  /*returns response data*/
  .then(response => {
    //  console.log(response.json())
    return response.json()
  })

  .then(repositories => {
    console.log(repositories)





  
    //const repositories = JSON.parse(Promise1.responseText);
    console.log(repositories)
    const projectSection = document.getElementById('projects');
    /*query projectSection*/
    const projectList = projectSection.querySelector('ul');
    /*add for loop to iteriate over repositories*/
    for (let index = 0; index < repositories.length; index++) {
      const project = document.createElement('li');

      console.log(project);
      /*set the inner text of  project variable to the current Array element*/
      project.innerText = repositories[index].name


      /*append the project element to the projectList element*/
      projectList.appendChild(project);
    }

  })
