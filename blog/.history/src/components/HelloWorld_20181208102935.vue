<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-header>{{blogInfo}}</el-header>
     <el-scrollbar style="100%">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['4', '3']">
         <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">访问统计</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">友链设置</span>
          </el-menu-item>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>博客列表</template>
            <el-menu-item-group>
        
              <el-menu-item index="3-1">栏目设置</el-menu-item>
              <el-menu-item index="3-3">博客设置</el-menu-item>
         
            </el-menu-item-group>
          
            
          </el-submenu>
            <el-submenu index="3-4">
              <template slot="title">个人设置</template>
              <el-menu-item index="3-4-1">关于我</el-menu-item>
            </el-submenu>
        </el-menu>
      </el-aside>
      </el-scrollbar>
  <el-container>
    <el-main>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import { Button, Select } from 'element-ui';
export default {
  name: 'HelloWorld',
  data() {
    return{
  blogInfo:'默然回首的博客后台'
    }
  
  }
}
</script>


<style>
  @import './../static/css/global.scss'; /*引入公共样式*/

</style>