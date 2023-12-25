"use client"
import './page.css'
import { Erica_One } from 'next/font/google'
import ModalInfo from "../components/ModalInfo";
import IconSound from "../components/IconSound";
import IconInfo from "../components/IconInfo";
import { useState } from 'react';

const ericaOne = Erica_One({ weight: '400',subsets: ['latin'] })

export default function Home() {
  // Mostrar Modal de Info
  const [showInfo, setShowInfo] = useState(false)
  const handleModalInfo = () => {
    setShowInfo(!showInfo)
  }
  // Activar sonido
  const [isSound, setIsSound] = useState(true)
  const handleSound = () => {
    setIsSound(!isSound)
  }

  return (
    <main>
      <section className='section-menu'>
        <button className={ericaOne.className}>JUGAR</button>
        <button className={`${ericaOne.className} button-option`}>OPCIONES</button>
      </section>
      <IconSound handleSound={handleSound} isSound={isSound}/>
      <IconInfo handleModalInfo={handleModalInfo} />
      {showInfo && <ModalInfo handleModalInfo={handleModalInfo} />}
    </main>
  )
}
