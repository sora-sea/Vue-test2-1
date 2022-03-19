<template>
  <div class="text">
    <h1>ご相談内容をご記入ください</h1>
    <p>ご相談内容</p>
    <p><textarea name="" id="" cols="30" rows="10" @change="text" value=""></textarea></p>
    <button><router-link to="/about">前へ戻る</router-link></button>
    <button><router-link to="/check">次へ進む</router-link></button>
  </div>
</template>

<script>
export default{
  methods: {
    text (e) {
      this.$store.commit('text',e.target.value)
    }
  }
}
</script>