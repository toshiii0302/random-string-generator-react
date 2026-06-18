import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";

function Generator() {
  const [length, setLength] = useState(8);
  const [randomString, setRandomString] = useState("");
  const [count, setCount] = useState(0);
  const [lastGenerated, setLastGenerated] = useState("");

  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);

  const generateString = useCallback(() => {
    let chars = "";

    if (includeUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) chars += "0123456789";

    if (!chars) {
      alert("Please select at least one character type.");
      return;
    }

    let result = "";

    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setRandomString(result);
    setCount((prev) => prev + 1);
    setLastGenerated(new Date().toLocaleTimeString());
  }, [length, includeUppercase, includeLowercase, includeNumbers]);

  useEffect(() => {
    document.title = `Generated ${count} times`;
  }, [count]);

  const copyToClipboard = () => {
    if (!randomString) return;
    navigator.clipboard.writeText(randomString);
    alert("String copied!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-violet-600 text-center mb-6">
          Random String Generator
        </h1>

        <label className="block font-medium mb-2">String Length</label>

        <input
          type="number"
          min="1"
          max="50"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full border rounded-md p-2 mb-5"
        />

        <div className="mb-5">
          <p className="font-medium mb-2">Character Types</p>

          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={includeUppercase}
                onChange={() => setIncludeUppercase(!includeUppercase)}
              />
              Uppercase Letters
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={includeLowercase}
                onChange={() => setIncludeLowercase(!includeLowercase)}
              />
              Lowercase Letters
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers(!includeNumbers)}
              />
              Numbers
            </label>
          </div>
        </div>

        <button
          onClick={generateString}
          className="w-full bg-violet-600 text-white py-2 rounded-md hover:bg-violet-700 transition"
        >
          Generate String
        </button>

        <div className="border rounded-md p-4 mt-6 bg-gray-50">
          <p className="font-medium mb-2">Your Random String</p>

          <p className="break-all text-violet-700">
            {randomString || "Generate a string to see the result"}
          </p>
        </div>

        <button
          onClick={copyToClipboard}
          className="w-full mt-3 border border-violet-600 text-violet-600 py-2 rounded-md hover:bg-violet-50 transition"
        >
          Copy String
        </button>

        <div className="mt-5 text-sm text-gray-600">
          <p>Strings Generated: {count}</p>
          <p>Last Generated: {lastGenerated || "Not generated yet"}</p>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <Link to="/" className="text-violet-600 hover:underline">
            ← Back to Home
          </Link>

          <span className="text-xs text-gray-500">React + Tailwind</span>
        </div>
      </div>
    </div>
  );
}

export default Generator;
