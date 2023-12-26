"use client"
import './page.css'
import { useState } from 'react';
import { Erica_One } from 'next/font/google'
import ModalInfo from "../components/ModalInfo";
import ModalOptiones from "../components/ModalOpciones";
import IconSound from "../components/IconSound";
import IconInfo from "../components/IconInfo";

export const ericaOne = Erica_One({ weight: '400',subsets: ['latin'] })
const audio = new Audio('./clasicnobestring-mejorado.mp3');


export default function Home() {
  // Mostrar Modal de Info
  const [showInfo, setShowInfo] = useState<boolean>(false)
  const handleModalInfo = () => {
    setShowInfo(!showInfo)
  }
  // Mostrar Modal de Options
  const [showOptions, setShowOptions] = useState<boolean>(false)
  const handleModalOptions = () => {
    setShowOptions(!showOptions)
  }
  // Activar sonido
  const [isSound, setIsSound] = useState<boolean>(false)
  const handleSound = () => {
    setIsSound(!isSound)
    handleMusic()
    if (isSound) {
      handleMusicMuted()
      
    }
  }
  // Handle Music
  const handleMusic = () => {
    audio.play()
    audio.volume = 0.5
    audio.loop
  }
  const handleMusicMuted = () => {
    audio.volume = 0.0
  }
  
  return (
    <main>
      <section className='section-menu'>
        <button className={ericaOne.className}>JUGAR</button>
        <button onClick={handleModalOptions} className={`${ericaOne.className} button-option`}>OPCIONES</button>
      </section>
      <IconSound handleSound={handleSound} isSound={isSound}/>
      <IconInfo handleModalInfo={handleModalInfo} />
      {showInfo && <ModalInfo handleModalInfo={handleModalInfo} />}
      {showOptions && <ModalOptiones handleModalOptions={handleModalOptions} />}
    </main>
  )
}
