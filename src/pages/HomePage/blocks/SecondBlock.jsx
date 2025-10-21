import './SecondBlock.less' 

function SecondBlock(){
    const services_list = [
        {
            imgSrc: '../../../../public/services_icon.svg',
            name: "Web Application",
            desc: "lorem ipsum is simlpy"
        },
        {
            imgSrc: '../../../../public/services_icon.svg',
            name: "Web Application",
            desc: "lorem ipsum is simlpy"
        },
        {
            imgSrc: '../../../../public/services_icon.svg',
            name: "Web Application",
            desc: "lorem ipsum is simlpy"
        },
        {
            imgSrc: '../../../../public/services_icon.svg',
            name: "Web Application",
            desc: "lorem ipsum is simlpy"
        }
    ]
    return(
        <div className="second_block">
        <article>
            <div className="container">
                {services_list.map((el, i)=>(
                    <nav key={i}>
                        <aside>
                            <img src={el.imgSrc} alt={el.name} />
                        </aside>
                        <div>
                            <h4>{el.name}</h4>
                            <p>{el.desc}</p>
                        </div>
                    </nav>
                ))}
            </div>
        </article>
        </div>
    )
}
export default SecondBlock