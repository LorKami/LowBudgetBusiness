import React from 'react';
import Navbar from "../components/Navbar";
import Monitor from "../components/Monitor";
import LbbGeneratorMaker from "../components/LbbGenerator"

function Home() {

  return (
    <div>
        <Navbar />
        <Monitor />
        <LbbGeneratorMaker />
        </div>
  )
}

export default Home