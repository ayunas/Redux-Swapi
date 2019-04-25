import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator


export function getStarWarsApi(url) {
    return (dispatch) => {
        dispatch( { type: 'FETCH' } );
        axios.get(url)
             .then( res => {
                 console.log(res.data);
                 dispatch({type: "SUCCEED", payload: res.data.results});
             })
             .catch( err => {
                 console.log(err);
             })
    }
}

// export function fetching() {
//     return {
//         type: "FETCHING"
//     }
// }

// export function succeed() {
//     return {
//         type: "SUCCEED"
//     }
// }


// export function fail() {

//     return {
//         type: "FAIL"
//     }

// }
