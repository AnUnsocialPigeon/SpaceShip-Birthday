import React, { useState } from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import '../App.css';

import { Environment, OrbitControls, Sparkles } from '@react-three/drei';
import SpaceStation from '../models/SpaceStation';
import AudioPlayer from './AudioPlayer';
import Aestroid from '../models/Aestroid';
import Skybox from '../models/Skybox';
import FinalMessage from './FinalMessage';

const Space = () => {
  const [isAesteroidClicked, setAesteroidClicked] = useState(false);

  const handleAesteroidClicked = () => {
    console.log("Clicked!");
    if (isAesteroidClicked) return;
    setAesteroidClicked(true);
  };

  return (
    <div>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={1.5}/>
          <OrbitControls minDistance={4} maxDistance={15} panSpeed={0.2}/>
          <SpaceStation position={[0, 0.5, 0]} scale={[1, 1, 1]} rotation={[0.45, -0.5, 0]} />
          <Skybox size={1} position={[0, 0, 0]} scale={[1, 1, 1]}/>
          <Aestroid position={[0, 0, 5]} scale={[0.004, 0.004, 0.004]} onClick={handleAesteroidClicked}/>
          <Sparkles size={2} color={"#ffffff"} scale={[10,10,10]} />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
      <div className="top-left-text">Loading resources from remote server may take time. Please be patient.</div>
      {!isAesteroidClicked && <div className="top-right-text">Search for the Asteroid!</div>}
      {isAesteroidClicked && <FinalMessage />}
      <AudioPlayer />
    </div>
  );
};

export default Space;