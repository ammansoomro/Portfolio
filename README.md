<h3 align="center">Portfolio Website - React JS</h3>

  <p align="center">
    A well designed portfolio to showcase your skills and achievements. A beautiful and functional portfolio with smooth animations. Built using React JS, Sanity, Framer-motion.
    <br />
    <a href="https://amman-portfolio.netlify.app/" target="_blank" rel="noreferrer"><strong>Portfolio Website</strong></a>
    <br />
    <a href="https://amman-portfolio.netlify.app/" target="_blank" rel="noreferrer">View Demo</a>
    ·
    <a href="https://github.com/ammansoomro/Portfolio/issues">Report Bug</a>
    ·
    <a href="https://github.com/ammansoomro/Portfolio/issues">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project
The website is entirely constructed using React JS and Sanity, designed to be user-friendly and easily editable. You don't need advanced expertise to modify content; basic understanding is sufficient to fill in the gaps.

It boasts complete responsiveness and performs seamlessly across various devices, offering a highly interactive experience. Content can be effortlessly modified using the user-friendly Content Management Service (CMS) provided by Sanity. Thanks to this feature, data adjustments are possible at any time, even after the website has been deployed.

### Built With

- [React.js](https://reactjs.org/)
- [Sanity](https://www.sanity.io/)
- [SCSS](https://sass-lang.com/)
- [Netlify](https://www.netlify.com/)

<!-- GETTING STARTED -->

## Getting Started

Getting started, to avoid hassle at a later part, go ahead and create an account in Sanity and follow the displayed commands!

### Prerequisites

- Create a backend folder and navigate the terminal to it.
  ```
  cd backend
  ```
- Install the sanity client
  ```sh
  npm install -g @sanity/cli
  ```
- Login using your preferred way!
- Enter the project name, press Y and use the default settings.
- Now use the command
  ```sh
  sanity start
  ```
- Now run the following in the terminal
  ```
  sanity manage
  ```
- Your project dashboard page pops up in your browser
  > These are the most important steps
- Note your project ID for future reference
- Click on **Token** -> **Add new Token**
- Give it a name and copy the token as it can be viewed only once.
- Now add your react browser address i.e. your localhost in **CORS ORIGIN**
- You are mostly done with setting up the backend.

### Installation

1. After completing the prerequistes, go ahead with the following steps.
2. Clone the repo
   ```sh
   git clone https://github.com/ammansoomro/Portfolio.git
   ```
3. Install NPM packages in the folders [Frontend React](/frontend_react).
   > Make sure you are in the right folder path in the terminal.
   ```sh
   npm install
   ```
4. Replace the [Backend Sanity](/backend_sanity) file contents with your sanity file contents (entire folder).
5. Run the command and a page with your sanity documents appears.
   > Make sure you are in the right folder path in the terminal.
   ```
   sanity start
   ```
6. Add your details to the necessary documents, refer [Sanity](https://www.sanity.io/docs) for better understanding.
7. Create a .env file in the [Frontend React](/frontend_react) directory with the following
   ```
   REACT_APP_SANITY_PROJECT_ID= "your project id"
   REACT_APP_SANITY_TOKEN= "your api token"
   ```
8. Run the final command in the [Frontend React](/frontend_react).
   > Make sure you are in the right folder path in the terminal.
   ```
   npm start
   ```
9. Your website is up and running. Make the necessary changes and deploy it.
10. To add or change necessary documents in **Sanity Studio** refer the [Sanity Docs](https://sanity.io/docs), it is very intuitive and easy.

<!-- CONTACT -->

## Contact

Amman Soomro - [@AmmanSoomro](https://instagram.com/ammansoomro) - amman.soomro.as@gmail.com

Project Link: [https://amman-portfolio.netlify.app/](https://amman-portfolio.netlify.app/)
