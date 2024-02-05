import express from "express";
import cors from "cors"; // Use 'import' for ES modules
import carData from "./data/carData.json" assert { type: "json" };
import * as formData from "./data/formData.json" assert { type: "json" };
import fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const formDatapath = __dirname + "/data/formData.json";

const app = express();
const port = 8000;

// Enable CORS for all routes
app.use(cors());

// Body parsing middleware
app.use(express.json());

// Route for getting car data
app.get("/api/carlist", (req, res) => {
  res.json(carData);
});

// Route for getting products data
app.get("/api/products", (req, res) => {
  res.json(formData.default);
});

let testData = [];

// Route to Post form data
app.post("/api/create-form", async (req, res) => {
  try {
    const data = req.body;
    // Read existing data
    const existingData = await fs
      .readFile(formDatapath, "utf-8")
      .then((data) => {
        try {
          return JSON.parse(data);
        } catch (error) {
          console.error("Error parsing existing data:", error.message);
          return [];
        }
      })
      .catch(() => []);

    // Add the new data to the existing data
    existingData.push(data);

    // Write the updated data back to the file
    await fs.writeFile(
      formDatapath,
      JSON.stringify(existingData, null, 2),
      "utf-8"
    );

    // Respond to the client
    res.json(data);
  } catch (error) {
    console.error("Error handling create-form route:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
