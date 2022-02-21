import Signup from "./Signup";

function App() {
  const handleoOnSuccessSignup = () => {
    console.log("done");
  };
  return (
    <div className="App">
      <Signup onSuccess={handleoOnSuccessSignup} />
    </div>
  );
}

export default App;
