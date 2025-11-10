import App from '../../App';


IngredientList  = (props) => {

<IngredientList
                        ingredient={ingredient}
                        onButtonClick={()=>addToBurger(ingredient)}
                    buttonLabel= "+"
                    />


        
     return (
        <>
        {availableIngredients.map((ingredient, index) => (
    <li key={index} style={{ backgroundColor: ingredient.color }}>
        {ingredient.name}
    </li>
))}
           </>         
     )            

    
}
    
    

export default IngredientList;
