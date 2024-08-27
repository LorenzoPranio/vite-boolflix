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
    const getStar = (voteAverage, starIndex) => {
        const ratingOutOfFive = (voteAverage / 10) * 5;
        const fullStars = Math.floor(ratingOutOfFive);

        if (starIndex <= fullStars) {
            return 'bi bi-star-fill text-warning';
        } else {
            return 'bi bi-star';
        }
    };
    return {
      store,
      getFlag,
      getStar
    }
  },
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div v-if="store.resultsMovies.length > 0">
          <h1 class="text-center">Risultati dei Film:</h1>
          <div class="row">
            <div class="col-3" v-for="item in store.resultsMovies" :key="item.id">
              <div class="card" style="width: 18rem;">
                <img :src="item.poster_path ? `https://image.tmdb.org/t/p/w342/${item.poster_path}` : `https://placehold.co/342x513?text=${item.title}`">
                <div class="card-body">
                  <div class="card-title">
                    <h5>Titolo:</h5><p>{{ item.title }}</p>
                    <h5>Titolo Originale:</h5><p>{{ item.original_title }}</p>
                  </div>
                  <div class="card-text">
                    <h5>Overview:</h5><p>{{ item.overview }}</p>
                  </div>
                </div>
                <div class="card-body">
                  <div class="rating">
                    <h5>Voto:</h5>
                    <span v-for="n in 5" :key="n">
                      <i :class="getStar(item.vote_average, n)"></i>
                    </span>
                  </div>
                  <h5>Lingua originale:</h5>
                    <span :class="`fi fi-${getFlag(item.original_language)}`"></span>
                </div>
              </div>
            </div>  
          </div>
        </div> 
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div v-if="store.resultsSeriesTV.length > 0">
            <h1 class="text-center">Risultati delle Serie Tv:</h1>
            <div class="row">
              <div class="col-3" v-for="item in store.resultsSeriesTV" :key="item.id">
                  <div class="card" style="width: 18rem;">
                  <img :src="item.poster_path ? `https://image.tmdb.org/t/p/w342/${item.poster_path}` : `https://placehold.co/342x513?text=${item.title}`">
                  <div class="card-body">
                    <h5 class="card-title">{{ item.name }} ({{ item.original_title }})</h5>
                    <p class="card-text">{{ item.overview }}</p>
                  </div>
                  <div class="card-body">
                    <div class="rating">
                      <h5>Voto:</h5>
                      <span v-for="n in 5" :key="n">
                        <i :class="getStar(item.vote_average, n)"></i>
                      </span>
                    </div>
                    <h5>Lingua originale:</h5>
                      <span :class="`fi fi-${getFlag(item.original_language)}`"></span>
                  </div>
                  </div>
                </div> 
            </div>
          </div>
        </div>
      </div> 
    </div>
  </div>
</template>

<style lang="scss">
h5{
  display: inline;
  margin-right: 10px;
}
</style>