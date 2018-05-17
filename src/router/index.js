import Vue from 'vue'   
import Router from 'vue-router'  
import Hello from '@/components/Hello'  
import Hi from '@/components/Hi' 
import Hi1 from '@/components/Hi1' 
import Hi2 from '@/components/Hi2' 
import params from '@/components/params' 
import count from '@/components/count' 
 
Vue.use(Router) 
 
export default new Router({
  routes: [             
   {
      path: '/',
      components: {
        default:Hello,
        left:Hi1,
        right:Hi2,
        foot:Hi2
      }
    },
    {
      path: '/Hi',
      components: {
        default:Hello,
        left:Hi2,
        right:Hi1,
        foot:Hi1
      }
    },
   {
    path:'/params/:newsId(\\d+)/:newsTitle',
    component:params,
    beforeEnter:(to,from,next)=>{
      console.log('我进入了params模板');
        console.log(to);
        console.log(from);
        next(true);
    }
   },
   {
     path:'/gopage/:newsId(\\d+)/:newsTitle',
     redirect:'/params/:newsId(\\d+)/:newsTitle'
   },
   {
    path:'/hi1',
    component:Hi1,
    alias:'/jspang'
   }, 
   {
    path:'/count',
    component:count,
   },
  ]
})
