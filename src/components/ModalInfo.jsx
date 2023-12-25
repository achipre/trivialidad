import './modalInfo.css'
export default function ModalInfo({handleModalInfo}) {
  return (
    <section className='section-info' onClick={handleModalInfo}>
      <article>
        <h2>Desarrollador</h2>
      </article>
    </section>
  )
}
