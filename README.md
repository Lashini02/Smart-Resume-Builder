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
 

## Live Preview
https://smartresumesite.netlify.app/ 

---


## Git Workflow
Feature branches + Pull Requests + CI/CD

## CI/CD Pipeline

This project uses GitHub Actions for Continuous Integration and Netlify for Continuous Deployment.

### Continuous Integration (CI)
CI is triggered on:

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

---

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
