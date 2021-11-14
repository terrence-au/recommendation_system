# Cathay Hackathon - Recommendation System

This is a recommendation system fully built on recommendationRaccoon Engine and majorly referenced from the recommendationRaccoon Demo App

## Dependencies

* Async
* CSV
* Express
* Postgres
* Sequelize
* Node
* Raccoon
* Redis
* Underscore

## recommendationRaccoon Engine Repo

* <a href="https://github.com/guymorita/recommendationRaccoon" target="_blank">https://github.com/guymorita/recommendationRaccoon</a>

## recommendationRaccoon Demo App

* <a href="https://github.com/guymorita/Mosaic-Films---Recommendation-Engine-Demo" target="_blank">https://github.com/guymorita/Mosaic-Films---Recommendation-Engine-Demo</a>

## How to install locally

#### 1. Clone the repo
``` bash
git clone https://github.com/guymorita/Mosaic-Films---Recommendation-Engine-Demo.git
```

#### 2. Install dependencies
Navigate to folder
``` bash
cd Mosaic-Films---Recommendation-Engine-Demo
```
``` bash
npm install
```

#### 2a. Install a Redis (configure if necessary in lib/config.js)
``` bash
brew install redis
```

#### 2b. Install Postgres (configure if necessary in lib/config.js)
``` bash
brew install postgres
```
Start up postgres server
``` bash
postgres -D /usr/local/var/postgres
```
Create a database
``` bash
createdb mosaic
```

#### 4. Import Sample Data
``` bash
node lib/importItems.js
```

#### 3. Boot up servers in separate terminal windows
``` bash
redis-server
```
``` bash
postgres -D /usr/local/var/postgres
```
``` bash
node node-server.js
```

#### 5. It's ready! Try the home page
* http://localhost:3000/
