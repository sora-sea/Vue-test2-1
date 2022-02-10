<template>
  <div class="home">
    <h1>お客様の情報を入力してください</h1>
    <p>性別</p>
    <label><input type="radio" name="gender" v-model="picked" value="男性">男性</label>
    <label><input type="radio" name="gender" v-model="picked" value="女性">女性</label>
    <p>生年月日</p>
    <p><input type="date"></p>
  </div>
</template>

<style>
#backbtn {display: none;}
</style>

<script>
// @ is an alias to /src
</script>
