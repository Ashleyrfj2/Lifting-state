// src/components/BurgerStack/BurgerStack.jsx
import App from '../../App';
import  { useEffect } from 'react'; 


const BurgerStack= (props) => {
  const ingredients = props.burgerIngredients
  



  return (
    
     <ul><li>
    <ingredient
    ingredient={ingredient}
    onButtonClick ={() => removeFromBurger(index)}
    buttonLabel="x"
    />
    </li>

  {ingredients.map((ingredient) => (
    <li key={index} style={{ backgroundColor: ingredient.color }}>
      {ingredient.name}
    </li>
  
  ))}

  </ul>
  )}
export default BurgerStack;
