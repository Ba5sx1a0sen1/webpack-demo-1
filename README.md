### 使用
```
   npm install

   npx webpack
```

> 这是一个基于Webpack4.0的demo，使用的`extract-text-webpack-plugin`有点不同，需要基于
```
    npm i --save-dev extract-text-webpack-plugin@next
```
> 使用`html-webpack-plugin`读取`src`文件夹下的`index.html`为模板文件
> 使用`clean-webpack-plugin`来删除重复的`css`文件