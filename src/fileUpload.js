import React from 'react';

function FormExample() {
    const [formData, setFormData] = React.useState(null);
    const url = 'http://127.0.0.1:8000/token'
    const handleSubmit = event => {
        event.preventDefault();

        const data = new FormData(event.target);

        setFormData(data);
    };

    React.useEffect( () => {
        async function fetchData() {
            const token = await fetch(url, {
                method: 'POST',
                body: formData
            });
            return token.json()
        }
        if (formData) {
            console.log(fetchData())
        }
    }, [formData]);

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" />
            <input type="password" name="password" />
            <button type="submit">Submit</button>
        </form>
    );
}

export default FormExample;