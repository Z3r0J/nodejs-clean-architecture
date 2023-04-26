# Awesome Project to get started with Clean Architecture (NodeJs)

This is a starter project for building Node.js applications using clean architecture principles and TypeORM.

## Getting Started

#

### Prerequisites

- Nodejs 16.x or later
- npm or yarn
- your prefer database: mysql, mariadb, postgres, sqlite, mssql, oracle

### Installation

1. Clone this repository

   ```bash
   git clone https://github.com/Z3r0J/nodejs-clean-architecture.git <your-project-name>
   ```

2. Install the dependencies
   ```bash
   cd <your-project-name>
   npm install or yarn install
   ```
3. Database Configuration

   Create an `.env` file base on the `.env.example` file

   ```bash
   cp .env.example .env
   ```

## Usage

#

1. Start Application

   ```cmd
   npm start
   ```

2. Go to https://localhost:3000/

### Project structure

#

```bash
.
├── src/
|   |--application/         #
|   |   |--dtos/            #
|   |   |--helpers/         #
|   |   |--interfaces/      #
|   |   |--services/        #
|   |--config/              #
|   |--domain/              #
|   |   |--entities/        #
|   |--error-handling/      #
|   |--infrastructure/      #
|   |   |--repositories/    #
|   |   |--typeorm.config.ts    #
|   |--interfaces/      #
|   |   |--controllers/     #
|   |   |--middlewares/     #
|   |   |--routes/     #
```

### This project was made with TypeORM and Express to get done the clean architecture with NodeJs

&nbsp;
&nbsp;
&nbsp;

#### Made with ❤ by Jean Carlos Reyes
