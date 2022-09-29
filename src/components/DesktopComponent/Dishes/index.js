import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'


const Dishes = () => {



    return (
        <section className='wrapper'>
            <h3 className='sub-heading'>our dishes</h3>
            <h1 className='heading'>popular dishes</h1>

            <div className='box-container'> 
                <div className='box'>
                    <img src={require('../../../assets/img/dish-1.png')} alt='dish1' />
                    <h3>Hamburger</h3>
                    <div className='stars'>
                        <FontAwesomeIcon className='icon' icon={faStar} />
                        <FontAwesomeIcon className='icon' icon={faStar} />
                        <FontAwesomeIcon className='icon' icon={faStar} />
                        <FontAwesomeIcon className='icon' icon={faStar} />
                        <FontAwesomeIcon className='icon' icon={faStarHalf} />
                    </div>
                    <span>$2.99</span>
                    <div className='btn'>order now</div>
                </div>
                <div className='box'>
                    <img src={require('../../../assets/img/dish-2.png')} alt='dish2' />
                    <h3>Fried meat</h3>
                    <div className='stars'>
                        <FontAwesomeIcon className='icon' icon={faStar} />
                        <FontAwesomeIcon className='icon' icon={faStar} />
                        <FontAwesomeIcon className='icon' icon={faStar} />
                        <FontAwesomeIcon className='icon' icon={faStar} />
                        <FontAwesomeIcon className='icon' icon={faStar} />
                    </div>
                    <span>$4.99</span>
                    <div  className='btn'>order now</div>
                </div>
                <div className='box'>
                    <img src={require('../../../assets/img/dish-3.png')} alt='dish3' />
                    <h3>Grill Chicken</h3>
                    <div className='stars'>
                        <FontAwesomeIcon className='icon' icon={faStar} />
                        <FontAwesomeIcon className='icon' icon={faStar} />
                        <FontAwesomeIcon className='icon' icon={faStar} />
                        <FontAwesomeIcon className='icon' icon={faStar} />
                        <FontAwesomeIcon className='icon' icon={faStarHalf} />
                    </div>
                    <span>$5.99</span>
                    <div  className='btn'>order now</div>
                </div>
                <div className='box'>
                    <img src={require('../../../assets/img/dish-4.png')} alt='dish4' />
                    <h3>Pizza</h3>
                    <div className='stars'>
                        <FontAwesomeIcon className='icon' icon={faStar} />
                        <FontAwesomeIcon className='icon' icon={faStar} />
                        <FontAwesomeIcon className='icon' icon={faStar} />
                        <FontAwesomeIcon className='icon' icon={faStar} />
                        <FontAwesomeIcon className='icon' icon={faStarHalf} />
                    </div>
                    <span>$10.99</span>
                    <div  className='btn'>order now</div>
                </div>
                <div className='box'>
                    <img src={require('../../../assets/img/dish-5.png')} alt='dish5' />
                    <h3>Cake</h3>
                    <div className='stars'>
                        <FontAwesomeIcon className='icon' icon={faStar} />
                        <FontAwesomeIcon className='icon' icon={faStar} />
                        <FontAwesomeIcon className='icon' icon={faStar} />
                        <FontAwesomeIcon className='icon' icon={faStar} />
                        <FontAwesomeIcon className='icon' icon={faStar} />
                    </div>
                    <span>$3.99</span>
                    <div  className='btn'>order now</div>
                </div>
                <div className='box'>
                    <img src={require('../../../assets/img/dish-6.png')} alt='dish6' />
                    <h3>Fried Chicken</h3>
                    <div className='stars'>
                        <FontAwesomeIcon className='icon' icon={faStar} />
                        <FontAwesomeIcon className='icon' icon={faStar} />
                        <FontAwesomeIcon className='icon' icon={faStar} />
                        <FontAwesomeIcon className='icon' icon={faStar} />
                        <FontAwesomeIcon className='icon' icon={faStarHalf} />
                    </div>
                    <span>$3.50</span>
                    <div className='btn'>order now</div>
                </div>
            </div>

        </section>
    )
}

export default Dishes