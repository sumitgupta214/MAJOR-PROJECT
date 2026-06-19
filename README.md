# MAJOR-PROJECT

A Dynamic Website built as a Major Project. This is a full-stack web application that demonstrates modern web development practices with a focus on user authentication, data persistence, and interactive features.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [License](#license)

## ✨ Features

- **User Authentication**: Secure user registration and login using Passport.js
- **Session Management**: Persistent session handling with MongoDB
- **File Upload**: Cloud-based file storage using Cloudinary
- **Data Validation**: Schema validation with Joi
- **Location Services**: Integration with Mapbox for location-based features
- **Flash Messages**: User feedback through connect-flash
- **Template Rendering**: Dynamic views using EJS templating engine
- **Responsive Styling**: Custom CSS for responsive design

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js (v20.10.0)
- **Framework**: Express.js (v4.19.2)
  - Web server and routing
  - Middleware support
  - RESTful API development

### Frontend
- **Template Engine**: EJS (v3.1.9) with EJS-Mate (v4.0.0)
  - Dynamic HTML rendering
  - Template inheritance and layouts
- **Styling**: CSS
  - Custom styling
  - Responsive design

### Database
- **Primary DB**: MongoDB with Mongoose (v8.2.4)
  - Data modeling and validation
  - Schema management
- **Session Store**: MongoDB with connect-mongo (v5.1.0)
  - Persistent session storage

### Authentication & Authorization
- **Passport.js** (v0.7.0)
  - Authentication framework
  - Session management
- **Passport-Local** (v1.0.0)
  - Local strategy for username/password
- **Passport-Local-Mongoose** (v8.0.0)
  - Mongoose plugin for authentication

### File Management
- **Multer** (v1.4.5-lts.1)
  - File upload handling
- **Cloudinary** (v1.41.3)
  - Cloud image storage and management
- **Multer-Storage-Cloudinary** (v4.0.0)
  - Integration layer for Multer and Cloudinary

### Utilities
- **Joi** (v17.12.2)
  - Data validation and schema definition
- **Dotenv** (v16.4.5)
  - Environment variable management
- **Method-Override** (v3.0.0)
  - HTTP method override middleware
- **Cookie-Parser** (v1.4.6)
  - Cookie parsing middleware
- **Connect-Flash** (v0.1.1)
  - Flash message middleware
- **Express-Session** (v1.18.0)
  - Session middleware
- **Mapbox SDK** (v0.16.0)
  - Location and mapping services

### Development
- **Nodemon** (v3.1.0)
  - Auto-restart on file changes

## 🏗️ Architecture

### MVC Architecture

The project follows the Model-View-Controller (MVC) design pattern:

```
├── Models/
│   └── Data models and schemas
├── views/
│   └── EJS templates (V - View layer)
├── controllers/
│   └── Business logic handlers (C - Controller layer)
├── routes/
│   └── API endpoints and routing
├── Public/
│   └── Static assets (CSS, images, client-side JS)
├── utils/
│   └── Helper functions and utilities
├── middleware.js
│   └── Custom middleware
└── schema.js
    └── Data validation schemas
```

### Application Flow

1. **Request** → Express routes
2. **Authentication** → Passport middleware
3. **Validation** → Joi schema validation
4. **Processing** → Controller logic
5. **Database** → Mongoose models with MongoDB
6. **Response** → EJS template rendering or JSON
7. **Session** → MongoDB session store

### Key Components

| Component | Purpose |
|-----------|---------|
| **app.js** | Main application entry point |
| **Models/** | Mongoose schemas for data modeling |
| **controllers/** | Business logic and request handlers |
| **routes/** | API endpoints and routing rules |
| **views/** | EJS templates for HTML rendering |
| **Public/** | Static assets (CSS, images, JS) |
| **middleware.js** | Custom middleware functions |
| **schema.js** | Joi validation schemas |
| **cloudConfig.js** | Cloudinary configuration |
| **init/** | Initialization scripts |
| **utils/** | Helper functions and utilities |

## 📁 Project Structure

```
MAJOR-PROJECT/
├── Models/                 # Database models
├── Public/                 # Static assets
│   ├── CSS/
│   ├── Images/
│   └── JavaScript/
├── controllers/            # Request handlers
├── routes/                 # API routes
├── views/                  # EJS templates
├── utils/                  # Utility functions
├── init/                   # Initialization
├── app.js                  # Main application
├── middleware.js           # Middleware setup
├── cloudConfig.js          # Cloudinary config
├── schema.js               # Validation schemas
├── package.json            # Dependencies
└── .gitignore             # Git ignore rules
```

## 🚀 Installation

### Prerequisites
- Node.js v20.10.0 or higher
- MongoDB instance
- Cloudinary account
- Mapbox account

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/sumitgupta214/MAJOR-PROJECT.git
   cd MAJOR-PROJECT
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables** (see [Environment Variables](#environment-variables))

4. **Start the application**
   ```bash
   npm start
   ```
   
   Or with Nodemon for development:
   ```bash
   npx nodemon app.js
   ```

## 💻 Usage

### Starting the Server

```bash
npm start
```

The application will start and be accessible at `http://localhost:3000` (or your configured port).

### Development Mode

```bash
npx nodemon app.js
```

This will automatically restart the server when files change.

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name

# Session
SESSION_SECRET=your_session_secret_key

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Mapbox
MAPBOX_TOKEN=your_mapbox_token

# Application
APP_NAME=MAJOR-PROJECT
```

## 📦 Dependencies Overview

| Package | Version | Purpose |
|---------|---------|---------|
| express | ^4.19.2 | Web framework |
| mongoose | ^8.2.4 | MongoDB ORM |
| passport | ^0.7.0 | Authentication |
| cloudinary | ^1.41.3 | Cloud storage |
| ejs | ^3.1.9 | Template engine |
| joi | ^17.12.2 | Data validation |
| dotenv | ^16.4.5 | Environment config |

## 📝 License

ISC

---

**Created**: May 25, 2024  
**Last Updated**: October 19, 2024  
**Repository**: [sumitgupta214/MAJOR-PROJECT](https://github.com/sumitgupta214/MAJOR-PROJECT)
