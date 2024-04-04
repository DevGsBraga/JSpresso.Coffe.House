import { Link } from 'react-router-dom';
import './ButtonStyle.css';


// eslint-disable-next-line react/prop-types
const Button = ({title, url}) => {
  return (
    <div className='container-btn'>
        <Link className='btn-principal' to={url}> {title} </Link>
    </div>
  )
}

export default Button
