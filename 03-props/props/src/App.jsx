import Student from "./Student.jsx";

function App() {
  /* App is the parent, student is the child, data is sent from parent to child 
     name is key, spongebob is value  
     for literals, if they are not strings they have to be enclosed in curly braces
  */
  return (
    <>
      <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Patrick" age={40} isStudent={false} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student name="Sandy" age={18} isStudent={true} />
      <Student/>
    </>
  );
}

export default App;
