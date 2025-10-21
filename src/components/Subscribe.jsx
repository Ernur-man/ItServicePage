import './subscribe.less'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Subscribe() {
    const [mail, setMail] = useState('')
    const [modal, setModal] = useState(false)
    const [dat, setData] = useState([])
    const [styleModal, setStyleModal] = useState({
        position: 'absolute',
        right: 0,
        bottom: '20px',
        width: '200px',
        background: 'rgba(255, 255, 255, 0.493)',
        padding: '20px',
        transition: '2s ease',
        opacity: 1
    })

    useEffect(() => {
        axios.get('./mails.json')
            .then((response) => setData(response.data))
            .catch(error => console.error(error))
    }, [])

    function checkMails(e){
        e.preventDefault()
        const exists = dat.some(t => t.mail === mail)
        if(!exists){
            setModal(true)
            setStyleModal((prev)=>({...prev, display: 'block', opacity: 0}))
            
            setTimeout(()=>{
                setStyleModal((prev)=>({...prev, opacity: 1}))
            },50)
            
            setTimeout(()=>{
                setStyleModal((prev)=>({...prev, opacity: 0}))
            },2000)

            setTimeout(()=>{
                setModal(false)
            },3000)
        }
        else{
            setModal(false)
        }
    }



    return (
        <section className='subscribe'>
            <div className="container">
                <h2>Lorem Ipsum is simply dummy text of the printing. </h2>
                <form>
                    <input
                        type="text"
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                    />
                    <button onClick={checkMails}>Subscribe</button>
                </form>
                {
                    modal && (
                        <div style={styleModal} className='modal_error'>
                            <h2>Undefined</h2>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Subscribe
