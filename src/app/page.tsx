"use client"
import './page.css'
import { useState } from 'react';
import { Erica_One } from 'next/font/google'
import ModalInfo from "../components/ModalInfo";
import ModalOptiones from "../components/ModalOpciones";
import IconSound from "../components/IconSound";
import IconInfo from "../components/IconInfo";
import arrDificulty from "@/mockup/dificulty.json";
import Link from 'next/link';

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
  const [volume, setVolume] = useState<number>(0)
  const handlePlusVolume = () => {
    if (volume > 95) return
    const newVol = volume + 10
    setVolume(newVol)
    audio.play()
    audio.loop = true
    audio.volume = newVol/100
  }
  const handleLessVolume = () => {
    if (volume < 5) return
    const newVol = volume - 10
    setVolume(newVol)
    audio.volume = newVol/100
  }

  const handleSound = () => {
    if (volume === 0) {
      audio.play()
      audio.loop = true
      setVolume(volume + 50)
      audio.volume = 0.5
    } else {
      const newVol = 0
      setVolume(newVol)
      audio.volume = newVol
    }
  }
  // handle Dificulty 
  
  const [dificulty, setDificulty] = useState(arrDificulty.filter(dificulty => dificulty.isSelect))

  const handleDificultyPlus = () => {
      audioClick.play()
    if (dificulty[0].dificultyES === "Facil") {
      const newDificulty = arrDificulty.filter(dificulty => dificulty.dificultyES === 'Medio' ? dificulty.isSelect = true : false)
      setDificulty(newDificulty)
    }
    if (dificulty[0].dificultyES === "Medio") {
      const newDificulty = arrDificulty.filter(dificulty => dificulty.dificultyES === 'Difícil' ? dificulty.isSelect = true : false)
      setDificulty(newDificulty)
    }
    if (dificulty[0].dificultyES === "Difícil") {
      const newDificulty = arrDificulty.filter(dificulty => dificulty.dificultyES === 'Facil' ? dificulty.isSelect = true : false)
      setDificulty(newDificulty)
    }
  }
  const handleDificultyLess = () => {
    audioClick.play()
    if (dificulty[0].dificultyES === "Facil") {
      const newDificulty = arrDificulty.filter(dificulty => dificulty.dificultyES === 'Difícil' ? dificulty.isSelect = true : false)
      setDificulty(newDificulty)
    }
    if (dificulty[0].dificultyES === "Medio") {
      const newDificulty = arrDificulty.filter(dificulty => dificulty.dificultyES === 'Facil' ? dificulty.isSelect = true : false)
      setDificulty(newDificulty)
    }
    if (dificulty[0].dificultyES === "Difícil") {
      const newDificulty = arrDificulty.filter(dificulty => dificulty.dificultyES === 'Medio' ? dificulty.isSelect = true : false)
      setDificulty(newDificulty)
    }
  }

  return (
    <main>
      <section className='section-menu'>
        <Link href={'questions'}>
          <button className={ericaOne.className}>{language ? 'JUGAR' : 'PLAY'}</button>
        </Link>
        <button onClick={handleModalOptions} className={`${ericaOne.className} button-option`}>{language ? 'OPCIONES' : 'OPTIONS'}</button>
      </section>
      <IconSound handleSound={handleSound} volume={volume}/>
      <IconInfo handleModalInfo={handleModalInfo} />
      {showInfo && <ModalInfo language={language}  handleModalInfo={handleModalInfo} />}
      {showOptions && <ModalOptiones 
      language={language} 
      handleLanguage={handleLanguage}
      audioClick={audioClick} 
      handleModalOptions={handleModalOptions} 
      volume={volume}
      handlePlusVolume={handlePlusVolume} 
      handleLessVolume={handleLessVolume}
      dificulty={dificulty}
      handleDificultyPlus={handleDificultyPlus}
      handleDificultyLess={handleDificultyLess}
      />}
    </main>
  )
}
