## mvc 单引号转义到界面输出变成了&#39;解决办法
 1. @MvcHtmlString.Create(@ViewBag.JsonDateMenu)，这样之后，一切正常了！,一般扩展HtmlHelp的时候返回MVCHtmlString 都是使用的这个方法

 

 2.  @Html.Raw(@ViewBag.JsonDateMenu) 。userCondition: "@Html.Raw(@ViewBag.UserCondition)"
