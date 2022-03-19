<template>
  <div class="check">
    <h1>以下の内容をご確認ください</h1>
    <p>性別</p>
    <p>{{$store.state.gender}}</p>
    <p>生年月日</p>
    <p>{{$store.state.day}}</p>
    <p>現在、生命保険に加入されていますか？</p>
    <p>{{$store.state.anser1}}</p>
    <p>現在入院中ですか。または、最近3ヵ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
    <p>{{$store.state.anser2}}</p>
    <p>過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？</p>
    <p>{{$store.state.anser3}}</p>
    <p>ご相談内容</p>
    <p>{{$store.state.consultation}}</p>
    <button><router-link to="/text">前へ戻る</router-link></button>
    <button><router-link to="/check">送信</router-link></button>
  </div>
</template>
