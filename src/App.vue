<template>
  <div id="app">
	<router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
  	// 默认授权
  	autoAuthority(){
      window.location.href=this.api.scope_url2
  	},

  	// 手动授权
  	authorityByUser(){
      window.location.href=this.api.scope_url
  		
  	}	
  },
  mounted(){
  	// this.authorityByUser()
  }
}
</script>

<style>

</style>
