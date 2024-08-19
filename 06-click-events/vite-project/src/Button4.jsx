export default function Button4() {
    const handleClick = (e) => {
            e.target.textContent = "OUCH! 😒";
    }
    const handleDClick = (e) => {
            e.target.textContent = "OUCH! OUCH! 😒";
    }
  return (
        <button onClick={(e) => handleClick(e)}
                onDoubleClick={(e) => handleDClick(e)}
            >Click me 😊</button>
  )
}
