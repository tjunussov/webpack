<template lang="pug">
doctype html

#app

  b-navbar(toggleable="md" fixed="top" type="dark" variant="dark")

    b-nav-toggle(target="nav_collapse")

    b-navbar-brand(to="/")
      img.mr-2(src="./assets/logo.png" height="28")
      | APP

    b-collapse(is-nav id="nav_collapse" v-if="authUser")

      b-nav(is-nav-bar)
        b-nav-item(to="/foo") Foo
        b-nav-item(to="/bar") Bar

        b-button.ml-3 Button

      b-nav.ml-auto(is-nav-bar)

        b-nav-form
          b-form-input.mr-sm-2(size="sm" placeholder="Search  ...")

        b-nav-item(right to="/help") Help

        b-nav-item-dropdown(right v-if="authUser" id="loginPopover")
          template(slot="button-content")
            span(:title="authUser.email") {{authUser.firstName}}
          b-dropdown-item(to="/profile") Profile
          b-dropdown-item(@click="logout()")
            span.i.fa.fa-exit.mr-1
            | Signout

        b-nav-item(right id="loginPopover" v-else) Login
          
        b-nav-item-dropdown(right v-if="authUser")
          template(slot="button-content")
            span.i.fa.fa-home.mr-1/
          b-dropdown-item Item
  

  b-container(fluid)
    router-view

</template>

<script>

export default {
  name: 'app',
  data(){
    return {
      authUser : {
        email:"email@email.com",
        firstName:"User"
      },
      ui:{
        search:null,
        showModalLogin:false
      }
    }
  },
  methods:{
    logout(){
    }
  }
}
</script>

<style lang="stylus">

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px

body
  padding-top 3.5rem

</style>
