"use client"
import './page.css'
import { useState } from 'react';
import { Erica_One } from 'next/font/google'
import ModalInfo from "../components/ModalInfo";
import ModalOptiones from "../components/ModalOpciones";
import IconSound from "../components/IconSound";
import IconInfo from "../components/IconInfo";

export const ericaOne = Erica_One({ weight: '400',subsets: ['latin'] })
const audio = new Audio('./clasicnobestring.mp3');
const audioClick = new Audio('./soundClick.mp3');


export default function Home() {
  // Mostrar Modal de Info
  const [showInfo, setShowInfo] = useState<boolean>(false)
  const handleModalInfo = () => {
    audioClick.play()
    audioClick.volume = 0.5
    setShowInfo(!showInfo)
  }
  // Mostrar Modal de Options
  const [showOptions, setShowOptions] = useState<boolean>(false)
  const handleModalOptions = () => {
    audioClick.play()
    audioClick.volume = 0.4
    setShowOptions(!showOptions)
  }
  
  // handle Language
  const [language, setLanguage] = useState(true)
  const handleLanguage = () => {
    audioClick.play()
    setLanguage(!language)
  }
  
  // handle Volumen
  const [volume, setVolume] = useState(0)

  const handlePlusVolume = () => {
    if (volume > .95) return
    if (volume === 0) {
      audio.play()
    }
    setVolume(volume + Number(.1))
    audio.volume = volume
    audio.loop
  }

  const handleLessVolume = () => {
    if (volume < .05) return
    setVolume(volume - 0.1)
    audio.volume = volume
    audio.loop
  }
  const handleSound = () => {
    if (volume == 0) {
      audio.play()
      setVolume(0.5)
      audio.volume = volume
    } else {
      setVolume(0)
      audio.volume = volume
    }
  }
  console.log(volume);
  // Activar sonido
  
  return (
    <main>
      <section className='section-menu'>
        <button className={ericaOne.className}>JUGAR</button>
        <button onClick={handleModalOptions} className={`${ericaOne.className} button-option`}>OPCIONES</button>
      </section>
      <IconSound handleSound={handleSound} volume={volume}/>
      <IconInfo handleModalInfo={handleModalInfo} />
      {showInfo && <ModalInfo handleModalInfo={handleModalInfo} />}
      {showOptions && <ModalOptiones 
      language={language} 
      handleLanguage={handleLanguage}
      audioClick={audioClick} 
      handleModalOptions={handleModalOptions} 
      volume={volume}
      handlePlusVolume={handlePlusVolume} 
      handleLessVolume={handleLessVolume}/>}
    </main>
  )
}
