document.querySelector(".abc img").onclick = () => {
    const div = document.querySelector(".abcb");
    div.style.display = div.style.display==="block"?"none":"block";
}
$(document).click(function(e) {
    if(!$(".abc").is(e.target) && !$(".abc").find("*").is(e.target)) {
        $(".abcb").css("display", "none");
    }
});

$(".abMa").click(function(){
    $(".abMb").css("display", "block");
})
$(".abba img").click(function(){
    $(".abMb").css("display", "none");
})

var i=1;
$(".acab img").click(function(){
    i = $(this).data("rgv");
    $(".baa img").attr("src", "images/image-product-"+i+".jpg");
    $(".bab img[data-rgv|="+i+"]").css("filter", "grayscale(60%)")
    $(".b").css("display", "flex");
})
$(".baMa svg").click(function(){
    $(".b").css("display", "none");
})
$(".baa div").click(function(){
    $(".bab img").css("filter", "none");
    if($(this).data("rgv") === "p" && i>1){
        i--;
    } else if($(this).data("rgv") === "n" && i<4){
        i++;
    }
    $(".baa img").attr("src", "images/image-product-"+i+".jpg");
    $(".bab img[data-rgv|="+i+"]").css("filter", "grayscale(60%)");
})

var j=0;
$(".acbfa div").click(function(){
    if($(this).data("rgv") === "d" && j>0){
        j--;
    } else if($(this).data("rgv") === "i"){
        j++;
    }
    $(".acbfa p").text(j);
})
$(".acbfb").click(function(){
    $(".abcc p").text(j);
    $(".abcc").css("display", "block");
    $(".abcbabba").text(j);
    $(".abcbabbb").text("$"+j*125+".00");
    if(j===0){
        $(".abcbb").css("display", "none");
        $(".abcbc").css("display", "block");
        $(".abcc").css("display", "none");
    } else{
        $(".abcbb").css("display", "block");
        $(".abcbc").css("display", "none");
        $(".c").css("display", "block");
        const t = setTimeout(() => {
            $(".c").fadeOut(500);
        }, 2000);
    }
})
$(".abcbbac").click(function(){
    j=0;
    console.log("hey");
    $(".abcbb").css("display", "none");
    $(".abcbc").css("display", "block");
    $(".abcc").css("display", "none");
    $(".abcc p").text(j);
})
