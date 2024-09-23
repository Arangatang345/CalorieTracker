import React, { useState } from 'react';

function CalorieTracker() {
  const [calories, setCalories] = useState(0);
  const [meal, setMeal] = useState("");

  const handleMealSubmit = () => {
    // Calculate calories using some external API or manually
    setCalories(prevCalories => prevCalories + 300); // Example
  };

  return (
    <div>
      <h1>Daily Calorie Tracker</h1>
      <input 
        type="text" 
        placeholder="Enter meal" 
        value={meal} 
        onChange={(e) => setMeal(e.target.value)} 
      />
      <button onClick={handleMealSubmit}>Add Meal</button>
      <p>Total Calories: {calories}</p>
    </div>
  );
}

export default CalorieTracker;
