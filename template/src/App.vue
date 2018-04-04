<template lang="pug">
doctype html

#app
  header.header.clearfix
    b-container
      b-navbar(toggleable="md")

        b-nav-toggle(target="nav_collapse")

        b-navbar-brand(to="/home")
          i.fa.fa-building.text-muted

        b-collapse(is-nav id="nav_collapse")

              b-dropdown-divider
              b-dropdown-item(to="/link3") 
                .fa.fa-gear.mr-1/  Settings

          b-navbar-nav.ml-auto


            b-nav-item(to="/link1" v-b-tooltip.hover.auto title="Касса")
              .fa.fa-calculator.mr-1

            b-nav-item(to="/link2" v-b-tooltip.hover.auto title="История платежей")
              .fa.fa-list.mr-1

            b-nav-item-dropdown(right)
              template(slot="button-content")
                .fa.fa-user.mr-2.text-success
                span Username
              b-dropdown-item(to="/profile") Профиль
              b-dropdown-divider
              b-dropdown-header Войти как
              b-dropdown-divider
              b-dropdown-item(to="/logout") Выйти

  main(role='main')
    b-container
      //- keep-alive
      router-view
  
  b-container.pt-1
    footer.footer.mt-2
      b-row 
        b-col
          small.text-muted &copy; 2017 Company Name.

</template>

<script>

export default {
  name: 'app',
  data(){
    return {
      isLoginError:null,
      ui:{
        search:null,
        showModalLogin:false
      }
    }
  },
  methods:{
    test(){
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

</style>
