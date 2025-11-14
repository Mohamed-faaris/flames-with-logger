# FLAMES Calculator with Logger

A web-based FLAMES calculator that determines relationship compatibility between two people. The application logs all calculations to a MongoDB database for record-keeping.

## 🔥 What is FLAMES?

FLAMES is a popular relationship compatibility game that stands for:
- **F** - Friends
- **L** - Love
- **A** - Affection
- **M** - Marriage
- **E** - Enemy
- **S** - Sibling

## ✨ Features

- Interactive web interface for FLAMES calculation
- Real-time relationship compatibility results
- MongoDB integration for logging all calculations
- RESTful API endpoint for storing results
- Responsive design with Bootstrap
- Cross-Origin Resource Sharing (CORS) enabled

## 🚀 Live Demo

The application is deployed and accessible at: https://flames-a246.onrender.com/

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/) (local installation or MongoDB Atlas account)

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Mohamed-faaris/flames-with-logger.git
   cd flames-with-logger
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory based on `env.sample`:
   ```bash
   cp env.sample .env
   ```

4. Configure your environment variables in `.env`:
   ```
   PORT=3000
   MongoDB_URL=mongodb://localhost:27017/flames
   ```
   
   For MongoDB Atlas, use:
   ```
   MongoDB_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/flames
   ```

## ▶️ Usage

### Development Mode

Start the server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

### Using the Application

1. Open your browser and navigate to `http://localhost:3000`
2. Enter two names in the input fields
3. Click the "Calculate" button
4. View your FLAMES result!

## 📡 API Endpoints

### GET /
Returns the main HTML page with the FLAMES calculator interface.

### POST /store
Stores a FLAMES calculation result in the database.

**Request Body:**
```json
{
  "name1": "John",
  "name2": "Jane",
  "relation": "Love"
}
```

**Response:**
```json
{
  "msg": "OK"
}
```

## 🛠️ Technologies Used

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB with Mongoose
  - dotenv for environment configuration
  - CORS for cross-origin requests

- **Frontend:**
  - HTML5
  - CSS3
  - JavaScript (Vanilla)
  - Bootstrap 5

## 📁 Project Structure

```
flames-with-logger/
├── static/
│   ├── index.html      # Main HTML page
│   ├── script.js       # FLAMES calculation logic
│   ├── style.css       # Custom styles
│   └── svg/            # Favicon and icons
├── index.mjs           # Main server file
├── package.json        # Project dependencies
├── env.sample          # Sample environment variables
└── README.md           # Project documentation
```

## 🌐 Deployment

This application is deployed on [Render.com](https://render.com/). To deploy your own instance:

1. Create a Render account
2. Create a new Web Service
3. Connect your GitHub repository
4. Set environment variables in Render dashboard
5. Deploy!

## 📝 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port number | `3000` |
| `MongoDB_URL` | MongoDB connection string | `mongodb://localhost:27017/flames` |

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

ISC

## 👤 Author

Mohamed Faaris

---

Made with ❤️ and 🔥
