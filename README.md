# 🔓 Open Nudge
An web app where professionals meet non-profit projects.

## 🔬 Technologies
This project was developed with the following technologies
- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [SQLite3](https://www.sqlite.org/index.html)
- [Knex.js](http://knexjs.org/)

## ✔ Premise
Open nudge is a open source project-finding platform for skilled people to find meaningful projects to work on to obtain experience. Open source or non-profit organizations can register their projects on Open Nudge to developers, designers, and other talents find them.

## 💻 Executing
Open nudge front-end client and back-end services are two separate systems and node packages; therefore, in order to run Open Nudge locally you will need to run both packages individually.

### 1. Cloning the repository
Having git installed on your machine you can execute the following git command to clone this repository into a local directory:

```
git clone https://github.com/lucasamonrc/open-nudge.git
```
After cloning the repository, you are ready to install the modules for the web (front-end client) and the server (back-end service) packages. You will need Node.js and npm installed in your machine for the next steps.

### 2. Running the server
Inside the server directory follow the following steps:

1. Install node dependencies:
```
npm install
```
2. Execute knex migrations:
```
npm run knex:migrate
```
3. Execute knex seeds:
```
npm run knex:seed
```

These steps only need to be executed before the first time the server is run.

After completing these steps, execute the following command in order to start the server:
```
npm start
```

This should get the server started at http://localhost:3333 and ready to receive requests from the front-end client.

### 3. Starting Front-end client
This part is way more straightforward than starting the server. All you need to do is to navigate to the web directory and execute the `npm start` command.

After you have done this, Open Nudge front-end client will start being executed at http://localhost:3000.


## :memo: License
This project in under the MIT license. Refer to [LICENSE](LICENSE.md) file for more details.

---
Developed by Lucas Castro
