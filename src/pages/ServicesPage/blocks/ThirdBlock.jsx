import './third.less'
import CountUp from 'react-countup';
export default function ThirdBlock(){
    return(
        <main className="third_service">
            <div className="container">
                <div>
                    <h3><CountUp duration={4} end={6}/></h3>
                    <p>Happy clients</p>
                </div>
                <div>
                    <h3><CountUp duration={4} end={11}/></h3>
                    <p>Completed Projects</p>
                </div>
                <div>
                    <h3><CountUp duration={5} end={7}/>M</h3>
                    <p>Transsactions</p>
                </div>
                <div>
                    <h3><CountUp duration={3} end={6000}/>+</h3>
                    <p>Customers</p>
                </div>
            </div>
        </main>
    )
}