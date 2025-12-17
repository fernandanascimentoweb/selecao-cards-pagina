import React, { useState } from 'react'
import './card.css'
import { persona } from '../../assets/data/data'


const Card = () => {

    const cardsPorPagina = 4;
    const [paginaAtual, setPaginaAtual] = useState(1);

    const indexUltimoCard = paginaAtual * cardsPorPagina;
    const indexPrimeiroCard = indexUltimoCard - cardsPorPagina;

    const cardVisiveis = persona.slice(
        indexPrimeiroCard,
        indexUltimoCard
    )

    const totalPaginas = Math.ceil(persona.length / cardsPorPagina)

    const nextPage = () => {
        if (paginaAtual < totalPaginas) {
            setPaginaAtual(paginaAtual + 1)
        }
    }

    const prevPage = () => {
        if (paginaAtual > 1) {
            setPaginaAtual(paginaAtual - 1)
        }
    }


  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>What role do you have?</h1>
            <p>To start your project we need to customize your preferences. <br /> Please, select your user type.</p>
        </div>

        <div className='flex-card'>
            {cardVisiveis.map((p) => (
                <div key={p.id} className='card-list'>
                    <div className='card'>
                        <img src={p.img} alt={p.title} />
                        <h5>{p.title}</h5>
                        <p>{p.desc}</p>
                    </div>
                </div>
            ))}
        </div>

        <div className='button'>
            <button className='btn-next' onClick={prevPage} disabled={paginaAtual === 1}>
                Prev
            </button>

            <span className="page-number">
                {paginaAtual} / {totalPaginas}
            </span>

            <button className='btn-next' onClick={nextPage} disabled={paginaAtual === totalPaginas} >
                Next
            </button>

        </div>
    </div>
  )
}

export default Card