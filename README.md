# Smart-Resume-Builder


## Project Description
A web application to create professional resumes with live preview.
Smart Resume Builder is a lightweight web application that allows users to generate a professional resume dynamically using a simple form interface.

This project demonstrates:

- Frontend web development

- Docker containerization

- Nginx web server deployment

- Git version control

- GitHub repository management

- CI automation using GitHub Actions

- Static site deployment using GitHub Pages

## Project Structure
```
Smart Resume/
│
├── .github/workflows/
│   └── ci.yaml
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── index.html
├── style.css
├── preview.js
└── README.md
```
## Project Objectives
- Provide an easy way to create professional resumes
- Demonstrate team collaboration using Git & GitHub
- Implement CI/CD using GitHub Actions
- Deploy the application using modern hosting platforms
- Follow proper software engineering practices

## Features
- Live resume preview
- Multiple templates
- PDF download
- Local storage

## Technologies Used 
- HTML5
- CSS3
- JavaScript
- Docker
- Nginx (Alpine Linux)
- Git & GitHub
- GitHub Actions
- GitHub Pages



# Team Members
- Student 1 – Frontend  ( ITBNM-2313-0012 ,     N.H.L Chathurangi de silva )
  - Designed and implemented resume input forms
  - Developed live resume preview functionality
  - Created multiple resume templates
  - Implemented PDF download feature
  - Handled UI styling and responsiveness
  - Managed frontend feature branches

- Student 2 – DevOps    ( ITBNM-2313-0010  ,       D.V. Lashini chamodi )
  - Set up GitHub repository and branch rules
  - Managed Git workflow and pull requests
  - Implemented CI pipeline using GitHub Actions
  - Configured deployment on Netlify/Vercel
  - Created and maintained project documentation
  - Reviewed and merged pull requests
  - Build DOCKER files and pull requests

---

# Live Preview
https://smartresumesite.netlify.app/ 

---

### Branch Protection Rules

- `main` branch is protected
- Direct pushes to `main` are disabled
- Pull Request required before merging
- Minimum 1 approval required


---


## Git Workflow
Feature branches + Pull Requests + CI/CD

# ⚙️ CI/CD Pipeline

This project uses GitHub Actions for Continuous Integration and Netlify for Continuous Deployment.

Workflow file location: `.github/workflows/ci.yml`

### Continuous Integration (CI)
- Push to `develop`
- Pull requests to `develop` or `main`

CI Pipeline Steps:
1. Checkout repository
2. Setup Node environment
3. Run build validation
4. Confirm successful execution

Purpose:
- Ensure code stability
- Prevent broken builds
- Enforce quality control
  
### Continuous Deployment (CD)

Deployment Platform: **Netlify**

Deployment Trigger:
- Automatic deployment on merge to `main`

Process:
1. Developer merges PR to `main`
2. Netlify detects change
3. Build starts automatically
4. Live site updates

---

# Docker Configuration
This project is containerized using Docker and served with Nginx
```text
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY preview.js /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```
## How to Run the Project Using Docker
Step 1 — Build Docker Image
Open terminal inside project folder:
```
docker build -t smart-resume-builder .
```
Step 2 — Run Docker Container
```
docker run -p 8080:80 smart-resume-builder
```
Step 3 — Open in Browser
```
http://localhost:8080
```
---
# DevOps Concepts Demonstrated
This project demonstrates key DevOps principles:
- Version Control (Git)
- Infrastructure as Code (Dockerfile)
- Continuous Integration (GitHub Actions)
- Containerization (Docker)
- Web Server Deployment (Nginx)
- Automated Build Verification
