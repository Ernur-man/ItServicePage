import "./second.less";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState } from "react";
import ModalWindow from "../../../components/ModalWindow";

export default function SecondBlock() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        axios.post('https://formspree.io/f/xljrdpbg', {
            name: name,
            email: email
        })
        .then(()=>{
            setSuccess(true)
            setName('')
            setEmail('')
            setTimeout(()=>{
                setSuccess(false);
            }, 3200)
        })
        .catch((e)=>alert("Error: ",e))
    };

    return (
        <main className="contact_second">
            <div className="container">
                <h2>Say Hello</h2>
                <p>Lorem Ipsum is simply dummy text of the printing.</p>
                <ModalWindow active={success}/>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        placeholder="Name"
                        {...register("Name", {
                            required: "Enter Name",
                            minLength: {
                                value: 3,
                                message: "Minimum 3 characters",
                            },
                        })}
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                    {errors.Name && (
                        <span className="error">
                            {errors.Name.message}
                        </span>
                    )}

                    <input
                        type="email"
                        placeholder="Email Address"
                        {...register("Email", {
                            required: "Enter Email",
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: "Invalid email address",
                            }
                            ,
                        })}
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    {errors.Email && (
                        <span className="error">
                            {errors.Email.message}
                        </span>
                    )}

                    <textarea
                        placeholder="Message"
                        {...register("Message")}
                    />

                    <button type="submit">
                        Get in touch
                    </button>
                </form>
            </div>
        </main>
    );
}
