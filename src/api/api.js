

export const fetchAlerts =  props =>
    fetch(
        `https://developer.nps.gov/api/v1/alerts?parkCode=${props}&api_key=jCQ5KCtpFgJzqjLe5tSoH14OHMPA1fkuvBKhJY60`
    ).then(res => res.json());


export const fetchParkInfo = props =>
    fetch(
        `https://developer.nps.gov/api/v1/parks?parkCode=${props}&api_key=jCQ5KCtpFgJzqjLe5tSoH14OHMPA1fkuvBKhJY60`
    ).then(res => res.json());


export const fetchCampgrounds = props =>
    fetch(
        `https://developer.nps.gov/api/v1/campgrounds?parkCode=${props}&api_key=jCQ5KCtpFgJzqjLe5tSoH14OHMPA1fkuvBKhJY60`
    ).then(res => res.json());





