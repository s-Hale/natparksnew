

// const fetchAlerts = async props => {
//     const res = await fetch(
//         `https://developer.nps.gov/api/v1/alerts?parkCode=${props}&api_key=jCQ5KCtpFgJzqjLe5tSoH14OHMPA1fkuvBKhJY60`
//     );
//     return await res.json();
// };

export const fetchParkInfo = props => {
    return fetch(
        `https://developer.nps.gov/api/v1/parks?parkCode=${props}&api_key=jCQ5KCtpFgJzqjLe5tSoH14OHMPA1fkuvBKhJY60`
    ).then(res => res.json());
};




export default fetchParkInfo;