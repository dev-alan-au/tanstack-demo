import cors from "cors";
import express from "express";
import seedData from "./routes/seedData.js";
import shoesList from "./routes/shoesList.js";
import shoeView from "./routes/shoeView.js";

const app = express();
app.use(
  cors({origin: [process.env.CLIENT_URL!]}),
);
app.use(express.json());
app.use("/init", seedData);
app.use("/", shoesList);
app.use("/shoe/:id", shoeView);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
