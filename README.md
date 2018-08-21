# mean4

This seed repo serves as an Angular or MEAN starter for anyone looking to get up and running with MEAN and Angular fast.
* Node server with routing and REST APIs for register, login and authentication.
* Best practices in file and application organization for Angular.
* Ready to go build system using Webpack for working with TypeScript.

## Getting started
## Dependencies
What you need to run this app:
* `node` and `npm`
* Ensure you're running the latest versions Node `v8.x.x`+ (or `v9.x.x`) and NPM `5.x.x`+
* Angular CLI `v6.x.x`
* MongoDB installed on the system

## Get the code
* Either clone this repository or fork it on GitHub and clone your fork
```
git clone https://github.com/im-Aasif/mean4.git
cd mean4
```
## App server
The backend application server is a NodeJS application that relies on third party npm packages. You need to install these:
* Install local dependencies (from the project root folder):
```
npm install
```
(This will install the dependencies declared in the mean4/package.json file)

## Client App

The client application is an Angular application which is built using Angular CLI.

* Install local dependencies (from the project root folder):
```
cd ng-src
npm install
```
(This will install the dependencies declared in the mean4/ng-src/package.json file)

## Build the client app
* Build client application:
```
cd ng-src
# development
ng build 
# production
ng build --prod 
cd ..
```

## Running
### Start the server
* Run the server (from the project root folder):
```
npm start
```
* Browse to the application at [http://localhost:3000]


