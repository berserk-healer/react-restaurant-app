import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import './index.scss'
import swiperItem from './swiperitem'

const Home = () => {

    return (
        <section className='wrapper'>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">

                {swiperItem.map((item)=> (
                    <SwiperSlide key={item.id}>
                        <div className='content'>
                            <span>Our special dish</span>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <a href='#/menu' className='btn'>Order now</a>
                        </div>
                        <div className='image'>
                                <img src={require(`../../../assets/img/${item.imgURL}`)} alt={item.name} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}


export default Home