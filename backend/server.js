require("dotenv").config();
const express = require("express");
const cors = require("cors");
const formRoutes = require("./src/routes/formRoutes");

const app = express();

const allowedOrigins = [
  'https://praxxiiglobal.com',
  'https://www.praxxiiglobal.com',
  'http://localhost',
  'http://localhost:5006',
  'http://localhost:5173',
  'http://localhost:5174',

];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
}));
app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log("Origin:", req.headers.origin);
  next();
});

app.get("/", (req, res) => {
  res.send("Praxxii Global Backend is Running!");
});

app.use("/api/form", formRoutes);

// ✅ Start Server
const PORT = process.env.PORT || 5006;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server successfully started on port ${PORT}`);
});

// ✅ Global Error Handler
app.use((err, req, res, next) => {
  console.error('[UNHANDLED ERROR]', err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: 'Something went wrong',
  });
});
