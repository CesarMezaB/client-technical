<template>
<div class="container">
  <div class="head">
    <h1>Formulario de registro</h1>
  </div>
  <NameUser/>
  <DateOfBirth/>
  <ContactInformation/>
</div>
</template>

<script>
import NameUser from './components/NameUser.vue'
import DateOfBirth from './components/DateOfBirth.vue'
import ContactInformation from './components/ContactInformation'

export default {
  name: 'App',
  components: {
    NameUser,
    DateOfBirth,
    ContactInformation
  }
}
</script>

<style>
.head{
  background-color: rgb(255, 126, 148);
  height: 80px;
  margin-bottom: 30px;
}
.head h1{
  text-align: center;
  color: rgb(254, 255, 255);
  padding-top: 10px;
  
}
</style>
