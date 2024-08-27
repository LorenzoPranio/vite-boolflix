<script>
import AppCard from './AppCard.vue';
import { store } from '../store.js'
export default{
    data() {
        return {
            store
        }
    },
  components:{
    AppCard
  }
}
</script>

<template>
    <div class="bg-black">
        <AppCard />
    </div>
</template>

<style lang="scss">
.bg-black{
  background-color: rgb(40, 40, 40);
}
</style>