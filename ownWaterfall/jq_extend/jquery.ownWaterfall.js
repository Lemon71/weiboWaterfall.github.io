$.fn.extend({
    ownWaterfall:function () {
        // this 是谁
        var  $_this = this;
        //开始写了
        var itemsWidth = $_this.width();
        var boxWidth =$_this.children('.item').width();
        var col = Math.floor(itemsWidth/boxWidth);
        var margin = (itemsWidth-col*boxWidth)/(col-1);

        var heightArr =[];
        for(var i=0;i<col;i++){
            heightArr[i]=0;
        }
        var minIndex = 0;
        var minHeight= 0;
        $_this.children('.item').each(function (index,ele) {
            var currentHeight = $(ele).height();
            for(var i=0;i<heightArr.length;i++){
                if(heightArr[i]<minHeight){
                    minIndex=i;
                    minHeight=heightArr[i];
                }
            }
            $(ele).css({
                top:minHeight,
                left:minIndex*boxWidth+minIndex*margin
            });
            heightArr[minIndex]+=currentHeight;
            minHeight+=currentHeight;



        });
        var maxHeight = heightArr[0];

        for (var i = 0; i < heightArr.length; i++) {
            if(heightArr[i]>maxHeight){
                maxHeight = heightArr[i];
            }
        }
        $_this.height(maxHeight);

        // 为了可以链式编程
        return $_this;
    }
});