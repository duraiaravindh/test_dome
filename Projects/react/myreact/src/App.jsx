import ProductList from './components/Product_list/product';

const products = [
  {title:"Apple",
  image:"https://m.media-amazon.com/images/I/41iHN9Y07cS._AC_SY200_.jpg",
desc:"Macbook"
},
{title:"Windows",
image:"https://m.media-amazon.com/images/I/61OjNFGJ4YL._AC_UY218_.jpg",
desc:"Microsoft"
},
{title:"Linux",
image:"https://m.media-amazon.com/images/I/61zLMsuOEcL._AC_UY218_.jpg",
desc:"OSS"
},
{title:"Android",
image:"https://m.media-amazon.com/images/I/71Kpc3NrEdL._AC_UY218_.jpg",
desc:"Mobiles"
},

]

function App() {
  return (
<div>
  {/* <Card title="Apple" des="Mobiles"/>
  <Card title="Windows" des="OS"/>
  <Card title="Linux" des="OSS"/>
  <Card title="Android" des="Application"/> */}

<ProductList title='New Deals' subtitle='Only for you' data={products}/>
<ProductList title='New Diwali sale' />
<ProductList title='Great Indian Sale' data={products}/>
<ProductList title='Great festival Sale' data={products}/>

</div>
  );
}

export default App;
