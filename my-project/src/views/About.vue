<template>
  <div class="about">
    <h1>以下にお答えください</h1>
    <p>現在、生命保険に加入されていますか？</p>
    <label><input type="radio" @change="add" id="y" name="question1" value="はい">はい</label>
    <label><input type="radio" @change="add" id="n" name="question1" value="いいえ">いいえ</label><br>
    <p v-if="question2">現在入院中ですか。または、最近3ヵ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
    <label v-if="question2"><input type="radio" @change="add2" id="y" name="question2" value="はい">はい</label>
    <label v-if="question2"><input type="radio" @change="add2" id="n" name="question2" value="いいえ">いいえ</label><br>
    <p v-if="question3">過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？</p>
    <label v-if="question3"><input type="radio" id="y" name="question3" value="はい">はい</label>
    <label v-if="question3"><input type="radio" id="n" name="question3" value="いいえ">いいえ</label><br>
    <button><router-link to="/">前へ戻る</router-link></button>
    <button><router-link to="/text">次へ進む</router-link></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question2: false,
      question3: false
    }
  },
  methods: {
    add: function(){
      this.question2 = !this.question2;
    },
    add2: function() {
      this.question3 = !this.question3;
    }
  }
}
</script>