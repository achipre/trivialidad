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
export default function ModalInfo({handleModalOptions, audioClick, language, handleLanguage, handlePlusVolume, handleLessVolume, volume, dificulty, handleDificultyPlus, handleDificultyLess}) {
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
        <h2 className='titleOptiones'>{language ? 'OPCIONES' : 'OPTIONS'}</h2>
        <hr />

        <div className={`${passionOne.className} optionLanguage`}>
          <p>{language?'Idioma:':'Language:'}</p>
          <IconArrowLeft handleLeft={handleLanguage} />
            <span>{language ? 'ESPAÑOL' : 'ENGLISH'}</span>
          <IconArrowRight handleRight={handleLanguage} />
        </div>

        <div className={`${passionOne.className} optionVolumen`}>
          <p>{language?'Volumen:':'Volume:'}</p>
          <IconArrowLeft handleLeft={handleLessVolume} />
          <span>{formatVolume}</span>
          <IconArrowRight handleRight={handlePlusVolume} />
        </div>
        <div className={`${passionOne.className} optionVolumen`}>
          <p>{language?'Dificultad:':'Dificulty:'}</p>
          <IconArrowLeft handleLeft={handleDificultyLess} />
          <span>{language? dificulty[0].dificultyES : dificulty[0].dificultyEN}</span>
          <IconArrowRight handleRight={handleDificultyPlus} />
        </div>

        <hr />
        <p className="subtitleOptiones">{language ? 'Categorias' : 'Categories'}</p>
        <div className="categories">
        {categories.map(categorie => (
          <label key={categorie.id} onClick={() => handleEvent(categorie.id)} className={`${passionOne.className}`}>
            <p>{language ? categorie.categoryES : categorie.categoryEN}</p>
            <IconCheck isCheck={categorie.isSelect} handleEvent={() => handleEvent(categorie.id)} />
          </label>)
          )
        }
        </div>
        <div className="section-button">
          <button onClick={handleModalOptions} className={`${ericaOne.className} button-cancelar`}>{language ? 'CANCELAR' : 'CANCEL'}</button>
          <button className={`${ericaOne.className} button-aceptar`}>{language ? 'ACEPTAR' : 'APPLY'}</button>
        </div>
      </ article>
    </section>
  )
}
