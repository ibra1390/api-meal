import { createContext, useState } from "react";

export const MealContext = createContext();

export const MealProvider = ({ children }) => {
  const [selectedMeal, setSelectedMeal] = useState(null);

  return (
    <MealContext.Provider value={{ selectedMeal, setSelectedMeal }}>
      {children}
    </MealContext.Provider>
  );
};