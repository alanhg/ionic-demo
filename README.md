#ionic2-demo

纯粹手痒，写一下常用到的一些功能点，愿能帮到一些人。
水平有限，欢迎提Issue，PR

##涉及技术点

+ 视图导航系统
+ D3引入
+ Echarts引入
+ Iframe包含第三方网站
+ 登录系统
+ 前后端交互


##Project Init

```

ionic serve //浏览器调试
ionic build android //安卓打包
ionic build ios //ios打包
ionic run android //真机调试-开发版
ionic run andorid --prod //真机调试-产品包

```


##学习推荐

+ http://ionicframework.com/docs/v2/
+ https://angular.io/docs/ts/latest/

##FAQ

+ 锁定屏幕方向

```
# config.xml
<preference name="orientation" value="portrait" />
```

+ app显示名称

```
# config.xml
<name>appName</name>
```

+ echarts引入

```
# index页面引入js资源文件
# page组件 declare let echarts; 

```
+ d3引入

```


```
