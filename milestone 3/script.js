// to generate hide/show button for skills
var toggleButton = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
toggleButton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
// Get reference to the form and display area
var form = document.getElementById('resumeform');
var resumeDisplayElement = document.getElementById('resumeOutput');
// handle for submission
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault(); // prevent page reload
    // collect input values
    var profilePictureInput = document.getElementById('profilePicture');
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Picture element
    var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePictureURl = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
    // Generate the resume content dynamically
    var resumeOutput = "\n<h2><b>Resume</b></h2>\n".concat(profilePictureURl ? "<img src=".concat(profilePictureURl, " alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n<h3><b>Personal Information</b></h3>\n<p><b>Name:</b>").concat(name, "</p>\n<p><b>Email:</b>").concat(email, "</p>\n<p><b>Phone:</b>").concat(phone, "</p>\n<p><b>Address:</b>").concat(address, "</p>\n\n<h3>Education</h3>\n<p>").concat(education, "</p>\n\n<h3>Experience</h3>\n<p>").concat(experience, "</p>\n\n\n<h3>Skills</h3>\n<p>").concat(skills, "</p>\n");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeOutput;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
