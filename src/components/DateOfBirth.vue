<template>
    <div class="date">
    <div class="row">
    <div class="col">
     <img src="../assets/worker.png" class="logo" alt="user">
    </div>
    <div class="col formDate">
      <div class="mb-3">
        <h2>¿Cuál es tu fecha de nacimiento?</h2>
        <input type="date" class="form-control" id="exampleFormControlInput1">
        </div>
    </div>
    
  </div>
    </div>
</template>

<style scoped>
.formDate{
    background:rgba(173, 165, 165, 0.651);
}
.row{
    margin: 0 auto;
    width:60%;
    height:100px ;
}
.logo{
    width: 100px;
    border-radius: 50%;
    border: 0.5px solid green;
}
.date{
    margin-top: 15px;
}
</style>