let posts=[
    {title:'one'},
    {title:'two'}
];
let output='';
function get_post(){
    setTimeout(() => {
        for(let i=0;i<posts.length;i++){
            output+=`
            <ul>
            <li>${posts[i].title}</li>
            </ul>
            `
        }
        document.body.innerHTML=output;
    }, 1000);
};

// get_post();
// function create_post(post){
//     setTimeout(() => {
//         posts.push(post)
//     }, 2000);
// }
// create_post({title:'another'});

// using callback
// function create_post(post, callback){
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     }, 2000);
// }
// create_post({title:'another'},get_post);

//using promises
// function create_post(post){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             posts.push(post);
//             let error=false;
//             if(!error){
//                 resolve();
//             }
//             else{
//                 reject();
//             }
//         }, 2000);
//     })
// };
// create_post({
//     title:'another'
// }).then(get_post);

//  function create_post(post){
//     setTimeout(() => {
//         posts.push(post);

//     }, 2000);
// };
function create_post(post){
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        
 
        posts.push(post);
        let error=false;
        if(!error){
            resolve();
        }
        else{
            reject();
        }
    }, 2000);
    })
}
async function calling(){
await create_post({title:'another'});
get_post();
};
calling();