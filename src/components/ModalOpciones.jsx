import { useState } from "react";
import { Passion_One } from "next/font/google";
import { ericaOne } from '@/app/page'
import IconArrowRight from "./IconArrowRight";
import IconArrowLeft from "./IconArrowLeft";
import IconCheck from "./IconCheck";
import './modalOpciones.css'
import mockup from '@/mockup/categories.json'

const passionOne = Passion_One({weight: '700', subsets: ['latin']})
export default function ModalInfo({handleModalOptions}) {
  const handleClick = (e) => {
    e.stopPropagation()
  }
  // Miscelaneo
  const [isCheckMiscelanea, setIsCheckMiscelanea] = useState(true)
  const handleCheckMiscelanea = () => {
    setIsCheckMiscelanea(!isCheckMiscelanea)
  }
  console.log(mockup);

  return (
    <section className='section-option' onClick={handleModalOptions}>
      <article onClick={handleClick} className={ericaOne.className}>
        <h2 className='titleOptiones'>OPCIONES</h2>
        <hr />

        <div className={`${passionOne.className} optionLanguage`}>
          <p>Idioma:</p>
          <IconArrowLeft /><span>ESPAÑOL</span><IconArrowRight />
        </div>

        <div className={`${passionOne.className} optionVolumen`}>
          <p>Volumen:</p>
          <IconArrowLeft /><span>100%</span><IconArrowRight />
        </div>

        <hr />
        <p className="subtitleOptiones">Categorias</p>
        <div className="categories">
          {mockup.map(cate => (
            <label key={cate.id} className={`${passionOne.className}`}>{cate.name}
              <input type="checkbox" checked={isCheckMiscelanea} hidden />
              <IconCheck handleCheckMiscelanea={handleCheckMiscelanea} isCheckMiscelanea={isCheckMiscelanea} />
            </label>)
            )
          }
          {/* <label className={`${passionOne.className}`}>Miscélanea<input type="checkbox" checked={isCheckMiscelanea} hidden /><IconCheck handleCheckMiscelanea={handleCheckMiscelanea} isCheckMiscelanea={isCheckMiscelanea} /></label>

          <label className={`${passionOne.className}`}>Programación<input type="checkbox" checked={isCheckProgramacion} hidden /><IconCheck handleCheckProgramacion={handleCheckProgramacion} isCheckProgramacion={isCheckProgramacion} /></label>

          <label className={`${passionOne.className}`}>Historia<input type="checkbox" checked={isCheckMiscelanea} hidden /></label>
          <label className={`${passionOne.className}`}>Ciencia y Tecnología<input type="checkbox" checked={isCheckMiscelanea} hidden /></label>
          <label className={`${passionOne.className}`}>Arte y Literatura<input type="checkbox" checked={isCheckMiscelanea} hidden /></label>
          <label className={`${passionOne.className}`}>Geografía<input type="checkbox" checked={isCheckMiscelanea} hidden /></label>
          <label className={`${passionOne.className}`}>Música<input type="checkbox" /></label>
          <label className={`${passionOne.className}`}>Naturaleza<input type="checkbox" checked={isCheckMiscelanea} hidden /></label>
          <label className={`${passionOne.className}`}>Deporte y Ocio<input type="checkbox" checked={isCheckMiscelanea} hidden /></label>
          <label className={`${passionOne.className}`}>Alimentos y bebidas<input type="checkbox" checked={isCheckMiscelanea} hidden /></label>
          <label className={`${passionOne.className}`}>Peliculas y Series<input type="checkbox" checked={isCheckMiscelanea} hidden /></label> */}
        </div>
        <div className="section-button">
          <button className={`${ericaOne.className} button-cancelar`}>CANCELAR</button>
          <button className={`${ericaOne.className} button-aceptar`}>ACEPTAR</button>
        </div>
      </ article>
    </section>
  )
}
