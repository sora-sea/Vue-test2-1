<template>
  <div class="home">
    <h1>お客様の情報を入力してください</h1>
    <p>性別</p>
    <label><input type="radio" @change="gender" name="gender" value="男性">男性</label>
    <label><input type="radio" @change="gender" name="gender" value="女性">女性</label>
    <p>生年月日</p>
    <p><input type="date" @change="day" value=""></p>
    <button><router-link to="/about">次へ進む</router-link></button>
    <p>{{$store.state.message}}</p>
  </div>
</template>

<script>
export default {
  methods: {
    gender (e) {
      this.$store.commit('gender', e.target.value)
    },
    day (e) {
      this.$store.commit('day', e.target.value)
    }
  }
}
</script>
