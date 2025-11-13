import { createContext, useState } from "react";

export const MealContext = createContext();

export const MealProvider = ({ children }) => {
  const [selectedMeal, setSelectedMeal] = useState(JSON.parse(localStorage.getItem("receta")));
  localStorage.setItem("receta", JSON.stringify(selectedMeal))

  return (
    <MealContext.Provider value={{ selectedMeal, setSelectedMeal }}>
      {children}
    </MealContext.Provider>
  );
};