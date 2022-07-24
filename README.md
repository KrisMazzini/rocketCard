# Rocketcard

This application allows the user to generate a business card containing their GitHub profile basic information. 
It uses GitHub's own public API to get these data for a given username.

Once the card is succesfully generated, the user can export it by saving it as PNG or JPEG.

![Rocketcard](https://user-images.githubusercontent.com/93556620/180647359-07b86231-a981-42fa-a8d2-92ae757e81a8.png)

## How it works

1. Insert your GitHub username in the search box and click the search icon.

![Search Profile](https://user-images.githubusercontent.com/93556620/180647072-1e64eb93-1aa6-4fe3-9c26-47a9cfc681f4.mov)

2. If a username is not provided or if the username doesn't exist, there will be an error alert

<!-- ![Username not informed](https://user-images.githubusercontent.com/93556620/180647086-a31b8f02-bf4b-4d09-a39e-ee92e2c63712.mov) -->

![User not found](https://user-images.githubusercontent.com/93556620/180647105-a2ce7626-ea81-494d-98aa-1bdab09c741d.mov)

3. Generate a random background

![Generate Background](https://user-images.githubusercontent.com/93556620/180647121-0df84794-8877-44bc-bed5-6117c8656607.mov)

4. Export the card

![Export](https://user-images.githubusercontent.com/93556620/180647129-c158313a-2837-428a-8ea1-5aa0ec530824.mov)

## How to run

In order to run this application: 

1. clone this repository using ```git clone git@github.com:KrisMazzini/rocketCard.git``` ... or simply download the project zip;
2. open the console at the project directory;
3. install the dependencies using ```npm i``` or ```npm install```;
4. execute ```npm run dev``` in the command line;
5. open <http://localhost:3000> on your browser;