 // to generate hide/show button for skills

const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement
const skills = document.getElementById('skills') as HTMLElement


toggleButton.addEventListener('click',()=>{
    if(skills.style.display === 'none'){
        skills.style.display ='block'
    } else {
        skills.style.display = 'none'
    }
});

// Get reference to the form and display area
const form = document.getElementById('resumeform') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resumeOutput') as HTMLDivElement;


// handle for submission

form.addEventListener('submit',  (event:Event) =>{
    event.preventDefault();   // prevent page reload


// collect input values

const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement
const name = (document.getElementById('name') as HTMLInputElement).value
const email = (document.getElementById('email') as HTMLInputElement).value
const phone = (document.getElementById('phone') as HTMLInputElement).value
const address = (document.getElementById('address') as HTMLInputElement).value
const education = (document.getElementById('education') as HTMLTextAreaElement).value
const experience = (document.getElementById('experience') as HTMLTextAreaElement).value
const skills = (document.getElementById('skills') as HTMLTextAreaElement).value


// Picture element
const profilePictureFile = profilePictureInput.files?.[0]
const profilePictureURl = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';


// Generate the resume content dynamically
const resumeOutput = `
<h2><b>Resume</b></h2>
${profilePictureURl ? `<img src=${profilePictureURl} alt="Profile Picture" class="profilePicture">`:''}
<h3><b>Personal Information</b></h3>
<p><b>Name:</b>${name}</p>
<p><b>Email:</b>${email}</p>
<p><b>Phone:</b>${phone}</p>
<p><b>Address:</b>${address}</p>

<h3>Education</h3>
<p>${education}</p>

<h3>Experience</h3>
<p>${experience}</p>


<h3>Skills</h3>
<p>${skills}</p>
`;

// Display the generated resume
if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeOutput;
}else{
    console.error('The resume display element is missing.')
}


});