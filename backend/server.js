require("dotenv").config();
const express = require("express");
const cors = require("cors");
const formRoutes = require("./src/routes/formRoutes");
const geoip = require('geoip-lite');

const app = express();

const allowedOrigins = [
  'https://praxxiiglobal.com',
  'https://www.praxxiiglobal.com',
  'http://localhost',
  'http://localhost:5006',
  'http://localhost:5173',
  'http://localhost:5174',
];

// Trust proxy to get real IP addresses
app.set('trust proxy', true);

// Geo-blocking middleware function
const geoBlockMiddleware = (req, res, next) => {
  try {
    // Get client IP address
    const ip = getClientIP(req);
    
    // Skip geo-blocking for localhost/development
    if (isLocalhost(ip)) {
      console.log(`[GEO-BLOCK] Localhost access allowed: ${ip}`);
      return next();
    }
    
    // Get country information
    const geo = geoip.lookup(ip);
    
    // Log access attempt
    console.log(`[GEO-BLOCK] Access attempt from IP: ${ip}, Country: ${geo?.country || 'Unknown'}`);
    
    // Check if from allowed countries (US or Canada)
    if (!geo || !['US', 'CA'].includes(geo.country)) {
      console.log(`[GEO-BLOCK] ❌ BLOCKED access from ${geo?.country || 'Unknown'} (IP: ${ip})`);
      
      return res.status(403).json({
        error: 'Access Restricted',
        message: 'This service is only available in the United States and Canada',
        country: geo?.country || 'Unknown',
        timestamp: new Date().toISOString()
      });
    }
    
    // Allow access for US and Canada
    console.log(`[GEO-BLOCK] ✅ Access granted for ${geo.country} (IP: ${ip})`);
    next();
    
  } catch (error) {
    console.error('[GEO-BLOCK] Error in geo-blocking middleware:', error);
    // In case of error, allow access (fail-open)
    next();
  }
};

// Helper function to get client IP with enhanced debugging
function getClientIP(req) {
  const forwarded = req.headers['x-forwarded-for'];
  const realIP = req.headers['x-real-ip'];
  const cfConnectingIP = req.headers['cf-connecting-ip']; // Cloudflare
  
  // Debug: Log all IP-related headers
  console.log(`[IP-DEBUG] All headers:`, {
    'x-forwarded-for': forwarded,
    'x-real-ip': realIP,
    'cf-connecting-ip': cfConnectingIP,
    'remote-addr': req.connection?.remoteAddress,
    'socket-addr': req.socket?.remoteAddress,
    'req-ip': req.ip
  });
  
  if (forwarded) {
    const ip = forwarded.split(',')[0].trim();
    console.log(`[IP-DEBUG] ✅ Using x-forwarded-for: ${ip}`);
    return ip;
  }
  
  if (realIP) {
    console.log(`[IP-DEBUG] ✅ Using x-real-ip: ${realIP}`);
    return realIP;
  }
  
  if (cfConnectingIP) {
    console.log(`[IP-DEBUG] ✅ Using cf-connecting-ip: ${cfConnectingIP}`);
    return cfConnectingIP;
  }
  
  const ip = req.connection?.remoteAddress || 
             req.socket?.remoteAddress || 
             req.ip || 
             '127.0.0.1';
  
  const cleanIP = ip.replace(/^::ffff:/, '');
  console.log(`[IP-DEBUG] ⚠️ Using fallback IP: ${cleanIP}`);
  return cleanIP;
}

// Helper function to check if IP is localhost
function isLocalhost(ip) {
  const localhostIPs = [
    '127.0.0.1',
    '::1',
    'localhost',
    '0.0.0.0'
  ];
  
  const isLocal = localhostIPs.includes(ip) || 
         ip.startsWith('192.168.') || 
         ip.startsWith('10.') || 
         ip.startsWith('172.16.') ||
         ip.startsWith('172.17.') ||
         ip.startsWith('172.18.') ||
         ip.startsWith('172.19.') ||
         ip.startsWith('172.20.') ||
         ip.startsWith('172.21.') ||
         ip.startsWith('172.22.') ||
         ip.startsWith('172.23.') ||
         ip.startsWith('172.24.') ||
         ip.startsWith('172.25.') ||
         ip.startsWith('172.26.') ||
         ip.startsWith('172.27.') ||
         ip.startsWith('172.28.') ||
         ip.startsWith('172.29.') ||
         ip.startsWith('172.30.') ||
         ip.startsWith('172.31.');
  
  console.log(`[IP-DEBUG] Is localhost check for ${ip}: ${isLocal}`);
  return isLocal;
}

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
}));

app.use(express.json());

// Apply geo-blocking middleware BEFORE other routes
app.use(geoBlockMiddleware);

app.use((req, res, next) => {
  console.log(`[DEBUG] Incoming: ${req.method} ${req.url}`);
  next();
});

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log("Origin:", req.headers.origin);
  next();
});

app.get("/", (req, res) => {
  res.send("Praxxii Global Backend is Running!");
});

// Optional: Test endpoint to check geo-blocking (remove in production)
app.get("/api/test-geo", (req, res) => {
  const ip = getClientIP(req);
  const geo = geoip.lookup(ip);
  
  res.json({
    ip: ip,
    country: geo?.country || 'Unknown',
    allowed: ['US', 'CA'].includes(geo?.country),
    geoData: geo,
    isLocalhost: isLocalhost(ip),
    headers: {
      'x-forwarded-for': req.headers['x-forwarded-for'],
      'x-real-ip': req.headers['x-real-ip'],
      'user-agent': req.headers['user-agent']
    }
  });
});

app.use("/api", formRoutes);

// ✅ Start Server
const PORT = process.env.PORT || 5006;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server successfully started on port ${PORT}`);
  console.log(`🌍 Geo-blocking active: Only USA and Canada allowed`);
  console.log(`🔍 Debug mode: IP detection logging enabled`);
});

// ✅ Global Error Handler
app.use((err, req, res, next) => {
  console.error('[UNHANDLED ERROR]', err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: 'Something went wrong',
  });
});