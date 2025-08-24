import { useState, useEffect } from 'react'

import { Routes, Route,Link } from 'react-router-dom'
 


import './index.css'
import { Sword, Crown, Shield, BookOpen, MapPin, Users, Skull, Star, Hammer, Wand2, Target, Zap, Eye, Clock, TrendingUp, Globe, Flame, Moon, Home } from "lucide-react";

import Bosses from './components/boss/Bosses'

import AllDemigods from './components/demigods/AllDemigods';
 

import HomePage from './Home';
import EpicBattles from './components/epicBattles/EpicBattles';
import SingleDemigod from './components/demigods/SingleDemigod';
import Lore from './components/lore/Lore';
//  images import section



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AllDemigods" element={<AllDemigods />} />
        <Route path="/Alldemigods/:bossId" element={<SingleDemigod />} />
        <Route path="/bosses" element={<Bosses />} />
        <Route path="/battles" element={<EpicBattles />} />
        <Route path='/Lore' element={<Lore/>} /> 
      </Routes>

    </>

  )
}



export default App
