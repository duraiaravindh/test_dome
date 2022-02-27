import { useState } from "react";
import "./App.css";
import { Addcolor } from "./ColorBox";
import { Counter } from "./Counter";
import { Msg } from "./Msg";
import { Welcome } from "./Welcome";


const Init_Movie_List = [
  {
    name: "CAPTAIN AMERICA",
    img:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainamericathefirstavenger_lob_crd_01_0.jpg",
      rating: "8",
    summary:
      "Marvel's Captain America: The First Avenger focuses on the early days of the Marvel Universe when Steve Rogers volunteers to participate in an experimental program that turns him into the Super Soldier known as Captain America."
  },
  {
    name: "IRON MAN",
    img:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman_lob_crd_01_4.jpg",
      rating: "8",
    summary:
      "2008's Iron Man tells the story of Tony Stark, a billionaire industrialist and genius inventor who is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity, Tony builds a high-tech suit of armor and escapes captivity. When he uncovers a nefarious plot with global implications, he dons his powerful armor and vows to protect the world as Iron Man."
  },
  {
    name: "BLACK PANTHER",
    img:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/blackpanther_lob_crd_01_5.jpg",
      rating: "9",
    summary:
      "Marvel Studios “Black Panther” follows T'Challa who, after the death of his father, the King of Wakanda, returns home to the isolated, technologically advanced African nation to succeed to the throne and take his rightful place as king. But when a powerful old enemy reappears, T'Challa's mettle as king—and Black Panther—is tested when he is drawn into a formidable conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people and their way of life."
  },
  {
    name: "SPIDER MAN",
    img:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-manhomecoming_lob_crd_01_4.jpg",
      rating: "8.2",
    summary:
      "A young Peter Parker/Spider-Man (Tom Holland), who made his sensational debut in Captain America: Civil War, begins to navigate his newfound identity as the web-slinging super hero in Spider-Man: Homecoming. Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May (Marisa Tomei), under the watchful eye of his new mentor Tony Stark (Robert Downey, Jr.). Peter tries to fall back into his normal daily routine, distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man, but when the Vulture (Michael Keaton) emerges as a new villain, everything that Peter holds most important will be threatened."
  },
  {
    name: "DOCTOR STRANGE",
    img:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/doctorstrange_lob_crd_01_7.jpg",
      rating: "8.5",
    summary:
      "From Marvel Studios comes “Doctor Strange,” the story of world-famous neurosurgeon Dr. Stephen Strange whose life changes forever after a horrific car accident robs him of the use of his hands. When traditional medicine fails him, he is forced to look for healing, and hope, in an unlikely place—a mysterious enclave known as Kamar-Taj. Before long Strange—armed with newly acquired magical powers—is forced to choose whether to return to his life of fortune and status or leave it all behind to defend the world as the most powerful sorcerer in existence."
  },
  {
    name: "THE HULK",
    img:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/theincrediblehulk_lob_crd_01_3.jpg",
      rating: "7.8",
    summary:
      "In this new beginning, scientist Bruce Banner desperately hunts for a cure to the gamma radiation that poisoned his cells and unleashes the unbridled force of rage within him: The Hulk. Living in the shadows--cut off from a life he knew and the woman he loves, Betty Ross--Banner struggles to avoid the obsessive pursuit of his nemesis, General Thunderbolt Ross and the military machinery that seeks to capture him and brutally exploit his power. As all three grapple with the secrets that led to the Hulk's creation, they are confronted with a monstrous new adversary known as the Abomination, whose destructive strength exceeds even the Hulk's own. One scientist must make an agonizing final choice: accept a peaceful life as Bruce Banner or find heroism in the creature he holds inside--The Incredible Hulk."
  },
  {
    name: "THOR",
    img:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/thor_lob_crd_01_1.jpg",
      rating: "7.8",
    summary:
      "As the son of Odin, king of the Norse gods, Thor will soon inherit the throne of Asgard from his aging father. However, on the day that he is to be crowned, Thor reacts with brutality when the gods' enemies, the Frost Giants, enter the palace in violation of their treaty. As punishment, Odin banishes Thor to Earth. While Loki, Thor's brother, plots mischief in Asgard, Thor, now stripped of his powers, faces his greatest threat."
  },
  {
    name: "BLACK WIDOW",
    img:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/blackwidow_lob_crd_06.jpg",
      rating: "8.3",
    summary:
      "In Marvel Studios action-packed spy thriller “Black Widow,” Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger."
  }
];

export default function App() {
  // const names = ["Durai", "Aravindh", "raj"];



  const [movieList, setMovieList] = useState(Init_Movie_List);

  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  return (
    <div className="App">
      <h1 className="nme"> MARVEL UNIVERSE</h1>

      <div className="add-movie">

      <input
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter the name"
        />
        <input
          onChange={(event) => setImg(event.target.value)}
          placeholder="Enter the img url"
        />
        <input
          onChange={(event) => setRating(event.target.value)}
          placeholder="Enter the rating"
        />
        <input
          onChange={(event) => setSummary(event.target.value)}
          placeholder="Enter the summary"
        />
        <button onClick={()=>{
          const newMovieList = {

            name: name,
            img: img,
            rating: rating,
            summary: summary
        
          }

          setMovieList([...movieList, newMovieList])

        }}>Add Movie</button>
      </div>
      


      {/* {obj.map((nm) => (
        <Welcome name={nm.name} img={nm.img} summary={nm.summary} rating={nm.rating}/>
      ))} */}

    <div className="movie-list">
    {movieList.map((mv)=>(<Movie movies={mv}/>))}
    </div>

    {/* <Addcolor /> */}

    </div>
  );
}

function Movie({ movies }){


// const movies={
//   name: "Captain America - THE FIRST AVENGER",
  
//   img:
//     "https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainamericathefirstavenger_lob_crd_01_0.jpg",
    
//     rating: "8/10",
  
//     summary:
//     "Marvel's Captain America: The First Avenger focuses on the early days of the Marvel Universe when Steve Rogers volunteers to participate in an experimental program that turns him into the Super Soldier known as Captain America."
// }

const [show, setShow] = useState(false);

const styles ={
  color : movies.rating > 8 ? "Green" : "Red",
};

const paraStyles ={
  display: show ? "block" : "none",
}

  return(
    <div className="movie-container">
      <img src={movies.img} alt={movies.name} />

      <div className="movie-specs">
      <h1 className="movie-name">{movies.name}</h1>
      <p style={styles} className="movie-rating"> ⭐ {movies.rating}</p>
      
      </div>
      <button onClick={()=> setShow(!show)} className="btn-style"> Storyline </button>

      <p style={paraStyles} className="movie-overview">{movies.summary}</p>
      <Counter />

    </div>

  )
}