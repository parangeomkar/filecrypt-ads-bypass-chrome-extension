$("button[onclick]").each((i,e)=>{
    url = "https://filecrypt.co/Link/"+($(e).attr("onclick").split("'")[1])+".html"
    $(e).replaceWith("<a href="+url+"> Download </a>")
})