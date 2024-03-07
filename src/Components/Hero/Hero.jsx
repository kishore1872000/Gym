import React, { useContext } from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter'
import Button from '../Ui/Button'
import CartContext from '../../store/CartContext'
import UserProgressContext from '../../store/UserProgressContext'
const Hero = () => {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0);

   function handleShowCart() {
    userProgressCtx.showCart()
   }

    const transition = { type: 'spring', duration: 3 }
    const mobile = window.innerWidth <= 786 ? true : false;
    return (
        <div className="hero" id="home">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: mobile ? '165px' : '195px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    ></motion.div>
                    <span> The Best Fitness Club in the Town</span>
                </div>
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'> Shape</span>
                        <span> your</span>
                    </div>
                    <div>
                        <span>Insert Body</span>
                    </div>
                    <div >
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>
                </div>
                <div className="figures">
                    <div>
                        <span><NumberCounter end={140} start={100} delay='4' preFix="+" /></span>
                        <span>expert coachs</span>
                    </div>
                    <div>
                        <span><NumberCounter end={948} start={808} delay='4' preFix="+" /></span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span><NumberCounter end={50} start={0} delay='4' preFix="+" /></span>
                        <span>fitness programs</span>
                    </div>
                </div>
                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-h">
                <button className="btn"> Join Now</button>
                <motion.div
                    initial={{ right: '-1rem' }}
                    whileInView={{ right: "4rem" }}
                    transition={transition}
                    className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span> 116 bpm</span>
                </motion.div>

                <img src={hero_image} alt="" className='hero-image' />
                <motion.img
                    initial={{ right: '11rem' }}
                    whileInView={{ right: "28rem" }}
                    transition={transition}
                    src={hero_image_back} alt="" className='hero-image-back' />
                <motion.div
                    initial={{ right: '37rem' }}
                    whileInView={{ right: "28rem" }}
                    transition={transition}
                    className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span> 220 kcal</span>

                    </div>
                </motion.div>
                <div>
                    <Button textOnly onClick={handleShowCart} className="btn2"> Cart ({totalCartItems})</Button>
                </div>
            </div>

        </div>
    )


}



export default Hero