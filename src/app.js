const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
const ur = require("./routes/UserRoutes");
const rr = require("./routes/RateRoutes");
const cr = require("./routes/ConnectRoutes");
app.use("/users",ur);
app.use("/rates",rr);
app.use("/connect",cr);
// Health Check Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Shipment Boilerplate Running"
    });
});

module.exports = app;