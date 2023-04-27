# Awesome Project to get started with Clean Architecture (NodeJs)

<div style="display:flex; justify-content:space-between;">
<img src="https://th.bing.com/th/id/R.4dfe01148ebce3a9de8ab55279b0b4bc?rik=Cb%2f46GSGyzIMJA&pid=ImgRaw&r=0" width="150" height="90">
<h2 style="justify-content:center;">+</h2>
<img src="https://adityasingh.gallerycdn.vsassets.io/extensions/adityasingh/expressjs-snippets/0.0.1/1639291392716/Microsoft.VisualStudio.Services.Icons.Default" width="150"/>
<h2 style="justify-content:center;">+</h2>
<img src="https://user-images.githubusercontent.com/30929568/112730670-de09a480-8f58-11eb-9875-0d9ebb87fbd6.png" width="200" height="90">
</div>
<br/>
<br/>

This is a starter project for building Node.js applications using clean architecture principles and TypeORM.

## Getting Started

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

1. Start Application

   ```cmd
   npm start
   ```

2. Go to https://localhost:3000/

### Project structure

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

##### This project was made with TypeORM and Express to get done the clean architecture with NodeJs

&nbsp;
&nbsp;
&nbsp;

##### Made with ❤ by Jean Carlos Reyes
