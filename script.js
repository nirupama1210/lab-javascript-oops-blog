/* Fill your code*/
class Blog{
    constructor(title,detail){
        console.log("Constructor called");
    this.title=title;
    this.detail=detail;
    console.log(this.title+" "+this.detail);
    }
    addTitle(cardTextDiv)
    {
        var title_card = document.createElement('h1');
        title_card.setAttribute("id","blog-title");
       // console.log(title_card);
        cardTextDiv.appendChild(title_card);
        console.log(this.title);
        title_card.innerHTML += this.title;
    }
    addDescription(cardTextDiv)
    {
        var desc= document.createElement('p');
        desc.setAttribute("id","blog-description");
        //console.log(desc);
        cardTextDiv.appendChild(desc);
        //console.log(detail);
        desc.innerHTML += this.detail;
    }

}

var add=document.getElementById('addBlog');
add.addEventListener('click',function(){
    document.getElementById('popupContact').style.display="block";
    document.getElementById('title').value="";
    document.getElementById('detail').value="";
})

var remove=document.getElementById('post');
remove.addEventListener('click',function(){
    document.getElementById('popupContact').style.display="none";
})

var post=document.getElementById('post');
post.addEventListener('click',function(){
    document.querySelector(".body-div2").style.display="flex";

    var image=document.createElement('img');
    image.src='assets/javascript.png';
    var articlecardDiv=document.createElement('div');
    articlecardDiv.setAttribute('class','article-card');
    //document.getElementById('flashcard').appendChild(image);
    var cardTextDiv=document.createElement('div');
    cardTextDiv.setAttribute('id',"card-text");
    cardTextDiv.setAttribute('class','card-text');

    var title_element=document.getElementById('title').value;
    var detail_element=document.getElementById('detail').value;
    //console.log("Title "+title+" Detail "+detail);
    var add_blog = new Blog(title_element,detail_element);
    
    articlecardDiv.appendChild(image);
    articlecardDiv.appendChild(cardTextDiv);
    document.querySelector(".body-div2").appendChild(articlecardDiv);

    add_blog.addTitle(cardTextDiv);
    add_blog.addDescription(cardTextDiv);

});

var close=document.getElementById('close');
close.addEventListener('click',function(){
    document.getElementById('popupContact').style.display="none";
    document.querySelector(".body-div2").style.display=flex;
})