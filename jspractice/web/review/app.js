let image=document.querySelector('.image');
let name_=document.querySelector('.name');
let post=document.querySelector('.post');
let content=document.querySelector('.para');
let item=0;
let left=document.querySelector('.fa-arrow-left');
let right=document.querySelector('.fa-arrow-right');
let random_button=document.querySelector('.surprise');
let review=[
    {
        name:'Susan Smith',
        post:'WEB DEVELOPER',
        content:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie  cold-pressed four dollar toast everyday carry",
        image:'https://randomuser.me/api/portraits/women/60.jpg'
    },

    {
        name:'Anna Johnson',
        post:"WEB DESIGNER",
        content:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
        image:'https://randomuser.me/api/portraits/men/62.jpg'
    },

    {
        name:"Peter Jones",
        post:"INTERN",
        content:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
        image:'https://randomuser.me/api/portraits/men/64.jpg'
    },

    {
        name:'Bill Anderson',
        post:"THE BOSS",
        content:"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
        image:'https://randomuser.me/api/portraits/men/22.jpg'
    }
];
function on_load(){
    // image.src=review[3].image;
    image.setAttribute('src',review[item].image);
    name_.innerText=review[item].name;
    post.innerText=review[item].post;
    content.innerText=review[item].content;
}
window.addEventListener("DOMContentLoaded",on_load());

right.addEventListener('click',function(){
    item++;
    if(item>review.length-1){
        item=0;
     
        image.setAttribute('src',review[item].image);
        name_.innerText=review[item].name;
        post.innerHTML=review[item].post;
        content.innerHTML=review[item].content;
        
    }
        
        image.setAttribute('src',review[item].image);
        name_.innerText=review[item].name;
        post.innerHTML=review[item].post;
        content.innerHTML=review[item].content;
 
   
    
});
left.addEventListener('click',function(){
    item--;
    if(item<0){
        item=review.length-1; image.setAttribute('src',review[item].image);
        name_.innerText=review[item].name;
        post.innerHTML=review[item].post;
        content.innerHTML=review[item].content;
    }
    image.setAttribute('src',review[item].image);
    name_.innerText=review[item].name;
    post.innerHTML=review[item].post;
    content.innerHTML=review[item].content;
});
random_button.addEventListener('click',function(){
    let random=Math.floor(Math.random()*review.length);
    item=random;
    image.setAttribute('src',review[item].image);
    name_.innerText=review[item].name;
    post.innerHTML=review[item].post;
    content.innerHTML=review[item].content;
})