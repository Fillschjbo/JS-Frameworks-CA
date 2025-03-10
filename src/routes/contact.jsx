import { useForm } from "react-hook-form";

export function RenderContact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Submitted:", data);
    };

    return (
        <div className="max-w-lg mx-auto p-4 border rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block font-medium">Full Name</label>
                    <input
                        type="text"
                        {...register("fullName", { required: "Full name is required", minLength: { value: 3, message: "Must be at least 3 characters" } })}
                        className="border p-2 w-full rounded"
                    />
                    {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
                </div>

                <div>
                    <label className="block font-medium">Subject</label>
                    <input
                        type="text"
                        {...register("subject", { required: "Subject is required", minLength: { value: 3, message: "Must be at least 3 characters" } })}
                        className="border p-2 w-full rounded"
                    />
                    {errors.subject && <p className="text-red-500">{errors.subject.message}</p>}
                </div>

                <div>
                    <label className="block font-medium">Email</label>
                    <input
                        type="email"
                        {...register("email", { required: "Email is required", pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: "Invalid email address" } })}
                        className="border p-2 w-full rounded"
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>

                <div>
                    <label className="block font-medium">Body</label>
                    <textarea
                        {...register("body", { required: "Body is required", minLength: { value: 3, message: "Must be at least 3 characters" } })}
                        className="border p-2 w-full rounded h-24"
                    ></textarea>
                    {errors.body && <p className="text-red-500">{errors.body.message}</p>}
                </div>

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
}
