<script>
import { store } from "../store.js";
export default {
    data() {
        return {
            store,
            searchQuery: '',
        }
    },
    methods: {
        searchContent() {
            if (this.searchQuery.toLowerCase) {
                store.searchMovie(this.searchQuery)
                .then(movieResults => {
                    return store.searchSeries(this.searchQuery)
                    .then(seriesResults => {
                        this.store.resultsMovies = [...movieResults];
                        this.store.resultsSeriesTV = [ ...seriesResults];
                    });
                })
                .catch(error => {
                    console.error("Errore nella ricerca:", error);
                });
            }
        }
    }
};
</script>

<template>
    <div>
        <input v-model="searchQuery" placeholder="Cerca un Film o una Serie TV..." />
        <button @click="searchContent">Cerca</button>
    </div>
</template>


<style lang="scss">

</style>