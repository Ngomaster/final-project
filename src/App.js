import { Routes, Route } from "react-router-dom";

import Client from "./client/client";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Client />} />
      </Routes>
    </div>
  );
}

export default App;
