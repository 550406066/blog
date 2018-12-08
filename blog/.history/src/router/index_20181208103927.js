import Vue from 'vue'
import Router from 'vue-router'
import BlogBox from '@/components/BlogBox'
import Blog from '@/components/components/Blog'
import Module from '@/components/components/Module'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: BlogBox,
      children: [ {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'Blog',
        component: Blog
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 会被渲染在 User 的 <router-view> 中
        path: 'Module',
        component: Module
      }]
    }
  ]
})
