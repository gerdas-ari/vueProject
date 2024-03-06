<script>
  import { RouterLink, RouterView } from 'vue-router';
  import "bootstrap/dist/css/bootstrap.min.css";
  import "bootstrap";

</script>

<template>
  

    <div className=" wrap d-flex container align-items-center justify-content-center">

      <RouterView />
      
    </div>

</template>

<style >

h1 {
  margin-bottom: 0;
}

  .page {
    height: 100vh;
  }

  .mt15 {
    margin-top: 15px;
  }
  .mt40 {
    margin-top: 40px;
  }

</style>
