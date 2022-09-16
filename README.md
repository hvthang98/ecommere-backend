## Install
### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

Or 

```
cp .env.example .env
```

```
npm install
```

### Run

```
npm run server
```

### Seed Database
You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

### Sample User Logins

```
admin@example.com (Admin)
123456

```

## Swagger
```
local: http://localhost:5000/api-docs

develop: 
```
