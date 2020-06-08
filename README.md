# ele-demo

## 步骤说明
- 安装node 版本 10.14.2

## 下载依赖包
```
npm install
```

### 开发环境
```
npm run serve
```

### 生产环境打包
```
npm run build
```

### 目录结构
- project
  - node_modules  包文件
  - dist  npm run build 后的文件，用做生产环境
  - public 静态资源
  - src 项目内容
    - api 接口目录
    - assets 其他静态资源
    - components 组件目录
    - constants 常量目录
    - plugins 插件目录
    - router 路由目录
    - store vuex相关目录
    - views 页面目录 
  - 其他配置文件

### nginx 发布
- npm run install
- npm run build
- 拷贝生成的 dist 目录到nginx目录下
- 修改nginx配置，参照nginx.conf
