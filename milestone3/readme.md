# Dynamic Interactive Resume Builder

This project is a **Dynamic Interactive Resume Builder** created using **HTML**, **CSS**, and **TypeScript**. It allows users to generate a resume dynamically by filling out a form with their personal details, education, work experience, and skills. Once the user submits the form, the resume is displayed dynamically without the need for page refreshes.

## Features

- **Form Input**: Users can fill in their personal information, education, work experience, and skills through a form.
- **Real-time Resume Generation**: The resume is generated dynamically and instantly as the form is submitted.
- **Responsive Design**: The application is designed to work seamlessly on both desktop and mobile devices.
- **TypeScript Integration**: TypeScript is used to handle the interactivity and logic behind generating the resume in real-time.
- **Interactive Experience**: The project includes a button to submit the form and display the resume below without refreshing the page.

## Sections

The project includes the following sections in the form and dynamically generated resume:
- **Personal Information**: Fields for Name, Email, and Phone Number.
- **Education**: A text area for users to input their educational background.
- **Work Experience**: A section for users to detail their work experience.
- **Skills**: A text area for users to list their skills.

## Technology Stack

- **HTML**: Used for structuring the form and the resume.
- **CSS**: For styling the form and the resume layout, ensuring it is visually appealing and responsive.
- **TypeScript**: For adding functionality to the form and dynamically generating the resume content based on user input.

## Getting Started

### Prerequisites

To run the project, you will need to have the following installed on your system:
- A modern web browser (such as Chrome, Firefox, or Edge)
- [Node.js](https://nodejs.org/) (for compiling TypeScript, if needed)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/dynamic-resume-builder.git
   ```
   
2. **Navigate to the project directory**:
   ```bash
   cd dynamic-resume-builder
   ```

3. **Install dependencies (if any)**:
   ```bash
   npm install
   ```

4. **Compile TypeScript files**:
   If you are using TypeScript, compile the TypeScript files into JavaScript.
   ```bash
   tsc
   ```

### Running the Project

1. Open the `index.html` file in your preferred web browser.
2. Fill out the form fields with your personal information, education, experience, and skills.
3. Click the "Generate Resume Below" button, and your resume will be displayed dynamically below the form.

## Project Structure

- **index.html**: The main HTML file containing the structure of the form and resume.
- **style.css**: CSS file for styling the form and resume, ensuring responsiveness and aesthetics.
- **app.ts**: TypeScript file for handling the logic of capturing form inputs and generating the resume dynamically.

## Deployment

You can deploy this project using Vercel. Here's how you can do it:

1. Push your project to a GitHub repository.
2. Link your repository to Vercel.
3. Deploy the project to make it accessible online.
