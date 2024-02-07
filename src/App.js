import { useEffect, useState } from 'react';
import './App.scss';
import adatok from  "./feladat6-adatok.json";
import Tablazat from './Tablazat';
function App() {

  const [tablazatAdatok, setTablazatAdatok] = useState([]);
  const [loading, setLoading] = useState(true);

  function compareCim(a, b) {
    if (a.cim < b.cim) {
      return -1;
    }
    if (a.cim > b.cim) {
      return 1;
    }
    return 0;
  }

  useEffect(() =>{
    setTablazatAdatok(adatok.sort(compareCim));
    setLoading(false);
   },[])

  return (
    <div className="App">
      {loading && <img src='/img/feladat6-loading.gif' alt="Oldal töltődik"/> }
      {!loading &&
          <table>
          <tbody>
         {tablazatAdatok &&
          tablazatAdatok.map((jsonAdat) => 
          <Tablazat key={jsonAdat.cim} cim={jsonAdat.cim} polc={jsonAdat.polc} />
          )}
      </tbody>
    </table>
}
    </div>
  );
}

export default App;
