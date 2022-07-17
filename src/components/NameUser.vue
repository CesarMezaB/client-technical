<template>
<div>
  <div class="row">
    <div class="col">
     <img src="../assets/worker.png" class="logo" alt="user">
    </div>
    <div class="col form">
      <div class="mb-3">
        <h2>¿Cuál es tu nombre?</h2>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nombre">
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Segundo nombre">
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Apellido Paterno">
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Apellido materno">
   
        </div>
    </div>
    
  </div>
</div>
        
</template>
<script>
export default {
  name: 'NameUser',
  
}
</script>

<style scoped>
.row{
    margin: 0 auto;
    width:60%;
    height:400px ;
}
.logo{
    width: 100px;
    border-radius: 50%;
    border: 0.5px solid green;
}
.form{
    background:rgba(173, 165, 165, 0.651);
}
.form-control{
    margin-bottom: 20px;
    padding: 12px;
}
h2{
    padding: 10px;
}
</style>
