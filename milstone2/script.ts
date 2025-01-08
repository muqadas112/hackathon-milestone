//get ref to the form and display area
const form = document. getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElements = document. getElementById('resume-display') as HTMLDivElement

//handle form submission 
form.addEventListener('submit', (event: Event)=> {
    event.preventDefault(); //prevent page load

    //collect input values
    const name = (document. getElementById('name') as HTMLInputElement).value
    const Email = (document. getElementById('Email') as HTMLInputElement).value
    const phone = (document. getElementById('phone') as HTMLInputElement).value
    const education = (document. getElementById('education') as HTMLInputElement).value
    const experience = (document. getElementById('experience') as HTMLInputElement).value
    const skills = (document. getElementById('skills') as HTMLInputElement).value


// generate the resume content dynamically
const resumehtml = `
<h2><b>Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b> ${name}</P>
<p><b>Name:</b> ${Email}</P>
<p><b>Name:</b> ${phone}</P>

<h3>Education</h3>
<p>${education}</P>

<h3>Experience</h3>
<p>${experience}</P>



<h3>kills</h3
<p>${skills}</P>
`;

// display the generated resume
if(resumeDisplayElements){
    resumeDisplayElements.innerHTML = resumehtml;
} else {
    console.error('the resume display element is missing')
}
})