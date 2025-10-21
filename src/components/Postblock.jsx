import './postblock.less'
export default function Postblock(props){
    return(
        <main className="postblock">
            <div className="container">
                <h2>{props.text}</h2>
            </div>
        </main>
    )
}