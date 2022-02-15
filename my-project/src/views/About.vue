<template>
  <div class="about">
    <h1>以下にお答えください</h1>
    <p>現在、生命保険に加入されていますか？</p>
    <label><input type="radio" id="y" name="question1" v-model="picked" value="はい">はい</label>
    <label><input type="radio" id="n" name="question1" v-model="picked" value="いいえ">いいえ</label><br>
    <button><router-link to="/">前へ戻る</router-link></button>
    <button><router-link to="/text">次へ進む</router-link></button>
  </div>
</template>
<script>

</script>

