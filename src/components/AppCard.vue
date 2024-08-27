<script>
import { store } from '../store.js';
export default{
  setup(){
    const getFlag = (languageCode) => {
      const languageCountry = {
        en: 'us',
        ja: 'jp',
        ko: 'kr',
        zh: 'cn',
        hi: 'in',
        ar: 'sa',
      };
      return languageCountry[languageCode] || languageCode;
    };
    return {
      store,
      getFlag
    }
  },
}
</script>

<template>
    <div>
        <div v-if="store.resultsMovies.length > 0">
            <h2>Risultati dei Film:</h2>
            <ul>
                <li v-for="item in store.resultsMovies" :key="item.id">
                  <img :src="item.poster_path ? `https://image.tmdb.org/t/p/w342/${item.poster_path}` : `https://placehold.co/342x513?text=${item.title}`">
                  {{ item.title }} ({{ item.original_title }}) ({{ item.vote_average }})
                  <span :class="`fi fi-${getFlag(item.original_language)}`"></span>
                  {{ item.poster_path }}
                </li>
            </ul>
        </div>
        <div v-if="store.resultsSeriesTV.length > 0">
            <h2>Risultati delle Serie Tv:</h2>
            <ul>
                <li v-for="item in store.resultsSeriesTV" :key="item.id">
                  <img :src="item.poster_path ? `https://image.tmdb.org/t/p/w342/${item.poster_path}` : `https://placehold.co/342x513?text=${item.title}`">
                  {{ item.name }} ({{ item.original_title }}) ({{ item.vote_average }})
                  <span :class="`fi fi-${getFlag(item.original_language)}`"></span>
                </li>
            </ul>
        </div>
    </div>
</template>


<style lang="scss">
</style>