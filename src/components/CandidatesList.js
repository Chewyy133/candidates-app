import React from 'react';
import { Candidate } from './Candidate';
import { candidatesApi } from '../rest/CandidatesApi';

export class CandidatesList extends React.Component {
    state = {
        candidate: []
    };

    componentDidMount() {
        this.fetchCandidates();
    }

    fetchCandidates = async () => {
        const candidate = await candidatesApi.get();
        this.setState({ candidate });
    };

    updateCandidate = async (updatedCandidate) => {
        await candidatesApi.put(updatedCandidate);
        this.fetchCandidates();
    };

    render() {
        return (
            <div className="candidate-list">
                {this.state.candidate.map((candidate, index) => (
                    <Candidate
                        uniqueKey={index}
                        candidate={candidate}
                        updateCandidate={this.updateCandidate} />
                ))}
            </div>
        )
    }

}
