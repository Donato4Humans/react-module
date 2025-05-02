const FormComponent = () => {
    return (
        <div>
            <form>
                <input type="text" name={'username'}/> // we cant control such forms when user enters data
                <input type="text" name={'password'}/>
            </form>
        </div>
    );
};

export default FormComponent;