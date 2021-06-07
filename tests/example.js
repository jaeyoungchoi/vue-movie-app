// export function asyncFn() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Done!");
//         }, 6000);
//     });
// }
import axios from "axios";
import _toLower from "lodash/toLower";
import _upperFirst from "lodash/upperFirst";

export async function fetchMovieTitle() {
    const res = await axios.get(
        "https://omdbapi.com?apikey=46d7e7df&i=tt4520988"
    );
    return _upperFirst(_toLower(res.data.Title));
}
