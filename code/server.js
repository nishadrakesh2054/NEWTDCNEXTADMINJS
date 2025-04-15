import AdminJSExpress from "@adminjs/express";
import * as url from "url";
import express from "express";
import connectDatabase from "./db/Database.js";
import admin from "./src/admin/adminjsSetup.js";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import path from "path";
import os from "os";
import rateLimit from "express-rate-limit";

// all routes imported
import galleryRoutes from "./routes/galleryRoute.js";
import contactRoutes from "./routes/contactRoute.js";
import brandLogoRoutes from "./routes/brandRoute.js";
import getTouchRoutes from "./routes/getTouchRoute.js";
import heroRoutes from "./routes/heroRoute.js";
import academyRoute from "./routes/academyRoute.js";
import programRoutes from "./routes/programRoute.js";
import ageGroupRoutes from "./routes/ageGroupRoute.js";
import campsRoutes from "./routes/campsRoutes.js";
import gameRoute from "./routes/gameRoute.js";
import Career from "./routes/careerRoute.js";
import ThundersPayment from "./routes/TDCroute/PaymentRoute.js";
import authenticate from "./middleware/authenticateUser.js";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const PORT = 5000;
const app = express();

os.tmpdir = () => "D:\\temp";

const start = async () => {
  // Middleware to parse JSON requests
  app.use(express.json());
  app.use(cors());
  app.use(morgan("dev"));
  dotenv.config();

  app.use("/uploads", express.static(path.join(__dirname, "/public/uploads")));
  app.use(express.static(path.join(__dirname, "public")));

  // Connect to MongoDB
  await connectDatabase();

  // Add authentication to AdminJS
  const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
    admin,

    {
      authenticate,
      cookieName: "adminjs",
      cookiePassword: "sessionsecret",
    },
    null,
    {
      resave: true,
      saveUninitialized: true,
      secret: "sessionsecret",
      cookie: {
        httpOnly: process.env.NODE_ENV === "production",
        secure: process.env.NODE_ENV === "production",
      },
    }
  );

  // CORS setup
  const allowedOrigins = [
    "*",
    "https://172.16.5.205",
    "http://172.16.5.205",
    "http://172.16.5.205:3000",
    "https://172.16.5.205:3000",
    "http://localhost:3000",
    "http://localhost:5000",
    "http://localhost:5173",
    "http://localhost:5174",
    "https://thunderbolts.com.np",
    "http://thunderbolts.com.np",
  ];
  const corsOptions = {
    origin: (origin, callback) => {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  };

  app.use(cors(corsOptions));

  // Use the authenticated router
  app.use(admin.options.rootPath, adminRouter);

  //   all routes here defined
  app.use("/api/galleries", galleryRoutes);
  app.use("/api/contact", contactRoutes);
  app.use("/api/brandlogos", brandLogoRoutes);
  app.use("/api/getintouch", getTouchRoutes);
  app.use("/api/hero", heroRoutes);
  app.use("/api/academy", academyRoute);
  app.use("/api/program", programRoutes);
  app.use("/api/agegroup", ageGroupRoutes);
  app.use("/api/camps", campsRoutes);
  app.use("/api/games", gameRoute);
  app.use("/api/career", Career);

  app.use("/api/v1", ThundersPayment);

  const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message:
      "Too many requests from this IP, please try again after 15 minutes.",
  });
  app.use("/api/", apiLimiter);

  app.get("*", (req, res) => {
    if (!req.path.startsWith("/api") && !req.path.startsWith("/admin")) {
      res.sendFile(path.join(__dirname, "public"));
    } else {
      res.status(404).send("Not Found");
    }
  });

  // Start the server
  app.listen(PORT, () => {
    console.log(
      `AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`
    );
  });
};

start();
