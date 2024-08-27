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
    <div>
        <AppCard />
    </div>
</template>


<style lang="scss">
</style>