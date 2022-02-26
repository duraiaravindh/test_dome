import Card from '../card/card'
import './product.css'


function ProductList(props){
    if(!props.data){
        return null;
    }
return(
    <div className='list-container'>
        <div className='list-header'>
        <h2>{props.title} {props.subtitle ? <small>{props.subtitle}</small> : null}</h2>
        <button>View all</button>
        </div>
        <div>
        {
    //Map func
    props.data.map((item, index)=>{
      return <Card key={index} title={item.title} des={item.desc} img={item.image}/>
    })
  }
        </div>
    </div>
)
}

export default ProductList;