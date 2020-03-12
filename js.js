### 遍历对象的key
```javascript
 for (var i in data.field) {
     gradeArr.push({
         item: i, //i为data.field[i]的key
         score: data.field[i]
     })
 }

```
