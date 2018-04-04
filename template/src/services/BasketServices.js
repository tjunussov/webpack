import { mapGetters, mapActions } from 'vuex'
import { uuid, InfiniteList } from 'vue-idb'

export default {
  name: 'basketServices',
  data () {
    return {
      no:null,
      list:[],
      listPayments:[]
    }
  },
  provide() {
    var that = this;
    return { 
      db:{
        firstTwoProducts(){
          this.$db.items.where('type_').equalsIgnoreCase("product").limit(2).toArray().then(r=>{
          //this.$db.items.limit(2).toArray().then(r=>{
            this.list = r;
          });
        },
        listPayments(){
          this.$db.items.where('type_').equalsIgnoreCase("money").sortBy("meta_.order").then(r=>{
            this.listPayments = r;
          });
        },
        tender(){
          console.log('Tender');
          this.salesAdd({
            uuid: uuid(),
            code_:this.no,
            created_:new Date(),
            accounted_:new Date(),
            name:"Чек "+this.no,
            from:{
              contact:{
                name:"ТОО ИВАНОВ И.И",
                code_:"816546543464"
              },
              items:this.list
            },
            to:{
              contact:this.contact,
              items:this.listPayments
            },
            total:this.total
          })
        }
      } 
    }
  }
}