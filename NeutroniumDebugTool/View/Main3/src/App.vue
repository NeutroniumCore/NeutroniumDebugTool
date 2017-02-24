<template>
  <div class="ui grey inverted vertical footer segment main">
    <div class="ui grid inverted">
      <div class="center aligned thirteen wide column">
        <button-combo :commands="commands">
        </button-combo>
      </div>

      <div class="left floated right aligned three wide column">
        <div class="description">
          <div class="ui circular label white">
            <img class="logo" src="./assets/logo.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import buttonCombo from './components/button-combo'

  const props = {
    viewModel: Object,
  };

  export default {
    components: {
      buttonCombo
    },
    name: 'app',
    props,
    data() {
      return this.viewModel
    },
    computed:{
      commands(){
        var res =[{
          command: this.DebugBrowser,
          icon: 'bars',
          name: 'Inspect',
          active: false
        }];
        if (this.VmDebug){
          res.push({
            command: this.DebugWindow,
            icon: 'bug',
            name: 'Vm debugger',
            active: this.IsDebuggingVm
          });
        };
        res.push({
          command: this.ShowInfo,
          icon: 'info circle',
          name: 'About',
          active: false
        });
        return res;
      }
    }
  }

</script>

<style>
  @import '~dist/semantic.css';
  .description {
    margin-right: 10px;
  }
</style>