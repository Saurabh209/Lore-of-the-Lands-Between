import { useState, useEffect } from 'react'

import { Routes, Route, Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getKnowledge } from './features/knowledgeSlice';



import './index.css'
import { Sword, Crown, Shield, BookOpen, MapPin, Users, Skull, Star, Hammer, Wand2, Target, Zap, Eye, Clock, TrendingUp, Globe, Flame, Moon, Home } from "lucide-react";

import Bosses from './components/boss/Bosses'

import AllDemigods from './components/demigods/AllDemigods';


import HomePage from './Home';
import EpicBattles from './components/epicBattles/EpicBattles';
import SingleDemigod from './components/demigods/SingleDemigod';
import Lore from './components/lore/Lore';
import Exploration from './components/Exploration/Exploration';
import AllArsenal from './components/Arsenal/AllArsenal';
import Faq from './components/Faq/Faq';
import Testing from './components/Testing/Testing';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
//  images import section





function App() {

  const dispatch = useDispatch();
  const { knowledge, loading, error } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(getKnowledge()); // runs once on mount
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>


      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AllDemigods" element={<AllDemigods />} />
        <Route path="/Alldemigods/:bossId" element={<SingleDemigod />} />
        <Route path="/bosses" element={<Bosses />} />
        <Route path="/battles" element={<EpicBattles />} />
        <Route path='/lore' element={<Lore />} />
        <Route path='/exploration' element={<Exploration />} />
        <Route path='/AllArsenal' element={<AllArsenal />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/testing' element={<Testing />} />
      </Routes>

      <Footer />

    </>

  )
}



export default App
