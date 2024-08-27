import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    apiUrlmovies: "https://api.themoviedb.org/3/search/movie",
    apiUrlseries: "https://api.themoviedb.org/3/search/tv",
    apiKey: "a3ae5cde41d9fe7f7e09e747cd3a024f",
    apiLanguage: "it-IT",
    resultsMovies: [],
    resultsSeriesTV: [],

    searchMovie(movieName) {
        return axios.get(`${this.apiUrlmovies}?api_key=${this.apiKey}&query=${movieName}`)
        .then(response => {
            return response.data.results;
        })
        .catch(error => {
           console.error("Errore nella ricerca del Film:", error);
            return null;
        });
    },

    searchSeries(seriesName) {
        return axios.get(`${this.apiUrlseries}?api_key=${this.apiKey}&query=${seriesName}`)
        .then(response => {
            return response.data.results;
        })
        .catch(error => {
            console.error("Errore nella ricerca della Serie TV:", error);
            return null;
        });
    }
});
