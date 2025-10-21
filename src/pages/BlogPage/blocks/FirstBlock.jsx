import axios from "axios"
import { useState, useEffect } from "react"
import './first.less'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import suit from '../../../../public/suit.svg'
import iconFirst from '../../../../public/iconFirst.svg'


export default function FirstBlock(){
    const [data, setData] = useState([])
    const [txt, setTxt] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [allcards, setAllCards] = useState('')

    useEffect(()=>{
        axios.get('./search.json')
            .then(res=> setData(res.data))
            .catch((error)=>console.log(error))
    },[])

    function Search(e){
        const value = e.target.value.toLowerCase()
        setTxt(value)
        if(!value){
            setFilteredData([])
            return 0 
        }
        setFilteredData(data.filter((card)=>card.title.toLowerCase().startsWith(value) && card.title.toLowerCase().includes(value)))
    }
    return(
        <main className="blog_first">
            <div className="container">
                <h2>Latest news <span>Updates</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <form>
                    <input type="search" value={txt} onChange={Search} placeholder="search"/>
                </form>
            </div>
            <Tabs className="table">
                
                    <TabList className="column">
                        <Tab className="tabs" onClick={()=>setAllCards('good')}>All</Tab>
                        <Tab className="tabs">Title 1</Tab>
                        <Tab className="tabs">Title 2</Tab>
                    </TabList>
                    {filteredData.length > 0 && (
                        <div className="found_card">
                            <aside>
                                <img src={filteredData[0].img} alt="" />
                            </aside>
                            <aside>
                                <h2>{filteredData[0].title}</h2>
                                <p>{filteredData[0].desc}</p>
                                <article>
                                    <div>
                                        <nav>
                                            <img src={filteredData[0].icon}alt="" />
                                            <h3>Name here</h3>
                                            <p>20.12.2020</p>
                                        </nav>
                                    </div>
                                    <button>Read More</button>
                                </article>
                            </aside>
                        </div>
                        )
                    }
                    <div className="row">
                        <TabPanel className="allCards">
                           { 
                                allcards.length > 0 && (
                                    data.map((el,i)=>(
                                        <div key={i}>
                                            <img src={el.img} alt="" />
                                            <h2>{el.title}</h2>
                                            <p>{el.desc}</p>
                                            <nav>
                                                <img src={el.icon} alt="" />
                                                <article>
                                                    <h3>Name Here</h3>
                                                    <p>20.12.2020</p>
                                                </article>
                                            </nav>
                                        </div>
                                    ))
                                ) 
                            }
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 1</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                    </div>
            </Tabs>

        </main>
    )
}