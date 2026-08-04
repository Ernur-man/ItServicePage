import "./second.less";
import { useForm } from "react-hook-form";

export default function SecondBlock() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Data:", data);
    };

    return (
        <main className="contact_second">
            <div className="container">
                <h2>Say Hello</h2>
                <p>Lorem Ipsum is simply dummy text of the printing.</p>

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
                            },
                        })}
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
