import {useForm} from 'react-hook-form'; 


function FormDemo(){
    const {
        register, // to register form fields
        handleSubmit,// to handle form submissions
        formState:{errors},// to handle validations
    } = useForm()

    // form submit function
    const onFormSubmit=(obj)=>{
        console.log(obj);
    };

    return(
     <div className='border-s-gray-600'>
        <h1 className='text-center text-5xl'>Form Demo</h1>
        <form className='max-w-md mx-auto mt-10'
            onSubmit={handleSubmit(onFormSubmit)}>
            <div className='mb-3'>
                <label htmlFor="username">Username</label>
                <input type="text"
                {...register("username",
                    {
                        required:"UserName Required",
                        validate:(v)=>v.trim().length!==0 || "White space not allowed",
                        minLength:4
                    })} 
                id='username' 
                className='border w-full p-3'
                />

                {/* Username validation error message */}
                {errors.username?.type === 'required' && <p className='text-red-500'>{errors.username.message}</p>}
                {
                    errors.username?.type==='minLength' && <p className='text-red-500'>Min Length of Username is 4</p>
                }
                {
                    errors.username?.type==='validate' && <p className='text-red-500'>{errors.username.message}</p>
                }
            </div>
            {/* email */}
            <div>
                <label htmlFor="email">email</label>
                <input type="email" {...register("email")} id="email" className='border w-full p-3' />
            </div>
            <button type='submit' className='border block mx-auto p-3 bg-green-400'>Submit</button>

        </form>
     </div>   
    )
}

export default FormDemo