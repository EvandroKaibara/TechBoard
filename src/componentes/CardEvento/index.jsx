import './card-evento.css'

export function CardEvento({ evento }){
    return(
        <div className='card-evento'>
            <img src={evento.capa} alt={evento.titulo} />
            <div className="corpo">
                <p className="tag">
                    {evento.tema.nome}
                </p>
                <p className='data'>
                    {evento.data.toLocaleDateString('pt-BR')}
                </p>
                <p className='titulo'>
                    <span className="titulo">
                        {evento.titulo}
                    </span>
                </p>
            </div>
        </div>
    )
}