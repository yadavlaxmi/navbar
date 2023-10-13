
import Navbar from "./Component/Navbar"
const linksArray=["Products","Services","Overview","contact Us"]
function App() {
  return (
    <div>
    <Navbar links={linksArray}/>
    </div>
  );
}

export default App;
