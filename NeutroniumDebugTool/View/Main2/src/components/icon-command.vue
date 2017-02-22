<template>
  <tooltip :label="nome" placement="bottom-right">
    <a class="button is-primary is-large is-inverted is-outlined" @click="execute">
      <span class="icon is-medium">
        <i class="fa" :class="iconName" ></i>
      </span>
    </a>
   </tooltip>
</template>

<script>
import comandMixin from 'neutronium-vue-command-mixin'
import Tooltip from 'vue-bulma-tooltip'

export default {
  components:{
    Tooltip
  },
  mixins:[comandMixin],
  props:{
    nome: String,
    icon: String
  },
  computed:{
    iconName(){
      return "fa-" + this.icon
    }
  }
}
</script>

<style>
.logo {
  height: 50px;
}
</style>
