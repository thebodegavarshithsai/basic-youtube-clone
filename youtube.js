function play(obj){
    
    let link = obj.children[0].src;
    let newLink = `${link.slice(0,-1)}1`;
    obj.children[0].src=newLink;
    console.log(obj.children[0].src)
    if(obj.children[1].className == "video-time"){
        obj.children[1].style.display="none";
    }
}
function pause(obj){
    let link = obj.children[0].src;
    let newLink = `${link.slice(0,-1)}0`;
    obj.children[0].src=newLink;
    if(obj.children[1].className == "video-time"){
        obj.children[1].style.display="inline-block";
    }
}