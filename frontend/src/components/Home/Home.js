import HomeHeader from "./HomeHeader";
import HomeBK from './HomeBK'
import HomeQN from './HomeQN'
import HomeBR from './HomeBR'
import HomeSI from './HomeSI'
import HomeMan from './HomeMan'
import Footer from '../Footer'

import './Homegrid.css'  
function Home() {
 
  return (
    <div className='layout__splash_container'>
        <section className='layout__splash_header' >
            <HomeHeader />
        </section>
        <section className='layout__splash_BK' >
            <HomeBK />
        </section>
        <section className='layout__splash_QN' >
            <HomeQN />
        </section>
        <section className='layout__splash_BR' >
            <HomeBR />
        </section>
        <section className='layout__splash_SI' >
            <HomeSI />
        </section>
        <section className='layout__splash_Man' >
            <HomeMan />
        </section>
        <section className='layout__splash_FOOT' >
            <Footer />
        </section>
    </div>
)
};
export default Home;    