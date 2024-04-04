import './FavStyle.css';

import Button from '../Button/Button';


// eslint-disable-next-line no-empty-pattern, react/prop-types
const FavComponent = ({foto, nome, preco }) => {
  return (
    <div className='fav-contain'>
        <div className='contain-img'>
            <img className='img-component' src={foto} alt="Imagem do café" />
        </div>

        <div className='contain-description'>
            <div className="contain-title-and-preco">
                <div className='nome-component'>
                    <h3>{nome}</h3>
                </div>

                <div className='preco-component'>
                    <span>{preco}</span>
                </div>
            </div>

            <div className='btn-car'>
                <Button title={'Comprar agora'} />
            </div>




        </div>

    </div>
  )
}

export default FavComponent
