import React from 'react';
import { NewExperienceForm } from './NewExperienceForm';

export const Candidate = (props) => {
    const { candidate, updateCandidate, uniqueKey } = props;
        // console.log(candidate);
    const deleteExperience = (candidateId) => {
        const updatedCandidate = {
            ...candidate,
            experiences: candidate.experiences.filter((x) => x._id !== candidateId)
        };
        updateCandidate(updatedCandidate);
    }

    const addNewExperiences = (experiences) => {
        return updateCandidate({ ...candidate, experiences: [...candidate.experiences, experiences] });
    };

    const experiences = () => (
        <ul>

                <li key={uniqueKey}>
                    <label> {`${candidate.Candidate} Years: ${candidate.experiences}`}</label>
                    <button onClick={(e) => deleteExperience(candidate._id)}>Delete</button>
                </li>

        </ul>
    );

    return (
        <div>
            <h1>{candidate.name}</h1>
            {
                experiences({ experiences, candidateId: candidate._id, deleteExperience})
            }
            <NewExperienceForm addNewExperiences={addNewExperiences} />
        </div>
    );

};
