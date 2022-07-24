# Rocketcard

This application allows the user to generate a business card containing their GitHub profile basic information. 
It uses GitHub's own public API to get these data for a given username.

Once the card is succesfully generated, the user can export it by saving it as PNG or JPEG.

![Rocketcard](https://user-images.githubusercontent.com/93556620/180647359-07b86231-a981-42fa-a8d2-92ae757e81a8.png)

## How it works

1. Insert your GitHub username in the search box and click the search icon.
2. If a username is not provided or if the username doesn't exist, there will be an error alert
3. Generate a random background
4. Export the card

![How it works](https://user-images.githubusercontent.com/93556620/180647769-e4d5e3d9-dab9-4872-b912-0066a6354dc5.mov)

## How to run

Visit https://rocketcard-beta.vercel.app, or...

1. clone this repository using ```git clone git@github.com:KrisMazzini/rocketCard.git``` ... or simply download the project zip;
2. open the console at the project directory;
3. install the dependencies using ```npm i``` or ```npm install```;
4. execute ```npm run dev``` in the command line;
5. open <http://localhost:3000> on your browser;

## Techs

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />