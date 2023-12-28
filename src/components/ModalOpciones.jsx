// import { useState } from "react";
import { Passion_One } from "next/font/google";
import { ericaOne } from '@/app/page'
import IconArrowRight from "./IconArrowRight";
import IconArrowLeft from "./IconArrowLeft";
import IconCheck from "./IconCheck";
import './modalOpciones.css'
import mockupCategories from '@/mockup/categories.json'
import React, { useState } from "react";

const passionOne = Passion_One({weight: '700', subsets: ['latin']})
export default function ModalInfo({handleModalOptions, audioClick, language, handleLanguage, handlePlusVolume, handleLessVolume, volume}) {
  // cancelar cerrar el click
  const handleClick = (e) => {
    e.stopPropagation()
  }

  // Format Volumen
  const formatVolume = volume + "%"

  // Categories
  const [categories, setCategories] = useState(mockupCategories)
  const handleEvent = (id) => {
    audioClick.play()
    audioClick.volume = 0.5
    const newCategories = categories.map(category => category.id === id ? {...category, isSelect: !category.isSelect} : {...category})
    setCategories(newCategories)
  }

  
  return (
    <section className='section-option' onClick={handleModalOptions}>
      <article onClick={handleClick} className={ericaOne.className}>
        <h2 className='titleOptiones'>OPCIONES</h2>
        <hr />

        <div className={`${passionOne.className} optionLanguage`}>
          <p>Idioma:</p>
          <IconArrowLeft handleLeft={handleLanguage} />
            <span>{language ? 'ESPAÑOL' : 'ENGLISH'}</span>
          <IconArrowRight handleRight={handleLanguage} />
        </div>

        <div className={`${passionOne.className} optionVolumen`}>
          <p>Volumen:</p>
          <IconArrowLeft handleLeft={handleLessVolume} />
          <span>{formatVolume}</span>
          <IconArrowRight handleRight={handlePlusVolume} />
        </div>
        <div className={`${passionOne.className} optionVolumen`}>
          <p>Dificultad:</p>
          <IconArrowLeft  />
          <span>Facil</span>
          <IconArrowRight />
        </div>

        <hr />
        <p className="subtitleOptiones">Categorias</p>
        <div className="categories">
        {categories.map(categorie => (
          <label key={categorie.id} onClick={() => handleEvent(categorie.id)} className={`${passionOne.className}`}>{categorie.name}
            <IconCheck isCheck={categorie.isSelect} handleEvent={() => handleEvent(categorie.id)} />
          </label>)
          )
        }
        </div>
        <div className="section-button">
          <button onClick={handleModalOptions} className={`${ericaOne.className} button-cancelar`}>CANCELAR</button>
          <button className={`${ericaOne.className} button-aceptar`}>ACEPTAR</button>
        </div>
      </ article>
    </section>
  )
}
