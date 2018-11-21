var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')
var pageWidth = document.documentElement.clientWidth    //获取页面宽高
var pageHeight = document.documentElement.clientHeight  
    canvas.width = pageWidth          //获取页面宽高    
    canvas.height = pageHeight
window.onresize = function(){                           //获取窗口宽高
  var pageWidth = document.documentElement.clientWidth    
  var pageHeight = document.documentElement.clientHeight  
  canvas.width = pageWidth            
  canvas.height = pageHeight
}

// 以画圆和连线方式在画板划线
var using=false
var lastPoint={x:undefined,y:undefined}
canvas.onmousedown = function(aa){
     var x=aa.clientX
     var y=aa.clientY
  /*   drawCircle(x,y,1)   */  //画形式圈 
   if(eraserEnabled){
         using=true
         context.clearRect(x,y,10,10)   
   }else{
        using=true
        lastPoint={"x":x,"y":y}
   }
}
canvas.onmousemove = function(aa){
     var x=aa.clientX
     var y=aa.clientY
  if(eraserEnabled){
     if(using){    
         context.clearRect(x,y,10,10)
     }
  }else{
      if(using){
        var newPoint = {"x":x,"y":y}  
     /* drawCircle(x,y,1) */   //画形式圈 
     drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
     lastPoint = newPoint   
   }
  }     
}
canvas.onmouseup = function(aa){
     using=false
}
function drawCircle(x,y,radius){
    context.beginPath()
    context.fillStyle='orange'
    context.arc(x, y, radius, 0, Math.PI*2)
    context.fill()
 }
function drawLine(x1, y1, x2 ,y2){
    context.beginPath()
    context.strokeStyle = 'red'
    context.lineWidth =5
    context.moveTo(x1, y1)
    context.lineTo(x2, y2)
    context.stroke()
    context.closePath()
}

// 监听画笔和橡皮擦
var eraserEnabled = false
eraser.onclick = function(){            
      eraserEnabled = true
      actions.className= "actions x"
}
brush.onclick = function(){
      eraserEnabled = false
      actions.className= "actions"
}