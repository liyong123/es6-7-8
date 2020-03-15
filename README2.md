1、window下检测单文件es6是否被转成低版本的js：
node_modules\.bin\babel src\test.js --out-file dist\test.js。

2、window下检测某个目录下的es6代码文件是否转成低版本的js：
node_modules\.bin\babel src --out-dir dist。

3、如果想实时转换单独文件，那么就在package.json中的scripts中添加一下配置,package.json会自动去node_modules中寻找babel,(-w是-watch缩写，-o是--out-file缩写)：
  1）文件： "start": "babel src/test.js -w -o dist/test.js" 。

3、如果想实时转换文件夹下的所有es6文件，那么就在package.json中的scripts中添加一下配置,package.json会自动去node_modules中寻找babel,(-w是-watch缩写，-d是--out-dir缩写)：
  1）文件夹： "start": "babel src -w -d dist" 


