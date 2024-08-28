<script>
import AppSearchbar from '../components/AppSearchbar.vue';
export default{
  components:{
    AppSearchbar
  }
}
</script>

<template>
    <div class="bg-black">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <h1>BOOLFLIX</h1>
          </div>
          <div class="col-6 text-end">
            <AppSearchbar />
          </div>
        </div>
      </div>     
    </div>
</template>


<style lang="scss" scoped>
.bg-black{
  background-color: rgb(40, 40, 40);
  h1{
    color: rgb(151, 14, 14);
    font-weight: bolder;
  }
}
</style>