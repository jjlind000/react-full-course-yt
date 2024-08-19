
export default function ProfilePicture() {
    const imageUrl = './src/assets/pic.png';
    const handleClick = (e) => {
        console.log("OUCH");
        e.target.style.display = "none";
    }
    return (
        <img onClick={(e) => handleClick(e)} src={imageUrl}></img>
    )
}
