# xyr
# MarkDown--从入门到精通
##### 导语
> MarkDown是一门轻量级的标记语言，它的优点很多，使用者非常广泛。学习成本也不需要太多，且熟悉这种语法规则，会有一劳永逸的效果。

## 一，认识MarkDown
在刚才的导读里提到，MarkDown 是一种用来写作的轻量级的标记语言，雅它用简洁的语法代替排版，而不像一般我们用的字体处理软件，（word）那样

## MarkDown 官方文档
> 这里可以看到官方的markdown语法文档，然后，后文也会用自己的方式阐述这些语法的**具体用途**。

* [name 阐述一下]
*  打卡机多久啊是减肥
*  阿登纳是否难舍难分

1. age
2. sex
3. home
4. phone

## 插入链接
[百度](http:www.baidu.com)

## 插入图片
![mmmm](http://cdn.sspai.com/attachment/thumbnail/2014/04/15/54b0855cf47d559c8c59e8f503af17d410f70_mw_800_wm_1_wmp_3.jpg)

## 表格
| Tables        | Are           | Cool  | NAME|
| ------------- |:-------------:| -----:| :-----:|
| col 3 is      | right-aligned | $1600 | LI |
| col 2 is      | centered      |   $12 |WANG|
| zebra stripes | are neat      |    $1 |ZHANG|

## 自制表格
| 姓名 | 年龄 | 性别 | 成绩 |
| ---- | -----:| :--- | :----: |
| 章三 | 18 | 男 | 100|
| 里斯 | 20 | 女 | 23 |

## 代码片段
<pre>
export const go_subscribe = (id, from) => {
    return async dispatch => {
        try {
            dispatch(show_loading({title: "正在加载"}))
            await dispatch(navTo(PagesConfig.SubscribeDetail, {id}))
            dispatch(hide_loading())
        }
        catch (e) {
            dispatch(hide_loading())
        }
    }
}
</pre>
