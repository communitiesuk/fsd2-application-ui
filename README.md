# fsd2-application-ui

Prototype UI to illustrate a possible solution space for the FSD project, in terms of enabling
potential Applicants to locate and apply for Funds.

Part of the fsd-proto-2 project.

The "living" backlog for this project can be found in the
[Prototype Backlog](docs/prototype-backlog.md) document.

PLEASE NOTE This is a PROTOTYPE and therefore disposable. There are no tests. There are no
Code Reviews. Just prototype code.

## Working with the project

To work with this project the only install you need is the most recent
version of [Docker Desktop](https://www.docker.com/products/docker-desktop).

### Set up the project

You must complete ALL these steps in the stated order.

#### 1. Build Docker containers

Given that you have Docker installed OK, build the project like this:
```shell script
$ docker-compose build
```

This is a one-off step although you will have to repeat it if you fundamentally
change the project.

#### 2. Install front-end (npm) packages

For Docker reasons you _must_ install npm packages through the Docker Compose service. Do not install them
natively on your host. For reasons see [this Docker blog post](https://www.docker.com/blog/keep-nodejs-rockin-in-docker/).

Install npm packages like this:
```shell script
docker-compose run ui npm install
```

### Start the dev server

```shell script
$ docker-compose up
```

The ui service will be exposed at http://localhost:8081/

### Interact!

#### Clearing down Fund types

It is possible to delete all the fund types. To do so, visit the URL but with the added
query string `?showControls=yes`, so for example http://localhost:8081/?showControls=yes

Doing so will yield a large yellow "Clear all Available Funds" button at the top of the
screen. Clicking this button will send a DELETE request to the Event Hub.

BEWARE: No confirmation is sought! It is instant.

The facility is intended to enable users to control the demo domain without tech
intervention.

