import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Screens
import Home from './Components/Pages/Home/Home';
import Applicacoes from './Components/Pages/Aplicacoes/Aplicacoes';
import Pomodoro from './Components/Pages/Pomodoro/Pomodoro';
import ToDo from './Components/Pages/Todo/ToDo';
import Calendario from './Components/Pages/Calendario/Calendario';
import Sobre from './Components/Pages/Sobre/Sobre';

export default function AppRouter() {
    return(
    <Router>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/applications' element={<Applicacoes />} />
      <Route path='/sobre' element={<Sobre />} />
      <Route path='/pomodoro' element={<Pomodoro />} />
      <Route path='/todolist' element={<ToDo />} />
      <Route path='/calendario' element={<Calendario />} />
     </Routes>
    </Router>
    );
};