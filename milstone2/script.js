//get ref to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElements = document.getElementById('resume-display');
//handle form submission 
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page load
    //collect input values
    var name = document.getElementById('name').value;
    var Email = document.getElementById('Email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // generate the resume content dynamically
    var resumehtml = "\n<h2><b>Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b> ".concat(name, "</P>\n<p><b>Name:</b> ").concat(Email, "</P>\n<p><b>Name:</b> ").concat(phone, "</P>\n\n<h3>Education</h3>\n<p>").concat(education, "</P>\n\n<h3>Experience</h3>\n<p>").concat(experience, "</P>\n\n\n\n<h3>kills</h3\n<p>").concat(skills, "</P>\n");
    // display the generated resume
    if (resumeDisplayElements) {
        resumeDisplayElements.innerHTML = resumehtml;
    }
    else {
        console.error('the resume display element is missing');
    }
});
