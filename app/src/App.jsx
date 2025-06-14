import { useState } from "react";
import { motion as Motion } from "framer-motion";
import "./App.css";

const cities = [
  "Delhi",
  "Mumbai",
  "Bengaluru",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Pune",
  "Jaipur",
];

function App() {
  const [mode, setMode] = useState("bus");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="flex flex-col items-center p-4 space-y-6">
      <div className="flex space-x-4">
        <Motion.button
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-full backdrop-blur-md ${mode === "bus" ? "bg-blue-600" : "bg-white/20"}`}
          onClick={() => setMode("bus")}
        >
          Bus
        </Motion.button>
        <Motion.button
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-full backdrop-blur-md ${mode === "train" ? "bg-blue-600" : "bg-white/20"}`}
          onClick={() => setMode("train")}
        >
          Train
        </Motion.button>
      </div>

      <div className="bg-white/10 rounded-xl p-6 backdrop-blur-md space-y-4 w-full max-w-md">
        <div className="flex flex-col">
          <label className="text-sm mb-1">From</label>
          <input
            list="cities"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="p-2 rounded-md bg-black/40"
            placeholder="City"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm mb-1">To</label>
          <input
            list="cities"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="p-2 rounded-md bg-black/40"
            placeholder="City"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm mb-1">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="p-2 rounded-md bg-black/40"
          />
        </div>
        <Motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-pink-600 w-full py-2 rounded-md shadow-lg hover:shadow-pink-500/50"
        >
          Search
        </Motion.button>
      </div>

      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center text-sm text-white/80"
      >
        {mode === "bus" ? "Bus" : "Train"} live tracking and seat maps coming soon.
      </Motion.div>

      <datalist id="cities">
        {cities.map((c) => (
          <option key={c} value={c} />
        ))}
      </datalist>
    </div>
  );
}

export default App;
