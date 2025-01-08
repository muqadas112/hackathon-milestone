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
    var resumehtml = "\n<h2><b> Editable Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></P>\n<p><b>Email:</b><span contenteditable=\"true\">").concat(Email, "</span></P>\n<p><b>phone:</b><span contenteditable=\"true\"> ").concat(phone, "</span></P>\n\n<h3>Education</h3>\n<p contenteditable=\"true\">").concat(education, "</P>\n\n<h3>Experience</h3>\n<p contenteditable=\"true\">").concat(experience, "</P>\n\n\n\n<h3>kills</h3\n<p contenteditable=\"true\">").concat(skills, "</P>\n");
    // display the generated resume
    if (resumeDisplayElements) {
        resumeDisplayElements.innerHTML = resumehtml;
    }
    else {
        console.error('the resume display element is missing');
    }
});
