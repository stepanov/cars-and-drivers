# Cars and drivers demo app

## Pre-request

* node
* mysql

## Build and run

### Development mode

**Clone the project**
```
$ git clone git@github.com:stepanov/cars-and-drivers.git
```

**Configuration**
```
$ copy .env.example .env
```

**Build the project**
```
$ npm install
```

**Create a database**
```
$ mysqladmin -uroot create cars_and_drivers
```

**Run migrations**
```
$ npx typeorm migration:run
```

**Run the project**
```
$ npm run start:dev
``` 