## ArduinoWeather Backend
This folder contains the backend for the ArduinoWeather project.  
  
It makes use of Node.js, NPM as package manager and Typescript as a programming language.  
Import libraries in the repo are Express.js (API framework) and Sequelize (ORM framework).  
  
The API has the following endpoints:
* Weather
  * Get current weather: ```GET /api/weather/now```
  * Get all weather: ```GET /api/weather/all```
  * Get weather by date: ```GET /api/weather/:startDate/:endDate```
* User
  * User log in: ```POST /api/user/login```
  * User sign up: ```POST /api/user/signup```
  
The API makes use of a MySQL localhost database on port 3306. Feel free to clone and modify this backend setup for other purposes.  
To modify or add routes, you can simply do the following steps:
1. Create a new controller in the controller folder.
2. Add a function similar to the existing ones.
3. Import the controller in the router class and define a new route.

## Project setup
Node.js and NPM have to be installed on the machine.  
  
First install all the dependencies with NPM
```
npm install
```

Run the backend on port 3000
```
npm run start
```

### Docker
Dockerize this!
```
docker build -t {PREFERRED_TAG_NAME} .
```

Run the image
```
docker run -d --network=host --name={DOCKER_CONTAINER_NAME} {IMAGE_NAME}
```
