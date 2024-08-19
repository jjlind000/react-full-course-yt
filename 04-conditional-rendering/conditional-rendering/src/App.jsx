import UserGreeting from "./UserGreeting.jsx"

function App() {

  return (
    <>
      <UserGreeting isLoggedIn={true} username="Meeee" />
      <UserGreeting isLoggedIn={true} />
      <UserGreeting isLoggedIn={false} />
    </>
  )
}

export default App;
