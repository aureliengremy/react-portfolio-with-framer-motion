import {useState, useEffect} from 'react';

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const media = window.matchMedia(query)
        // console.log(query);
        if( media.matches !== matches) {
            // console.log(media.matches !== matches, 
            //     "media.matches =" + media.matches,
            //     "matches =" + matches);
            setMatches(media.matches)
        }
        const listener = () => setMatches(media.matches)
        window.addEventListener('resize', listener)
        return () => window.removeEventListener('resize', listener)
        }, [matches, query])
        return matches
}

export default useMediaQuery