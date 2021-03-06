import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null
}
function TodoForm(props) {
    const { onSubmit } = props;
    const [value, setValue] = useState('')

    function handleOnChange(e) {
        setValue(e.target.value);
    }

    function handleSubmit(e) {
        // prevent reloading browser
        e.preventDefault();
        const formValues = {
            title: value
        }
        onSubmit(formValues);
        setValue("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value}
                onChange={handleOnChange}
            />
        </form>
    );
}

export default TodoForm;