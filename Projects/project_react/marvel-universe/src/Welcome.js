export function Welcome({ name, img, summary, rating }) {
  return (
    <div>

      <img src={img} alt={name} />
      <h2 className="mve"> MOVIE : {name} </h2>
      <h3  className="rate"> RATING : {rating}</h3>
      <h4 className="ctn"> OVERVIEW : {summary} </h4>

    </div>
  );
}
