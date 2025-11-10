import App from "../../App"
const ingredient = (props) => {
    return (
        <li style={{backgroundColor: props.ingredient.color}}>
            {props.ingredient.name}
            <button onClick={props.onButtonClick}>
                {props.buttonLabel}
            </button>
        </li>
    )
}
export default ingredient