import { createStore } from "vuex";
import about from "./about";
import movie from "./movie";

export default createStore({
    modules: {
        movie,
        about,
    },
});
