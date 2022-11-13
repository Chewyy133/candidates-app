const CANDIDATES_ENDPOINT = "https://636db917b567eed48ac76b1f.mockapi.io/candidates";

class CandidatesApi {
    get = async () => {
       try {
            const resp = await fetch(CANDIDATES_ENDPOINT);
            const data = await resp.json();
            console.log(data);
            return data;
       } catch(e) {
        console.log('Oops, looks like fetchCandidates had an issue.', e);
       }
    }

    put = async (candidate) => {
        try {
            const resp = await fetch(`${CANDIDATES_ENDPOINT}/${candidate._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(candidate)
            });
            return await resp.json();
        } catch(e) {
            console.log('Oops, looks like updating candidates had an issue.', e);
        }
    }

}   

export const candidatesApi = new CandidatesApi();
