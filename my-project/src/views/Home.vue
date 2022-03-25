<template>
  <div class="home">
    <h1>お客様の情報を入力してください</h1>
    <p>性別</p>
    <label><input type="radio" @change="gender" name="gender" value="男性">男性</label>
    <label><input type="radio" @change="gender" name="gender" value="女性">女性</label>
    <p>生年月日</p>
    <p><select name="year" @change="selectyear">
      <option v-for="(year, key) in yearList" :key="key">{{year}}</option>
      </select>年
      <select name="month" @change="selectmonth">
      <option v-for="(month, key) in monthList" :key="key">{{month}}</option>
      </select>月
      <select name="day" @change="selectday">
      <option v-for="(day, key) in dayList" :key="key">{{day}}</option>
    </select>日</p>
    <button><router-link to="/about">次へ進む</router-link></button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      yearList : [0,2000],
      monthList : [0,1],
      dayList : [0,1]
    }
  },
  methods: {
    gender (e) {
      this.$store.commit('gender', e.target.value)
    },
    selectyear (e) {
      this.$store.commit('selectyear', e.target.value)
    },
    selectmonth (e) {
      this.$store.commit('selectmonth', e.target.value)
    },
    selectday (e) {
      this.$store.commit('selectday', e.target.value)
    }
  }
}
</script>
