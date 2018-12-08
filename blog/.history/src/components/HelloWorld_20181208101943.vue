<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-header>{{blogInfo}}</el-header>
     <el-scrollbar style="100%">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
   
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message">友链接设置</i></template>
      
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>访问统计</template>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>博客列表</template>
        <el-menu-item-group>
          <template slot="title">栏目设置</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">博客设置</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template slot="title">个人设置</template>
          <el-menu-item index="3-4-1">关于我</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>

  </el-aside>
          </el-scrollbar>
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    
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
  blogInfo:'默然回首的博客'
    }
  
  }
}
</script>


<style>
  @import './../static/css/global.scss'; /*引入公共样式*/

</style>