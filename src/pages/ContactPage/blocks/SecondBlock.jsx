import './second.less'
import { useForm } from "react-hook-form"
export default function SecondBlock(){
    const {register, handleSubmit, formState: {errors}}= useForm()
    const onSubmit = (data)=>{
        console.log('Data: ', data)
    }
    return(
        <main className="contact_second">
            <div className="container">
                <h2>Say Hello</h2>
                <p>Lorem Ipsum is simply dummy text of the printing .</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register('Name', {required: true})} placeholder='Name'/>
                    <input type="text" {...register('Email', {required: true})} placeholder='Email Address'/>
                    <textarea {...register('Message', {required: false})} placeholder='Message'></textarea>
                    <button type='Submit'>Get in touch</button>
                </form>
            </div>
        </main>
    )
}