# Learn Microservices with Spring Boot 3 - Chapter 8 - 1/4
This repository contains the source code of the practical use case described in the book [Learn Microservices with Spring Boot 3 (3rd Edition)](https://link.springer.com/book/10.1007/978-1-4842-9757-5).
The book follows a pragmatic approach to building a Microservice Architecture. You start with a small monolith and examine the pros and cons that come with a move to microservices.

## Chapter 8 version 1/4

The Chapter 8's source code is divided into four parts for a better understanding of how the system evolves when we start introducing _Common Patterns in Microservice Architectures_.

In this first part, we introduce the Gateway pattern, that helps abstracting the internal architecture from the outside by routing external requests to the corresponding microservice. In the [next iteration (2/4)](https://github.com/Book-Microservices-v3/chapter08b), we'll also add Service Discovery and Load Balancing.

![Logical View - Chapter 8 1/4](resources/microservice_patterns-GW-concept.png)

The main concepts included in this first part of the chapter are:

* Why do we need a Gateway? The problem, explained.
* The Gateway Pattern: how it works.
* Spring Cloud Gateway: core concepts.
* A practical implementation of the Gateway, going through the required changes and additions to our code.

As usual, the book follows a hands-on approach, so you learn everything based on this microservice case study.

## Running the app

Requirements:

* JDK 17
* Node.js v18.16.0
* npm 9.7.1
* RabbitMQ 3.12.2

1. You need a RabbitMQ server running. Run the server according to the instructions for your OS, for example:
    ```bash
    $ rabbitmq-server
    ```
1. To start the Multiplication microservice, you can use the command line with the included Maven wrapper:
    ```bash
    multiplication$ ./mvnw spring-boot:run
    ```
2. To start the Gamification microservice, you do the same from its corresponding folder:
    ```bash
    gamification ./mvnw spring-boot:run
    ```
3. To start the Gateway microservice, you do the same from its corresponding folder:
    ```bash
    gateway ./mvnw spring-boot:run
    ```
2. The React application can be started with npm. First, you need to download the dependencies with:
    ```bash
    challenges-frontend$ npm install
    ```
3. Then, you start the server with:
    ```bash
    challenges-frontend$ npm start
    ```

> **_Note:_**
> 
> In the [final version of our code](https://github.com/Book-Microservices-v3/chapter08d), we use Docker to start our complete system easily. However, it's not yet introduced at this point in the book, so we're starting all these components manually.

Once the backend and the fronted are started, you can navigate to `http://localhost:3000` in your browser and start resolving multiplication challenges. From the user's perspective, there are no differences between this version and the one we completed in Chapter 7. We do know that all requests are now going through the Gateway service, and we gained some new advantages as detailed in the book.

![Application - Screenshot](resources/app-chapter7-after10.png)

## Questions

* Do you have questions about how to make this application work?
* Did you get the book and have questions about any concept explained within this chapter?
* Have you found issues using updated dependencies?

Don't hesitate to create an issue in this repository and post your question/problem there. 

## Purchase
You can buy the book online from these stores:
* [Apress](https://link.springer.com/book/10.1007/978-1-4842-9757-5)
* [Amazon](https://www.amazon.com/Learn-Microservices-Spring-Boot-Containerization/dp/1484297563)
and other online stores.
