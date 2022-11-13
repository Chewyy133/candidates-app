import React, { useState } from 'react';

export const NewExperienceForm = (props) => {
    const [name, setName] = useState('');
    const [experiences, setExperiences] = useState()
    
    const handleExperiencesInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setExperiences(int >= 0 ? int : '');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && experiences) {
            props.addNewExperiences({name, experiences});
            setName('');
            setExperiences('');
        } else {
            console.log('invalid input');
        }
    };

    return (
        <div>
            <h4>Add a new experience</h4>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                type='text'
                placeholder='years'
                onChange={handleExperiencesInput}
                value={experiences}
                />
                <button type='submit' value='submit'>Add Experience</button>
            </form>
        </div>
    )
};

export default NewExperienceForm;

