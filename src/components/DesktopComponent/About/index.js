import { faDollarSign, faHeadset, faShippingFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
    return (
        <section className='wrapper'>
            <h3 className='sub-heading'>about us</h3>
            <h1 className='heading'>why choose us?</h1>

            <div className='row'>
                <div className='image'>
                    <img src={require('../../../assets/img/about-img.png')} alt="about" /> 
                </div>

                <div className='content'>
                    <h3>best food in the country</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sequi corrupti corporis quaerat voluptatem ipsam neque labore modi autem, saepe numquam quod reprehenderit rem? Tempora aut soluta odio corporis nihil!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, nemo. Sit porro illo eos cumque deleniti iste alias, eum natus.</p>

                    <div className='icons-container'>
                        <div className='icon-box'>
                            <FontAwesomeIcon className='icon' icon={faShippingFast} color='#27ae60' />
                            <span>free delivery</span>
                        </div>
                        <div className='icon-box'>
                            <FontAwesomeIcon className='icon' icon={faDollarSign} color='#27ae60' />
                            <span>easy payment</span>
                        </div>
                        <div className='icon-box'>
                            <FontAwesomeIcon className='icon' icon={faHeadset} color='#27ae60' />
                            <span>24/7 service</span>
                        </div>
                    </div>
                    <div className='btn'>learn more</div>
                </div>
            </div>
        </section>
    )
}

export default About