# Cars and drivers demo app

## Pre-request

* node
* mysql
* docker

## Build and run

### Docker

**Clone the project**
```
$ git clone git@github.com:stepanov/cars-and-drivers.git
```

**Configuration**
```
$ copy .env.example .env
```

**Run docker**
```
$ docker-compose -f docker-compose.yml up --build
```

**Run migrations**
```
$ docker-compose run app npx typeorm migration:run
```

#### Test

App will be available locally at http;//localhost:3010 (if you change the port then use it instead).
GraphQL playground: http://localhost:3010/graphql

##### Queries

**Get Cars***
```
  query getCars {
    cars{
      plate_number
      brand
      drivers {
        name
        phone
      }
    }
  }
```

** Get Car by ID**
```
  query getCar {
    car(
      id:1
    ) {
      plate_number
      brand
    }
  }
```

**Get Drivers**
```
  query getDrivers {
    drivers {
      name
      phone
    }
  }
```

**Get Driver By ID**
```
  query getDriver {
    driver(
      id:1
    ) {
      name
      phone
    }
  }
```

##### Mutations

**Add a car**
```
  mutation createCar {
    createCar(
      plate_number:"ABC124"
      brand: "Opel"
      note:"My second car"
    ) {
      id
    }
  }
```

**Add a driver**
```
  mutation createDriver {
    createDriver(
      name: "Bobby Torn"
      phone:"1234557674"
      note:"The second driver"
    ) {
      id
    }
  }
```

**Update a driver**
```
  mutation updateDriver {
    updateDriver(
      id:2
      car_id:1
    ) {
      id
    }
  }
```

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