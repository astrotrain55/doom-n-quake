<template>
  <div>
    <figure v-for="(game, index) in list" :key="index">
      <figcaption @click="open">
        <img :src="require(`@/assets/texts/${game.text}`)"
             :alt="game.name">
      </figcaption>
      <img :src="require(`@/assets/images/${game.cover}`)"
           :alt="game.name" @click="run(game)">
    </figure>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    computed: mapState('Games', ['site', 'list']),

    methods: {
      run(game) {
        alert(game.name);
      },

      open() {
        nw.Shell.openExternal(this.site);
      },
    },
  };
</script>

<style lang="stylus" scoped>
  div
    display flex
    align-items center
    justify-content center
    background-image url('~@/assets/images/bg.png')
    background-position center
    background-size cover
    width 100%
    height 100%

  figcaption
    text-align center
    color #ff0000
    font-weight bold
    font-size 20px
    font-family monospace

  figure
    cursor pointer
    margin 20px

    > img
      margin-top 10px
      transition transform .5s

    &:hover > img
      transform scale(1.2)
</style>
