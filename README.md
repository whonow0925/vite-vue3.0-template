# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## 修改Vite 配置文件

+ 在vite.config.ts 设置@指向src目录、服务启动端口、打包路径、代理等

## 规范目录结构
```
├── publish/
└── src/
    ├── assets/                    // 静态资源目录
    ├── common/                    // 通用类库目录
    ├── components/                // 公共组件目录
    ├── router/                    // 路由配置目录
        ├── index.ts                // 路由配置文件
    ├── store/                     // 状态管理目录
        |-- index.ts                //store配置文件
    ├── style/                     // 通用 CSS 目录
    ├── utils/                     // 工具函数目录
    ├── views/                     // 页面组件目录
        ├── home.vue
        ├── vuex.vue
        ├── axios.vue
    ├── App.vue
    ├── main.ts
    ├── env.d.ts
├── tests/                         // 单元测试目录
├── index.html
├── tsconfig.json                  // TypeScript 配置文件
├── vite.config.ts                 // Vite 配置文件
└── package.json
```

## 集成路由工具Vue Router

+ 在 src 下创建 router 目录，然后在 router 目录里新建 index.ts 文件,根据实际情况配置路由，在views目录下创建相关页面。
+ 在main.ts文件中挂载路由配置。

## 集成状态管理工具 Vuex

## 集成UI框架Element Plus

## 集成 CSS 预编译器 Sass

## 集成 Prettier 配置

### 踩坑合集

+ 运行代码时can not. found moudle ‘worker_threads‘，vite构建工具需要node版本大于等于12.0.0，建议将Node。js升级到最新的稳定版本。
` nvm install stable `

