import { AdminDashboard } from './components/AdminDashboard/AdminDashboard';
import Tables from './components/tables/Tables';
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import { useState } from 'react';

function App() {

  const [view, setView] = useState(false);
  return (
    <div>
      {!view && <AdminDashboard view={view} setView={setView}/>}
      {view && <Tables />}
    </div>
  );
}

export default App;
