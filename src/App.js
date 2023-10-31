import React, { useEffect } from "react";
import Navigation from "./pages/Navigation";
import "./App.css";
import { useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}
