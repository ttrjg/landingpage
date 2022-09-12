import { Route, Routes } from "react-router-dom";
import { Manager } from "./pages/Manager";
import { Subscribe } from "./pages/Subscribe";


export function Router() {
   return (
      <Routes>
         <Route path="/" element={<Subscribe />} /> 
         <Route path="/manager" element={<Manager />} /> 
      </Routes>
   )
}