const form = document.getElementById('resumeForm');
const preview = document.getElementById('resumePreview');
const template1Btn = document.getElementById('template1Btn');
const template2Btn = document.getElementById('template2Btn');
const downloadBtn = document.getElementById('downloadBtn');


let currentTemplate = 'template1';
preview.className = currentTemplate;


window.onload = () => {
    const savedData = JSON.parse(localStorage.getItem('resumeData'));
    if (savedData) {
        for (let key in savedData) {
            const field = document.getElementById(key);
            if (field) field.value = savedData[key];
        }
        updatePreview();
    }
};


function updatePreview() {
    const data = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        linkedin: document.getElementById('linkedin').value,
        degree: document.getElementById('degree').value,
        institution: document.getElementById('institution').value,
        year: document.getElementById('year').value,
        skills: document.getElementById('skills').value,
        jobTitle: document.getElementById('jobTitle').value,
        company: document.getElementById('company').value,
        jobDesc: document.getElementById('jobDesc').value,
        projectName: document.getElementById('projectName').value
    };

    
    localStorage.setItem('resumeData', JSON.stringify(data));

    
    if (currentTemplate === 'template1') {
        preview.innerHTML = `
            <h1>${data.fullName}</h1>
            <p>Email: ${data.email}</p>
            <p>Phone: ${data.phone}</p>
            <p>Address: ${data.address}</p>
            <p>LinkedIn / GitHub: ${data.linkedin}</p>
            <h2>Education</h2>
            <p>${data.degree}, ${data.institution} (${data.year})</p>
            <h2>Skills</h2>
            <p>${data.skills}</p>
            <h2>Experience</h2>
            <p>${data.jobTitle} at ${data.company}</p>
            <p>${data.jobDesc}</p>
            <h2>Projects</h2>
            <p>${data.projectName}</p>
        `;
    } else {
        preview.innerHTML = `
            <h1>${data.fullName}</h1>
            <h2>Contact</h2>
            <p>Email: ${data.email} | Phone: ${data.phone}</p>
            <p>Address: ${data.address}</p>
            <p>LinkedIn / GitHub: ${data.linkedin}</p>
            <h2>Education</h2>
            <p>${data.degree} - ${data.institution} (${data.year})</p>
            <h2>Skills</h2>
            <p>${data.skills}</p>
            <h2>Experience</h2>
            <p><strong>${data.jobTitle}</strong> at ${data.company}</p>
            <p>${data.jobDesc}</p>
            <h2>Projects</h2>
            <p>${data.projectName}</p>
        `;
    }
}


form.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('input', updatePreview);
});


template1Btn.addEventListener('click', () => {
    currentTemplate = 'template1';
    preview.className = currentTemplate;
    updatePreview();
});

template2Btn.addEventListener('click', () => {
    currentTemplate = 'template2';
    preview.className = currentTemplate;
    updatePreview();
});


downloadBtn.addEventListener('click', () => {
    const printContent = preview.innerHTML;
    const originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
    location.reload(); 
});


