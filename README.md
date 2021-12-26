## 🌈 rgb-picker 识取图片的主颜色

### 1. 安装

`npm install rgb-picker -S`

### 2. 使用

```javascript
import rgbPicker from 'rgb-picker'
...
rgbPicker('./img/img_1.png').then(res => {
   ...
})

// res 返回格式 
res => {
  allData:[
    {color:'255,255,255,255',count:2},
    {color:'0,0,0,255',count1}
  ],
  mainColor:'255,255,255,255',
  revertMainColor: "0,0,0,255"
} 
```

### 3. 配置

#### `rgb-picker`可以选取特定范围进行颜色提取

`x`: 要选取的范围的启始`x`点（默认为`0`）

`y`: 要选取的范围的启始`y`点（默认为`0`）

`width`: 要选取的范围的宽度（默认为图片的宽度）

`height`: 要选取的范围的高度（默认为图片的高度）

`wPercent`: 要选取的范围的宽度比例（默认为`1`, `wPercent` * `width` = 实际宽度）

`hPercent`: 要选取的范围的高度比例（默认为`1`, `hPercent` * `height` = 实际高度）



```javascript
rgbPicker('./img/img_1.png',{x:0, y:0, width:100, height:100,
                                     wPercent:1, hPercent:1}).then(res => {
   ...
})
```

### 4. 待办

完成错误提示