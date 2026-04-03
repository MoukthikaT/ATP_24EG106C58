import {useForm} from 'react-hook-form'; 
import { useState } from 'react';


function FormDemo(){
    const [users, setUsers] = useState([]);
    const {
        register, // to register form fields
        handleSubmit,// to handle form submissions
        formState:{errors},// to handle validations
    } = useForm()

    // form submit function
    const onFormSubmit = (obj) => {
    setUsers([...users, obj]);
};

    return(
        <div className="min-h-screen bg-blue-300 flex flex-col items-center justify-center gap-6 p-6">              
            <div className='bg-amber-500 p-6 rounded-lg w-80 text-center shadow-lg'>
                <h1 className='text-center text-5xl'>User Form</h1>
                <form className='max-w-md mx-auto mt-10'
                    onSubmit={handleSubmit(onFormSubmit)}>
                    <div className='mb-3'>
                        <label htmlFor="firstname">First name</label>
                        <input type="text"
                        {...register("firstname",
                            {
                                required:"FirstName Required",
                                validate:(v)=>v.trim().length!==0 || "White space not allowed",
                                minLength:4
                            })} 
                        id='firstname' 
                        className='border w-full p-3'
                        />

                        {/* Username validation error message */}
                        {errors.firstname?.type === 'required' && <p className='text-red-500'>{errors.firstname.message}</p>}
                        {
                            errors.firstname?.type==='minLength' && <p className='text-red-500'>Min Length of firstname is 4</p>
                        }
                        {
                            errors.firstname?.type==='validate' && <p className='text-red-500'>{errors.firstname.message}</p>
                        }
                    </div>
                    {/* email */}
                    <div>
                        <label htmlFor="email">email</label>
                        <input type="email" {...register("email",
                            {
                                required:"Email is Required",
                            }
                        )} id="email" className='border w-full p-3 mb-3' />

                        {/* Email validation error message */}
                        {errors.email?.type === 'required' && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="dob">DateOfBirth</label>
                        <input type="date" {...register("dob",
                            {
                                required:"DoB is Required",
                            }
                        )} id="dob" className='border w-full p-3' />

                        {/* DoB validation error message */}
                        {errors.dob?.type === 'required' && <p className='text-red-500'>{errors.dob.message}</p>}
                    </div>
                    
                    <button type='submit' className='border block mx-auto p-3 mt-5 mb-5 bg-green-400'>Add User</button>

                </form>
            </div>
               {/*TABLE  */}
            <div className="bg-red-400 p-6 rounded-lg w-80 text-center">
                <h2 className="text-xl font-bold mb-4">List of Users</h2>
                <table className="w-full text-sm">
                    <thead>
                        <tr>
                            <th>FirstName</th>
                            <th>Email</th>
                            <th>Date Of Birth</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.firstname}</td>
                            <td>{user.email}</td>
                            <td>{user.dob}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default FormDemo;