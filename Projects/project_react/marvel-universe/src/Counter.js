import { useState } from "react";

// counter custom components
export function Counter() {
  // let like=0;
  const [like, setlike] = useState(0);
  const [dislike, setdislike] = useState(0);

  return (
    <div className="counter-container">
      <button className="btn" onClick={() => setlike(like + 1)}>
        👍{like}
      </button>
      <button className="btn" onClick={() => setdislike(dislike + 1)}>
        👎{dislike}
      </button>
    </div>
  );
}
