import profilePic from "./assets/pic.png";

function Card() {
  return (
    <div className="card">
      {/* <img src="https://via.placeholder.com/150" alt="profile pic" srcset="" /> */}
      <img
        className="card-image"
        src={profilePic}
        alt="profile pic"
        srcset=""
      />
      <h2 className="card-title">my page</h2>
      <p className="card-text">I write code</p>
    </div>
  );
}

export default Card;
