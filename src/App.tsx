import React, { useState } from "react";

import Dashboard from "./Pages/Dashboard";

import "./App.css";

export const sidebarContext = React.createContext<any | null>(null);

function App() {
  const [showSidebar, setShowSideBar] = useState(false);
  return (
    <div className="App">
      <sidebarContext.Provider value={{showSidebar, setShowSideBar}}>
        <Dashboard />
      </sidebarContext.Provider>
    </div>
  );
}

export default App;
