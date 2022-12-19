import React from 'react';

function FormExample() {
    const [formData, setFormData] = React.useState(null);
    const link = 'http://127.0.0.1:8000/media/upload/1'
    const handleSubmit = event => {
        event.preventDefault();

        const data = new FormData(event.target);

        setFormData(data);
    };

    React.useEffect(() => {
        if (formData) {
            fetch(link, {
                method: 'POST',
                body: formData
            });
        }
    }, [formData]);

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" />
            <input type="file" name="file" />
            <button type="submit">Submit</button>
        </form>
    );
}

export default FormExample;