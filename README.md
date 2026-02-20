# Smart-Resume-Builder


## Project Description
A web application to create professional resumes with live preview.

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

## Tech Stack
- HTML, CSS, JavaScript
- GitHub Actions
- Netlify/Vercel

## Team Members
- Student 1 – Frontend  ( ITBNM-2313-0012 ,       N.H.L. Chathurangi de silva )
  - Designed and implemented resume input forms
  - Developed live resume preview functionality
  - Created multiple resume templates
  - Implemented PDF download feature
  - Handled UI styling and responsiveness
  - Managed frontend feature branches

- Student 2 – DevOps    ( ITBNM-2313-0010  ,       D.V. Lashini Chamodi )
  - Set up GitHub repository and branch rules
  - Managed Git workflow and pull requests
  - Implemented CI pipeline using GitHub Actions
  - Configured deployment on Netlify/Vercel
  - Created and maintained project documentation
  - Reviewed and merged pull requests
 

## Live Preview
https://smartresumesite.netlify.app/ 

---


## Git Workflow
Feature branches + Pull Requests + CI/CD

## CI/CD Pipeline

This project uses GitHub Actions for Continuous Integration and Netlify for Continuous Deployment.

Workflow file location: `.github/workflows/ci.yml`

### Continuous Integration (CI)
- Triggered on every push and pull request
- Automatically checks the project build
- Ensures code stability before merging

### Continuous Deployment (CD)
- The project is deployed using Netlify
- Deployment happens automatically after merging to the main branch
- Provides a live URL for the application

