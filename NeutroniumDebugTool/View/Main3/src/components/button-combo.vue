<template>
  <div class="button-combo">  
    <div class="ui right pointing label hover-tool" :class="hoovering? 'hoover' : 'no-hoover'">
      {{hoover}}
    </div> 
    
    <div class="ui icon buttons grey inverted" @mouseleave="hoovering= false">
      <icon-command v-for="command in commands" :command="command.command" :active="command.active" :icon="command.icon" :name="command.name" @mouseenter.native="onHover(command)">
      </icon-command>
    </div>
  </div>
</template>

<script>
import iconCommand from './icon-command'

export default {
  components: {
    iconCommand
  },
  props:{
    commands: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      hoover: null,
      hoovering: false
    }
  },
  methods:{
    onHover(command){
      this.hoovering= true;
      this.hoover=command.name
    }
  }
}
</script>

<style>
.button-combo .hover-tool {
  width:100px;
  -webkit-transition: opacity 0.3s;
  transition:opacity 0.3s;
}

.hoover {
  opacity: 1.0;
}

.no-hoover {
  opacity: 0.0;
}
</style>
