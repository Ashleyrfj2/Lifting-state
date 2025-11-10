// src/App.jsx
import IngredientList from './components/IngredientList/IngredientList';
import BurgerStack from './components/BurgerStack/BurgerStack';
import ingredient from './components/Ingredient/Ingredient';
import './App.css';
import { useState } from 'react';



const App = () => {
  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];      

//on burger > set ingredient to new list }
const [burgerIngredients,setBurgerIngredients] = useState(['']);



const addToBurger = (event) => {
  
  const newList= [...burgerIngredients, ingredient]
 setBurgerIngredients(newList) //updates burger list
  
}
const removeFromBurger = (index) => {
  const newStack= burgerIngredients.filter((_,i) => i !== index)
    setBurgerIngredients(newStack)

}


  
 
return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList availableIngredients={availableIngredients}/>
        
        <BurgerStack burgerIngredients={burgerIngredients}/>

       </section>
    </main>
  )

}
export default App;
