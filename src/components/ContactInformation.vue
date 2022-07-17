<template>
    <div class="contact">
    <div class="row">
    <div class="col">
     <img src="../assets/worker.png" class="logo" alt="user">
    </div>
    <div class="col formDate">
      <div class="mb-3">
        <h2>Datos de contacto</h2>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Correo electrónico">
        <input type="phone" class="form-control" id="exampleFormControlInput1" placeholder="Teléfono celular">
      </div>
      <div>
      <button type="submit" class="btn btn-primary btn-lg">Iniciar</button>
      </div>
    </div>
    
  </div>
    </div>
</template>

<style scoped>
.formDate{
    background:rgba(173, 165, 165, 0.651);
    margin-bottom:20px ;
}
.row{
    margin: 0 auto;
    width:60%;
    height:250px ;
}
.logo{
    width: 100px;
    border-radius: 50%;
    border: 0.5px solid green;
}
.contact{
    margin-top: 80px;
}
.form-control{
    margin-bottom: 20px;
    padding: 12px;
    
}
.btn{
  margin: 0 auto;
}

div .btn{
  display: flex;
  justify-content: center;
}
</style>