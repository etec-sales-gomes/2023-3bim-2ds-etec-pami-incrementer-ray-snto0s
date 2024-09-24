import './button.css'

export function Button(props) {
    return (
        <>
            <button className="botoes" onClick={props.onclick}>{props.text}</button>
        </>
    )
}