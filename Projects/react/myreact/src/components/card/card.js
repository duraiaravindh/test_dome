import './card.css'

function Card(props){
    return(
        <div className='card-wrapper'>
            <img src={props.img} />
            <h3>{props.title}</h3>
            <p>{props.des}</p>
            <button onClick={(event)=>{alert("you clicked" +" "+ props.title)}}>Add to cart</button>
        </div>
    )
}

export default Card;