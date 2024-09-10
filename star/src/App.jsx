import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [count, setCount] = useState(0);

  const renderStars = (num) => {
    let stars = [];
    for (let i = 1; i <= num; i++) {
      stars.push("*".repeat(i));
    }
    for (let i = num - 1; i >= 1; i--) {
      stars.push("*".repeat(i));
    }
    return stars;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(inputValue);
  };

  return (
    <div className="App">
      <h1>Star Display</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="number">
          <strong>Input : </strong>
        </label>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(parseInt(e.target.value))}
          placeholder="Enter a number"
          min="1"
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {renderStars(count).map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
