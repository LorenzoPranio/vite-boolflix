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
        <div class="searchbar">
            <input v-model="searchQuery" placeholder="Cerca un Film o una Serie TV..." />
            <button @click="searchContent"><i class="fab fa-sistrix"></i></button>
        </div>
    </div>
</template>


<style lang="scss">
.searchbar{
    margin-top: 10px;
}
input{
    border: none;
    border: 1.5px solid gray;
    width: 300px;
    padding: 5px;
}
button{
    border: none;
    border: 1px solid gray;
    padding: 5px;
    i{
        margin: 4px 10px;
    }
}
</style>