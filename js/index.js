const today = new Date()
const thisYear = today.getFullYear()
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
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


const messageForm = document.querySelector("form[name=leave_message]")


messageForm.addEventListener('submit', event => {
  event.preventDefault();

  const name = event.target.name.value


  const emailAddress = event.target.email.value

  const message = event.target.message.value
  


  messageForm.reset();

  const messageSection = document.getElementById('messages')


  const messageList = messageSection.querySelector('ul')

  const newMessage = document.createElement('li')


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







  })

  newMessage.appendChild(removeButton);



});


/*Create 'GET' request*/
fetch('https://api.github.com/users/Jessica12492/repos')
  /*returns response data*/
  .then(response => {

    return response.json()
  })

  .then(repositories => {






    const projectSection = document.getElementById('projects');
    /*query projectSection*/
    const projectList = projectSection.querySelector('ul');
    /*add for loop to iteriate over repositories*/

    for (let index = 0; index < repositories.length; index++) {
      repositories[index].full_name
      //Create a element
      const aTag = document.createElement('a')
      const project = document.createElement('li');

      /*append the a element to the project element*/
      project.appendChild(aTag)

      /*set the inner text of  project variable to the current Array element*/
      aTag.innerText = repositories[index].full_name
      /*set attribute method*/
      aTag.setAttribute("href", repositories[index].clone_url)

      //console.log(repositories[index].clone_url)

      /*append the project element to the projectList element*/
      projectList.appendChild(project);
    }

  })
