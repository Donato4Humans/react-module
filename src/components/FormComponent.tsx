import {FormEvent, useState} from "react";

interface IFormProps {
    username: string;
    password: string;
}

const FormComponent = () => {

    const [formState, setFormState] = useState<IFormProps>({ // set default values of form
            username: 'foobar',
            password: '1111'
    })

    const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = {
            username: formState.username,
            password: formState.password,
        };
        console.log(user, 'user sent to API');
    }

    // ABOVE ARE TWO OLD AND NOT USED NOW FOR FORMS INPUT CONTROL APPROACHES-----------------------------------------

    // const handleUsernameChange = (e: FormEvent<HTMLInputElement>) => { // FIRST APPROACH
    //     const input = e.target as HTMLInputElement;
    //     setFormState({...formState, username: input.value }); // get default state of form and then change field with entered value from form
    // }
    // const handlePasswordChange = (e: FormEvent<HTMLInputElement>) => {
    //     const input = e.target as HTMLInputElement;
    //     setFormState({...formState, password: input.value });
    // }

    const handleInputChange = (e: FormEvent<HTMLInputElement>) => { // second approach
        const input = e.target as HTMLInputElement;
        setFormState({...formState, [input.name]: input.value }); // dynamic change of field name depending on which field changed
    }

    return (
        <div>
            <form onSubmit={handleSumbit}>
                <input className='border-2' type="text" name={'username'} value={formState.username} onChange={handleInputChange}/>
                <input className='border-2' type="text" name={'password'} value={formState.password} onChange={handleInputChange}/>
                <button className='border-2'>send</button>
            </form>
        </div>
    );
};

export default FormComponent;