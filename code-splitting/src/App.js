import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"

function App() {
  const [importFile,setImportFIle] = useState("");
  const [file, setFile] = useState(false)

  const handleClick = () =>{
    import('./file').then((mod)=>{
      console.log(mod);
      setImportFIle(mod.default)
    })
    setFile(true);
  }

  return (
    <div className="App">
      <button onClick={handleClick}>importFile</button>
      {file&&importFile}
    </div>
  );
}

export default App;
