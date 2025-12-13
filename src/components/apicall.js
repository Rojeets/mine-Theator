async function Call(title, type, i) {
    try {
        const apiKey = '9eb5f0aa';
        if (!apiKey) {
            throw new Error('Missing REACT_APP_OMDB_API_KEY environment variable');
        }

        const query = `${title ? `&s=${encodeURIComponent(title)}` : `&i=${encodeURIComponent(i)}`}${type ? `&type=${encodeURIComponent(type)}` : ``}`;
        // Use proxy (defined in package.json) with a relative path
        // const response = await fetch(`/\u003Fapikey=${apiKey}${query}`);
        const response = await fetch(`http://www.omdbapi.com/?apikey=9eb5f0aa${title ? `&s=${encodeURIComponent(title)}` : `&i=${encodeURIComponent(i)}`}${type ? `&type=${encodeURIComponent(type)}` : ``}`);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const result = title ? data.Search.slice(0, 15) : data
        // console.log('Data:', data.Search);
        // console.log(result)
        return result;

    } catch (error) {
        console.error('Fetch error:', error);
    }
}

export default Call;

