import { useState } from 'react'
import data from '../../news.json'
import './testblock.less'

export default function TestBlock(){
    const categories = Object.keys(data)
    const [activeTab, setActiveTab] = useState(categories[0])
    

    return(
        <main className='test'>
            <div className="container">
                {
                    categories.map((el,i)=>(
                        <button key={i} onClick={()=>setActiveTab(el)} className={`btn ${activeTab === el ? "active" : ""}`}>{el}</button>
                    ))
                }
                <article>
                    {
                        data[activeTab].map((post, index)=>(
                            <div key={index}>
                                <h2>{post.new1}</h2>
                            </div>
                        ))
                    }
                </article>
            </div>
        </main>
    )
}