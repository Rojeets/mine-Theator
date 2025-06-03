async function Call(title, type, i) {
    try {
        // console.log(title);
        // if (!title) {
        //     title = 'any'
        //     console.log("empty");
        // }

        // console.log(i);
        const response = await fetch(`http://www.omdbapi.com/?apikey=9eb5f0aa${title ? `&s=${encodeURIComponent(title)}`: `&i=${encodeURIComponent(i)}`}${type ? `&type=${encodeURIComponent(type)}` : ``}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const result = title ? data.Search.slice(0, 15) : data
        // console.log('Data:', data.Search);
        console.log(result)
        return result;
        
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

export default Call;

