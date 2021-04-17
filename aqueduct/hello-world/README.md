# Hello World Aqueduct

## Description

Aqueduct is an extensible HTTP framework for building REST APIs on top of the Dart VM. It includes a statically-typed ORM, OAuth 2.0 provider, automated testing libraries and OpenAPI 3.0 integration.

## Running the Application Locally

Get dependencies with **pub get**

Run `aqueduct serve` from this directory to run the application. For running within an IDE, run `bin/main.dart`. By default, a configuration file named `config.yaml` will be used.

To generate a SwaggerUI client, run `aqueduct document client`.

## Running Application Tests

To run all tests for this application, run the following in this directory:

```
pub run test
```

The default configuration file used when testing is `config.src.yaml`. This file should be checked into version control. It also the template for configuration files used in deployment.

## Deploying an Application

See the documentation for [Deployment](https://aqueduct.io/docs/deploy/).