const plus1=document.querySelector('#plus1');
function qq(){
    
        // plus1.classList.toggle('fa-plus');
        // plus.classList.add('fa-minus')
        if(plus1.classList.contains('fa-plus')){
            plus1.classList.remove('fa-plus');
            plus1.classList.add('fa-minus');
            document.querySelector('.answer1').style.display='block';
            
        }
        else{
            plus1.classList.add('fa-plus');
            plus1.classList.remove('fa-minus');
            document.querySelector('.answer1').style.display='none';
    
        }
    
}
// plus1.addEventListener('click',qq);/overwritting causing the reverse and the answeis not getting
document.querySelector('.q1').addEventListener('click',qq);



let q2=document.querySelector('#plus2');
// q2.addEventListener('click',);
function qq_(){
    
        if(q2.classList.contains('fa-plus')){
            q2.classList.remove('fa-plus');
            q2.classList.add('fa-minus');
            document.querySelector('.answer2').style.display='inline';
           
        }
        else{
            q2.classList.add('fa-plus');
            q2.classList.remove('fa-minus');
            document.querySelector('.answer2').style.display='none'
        }
    }
    document.querySelector('.q2').addEventListener('click',qq_);
    let onlyq=document.querySelector('#plus');
// q.addEventListener('click',);
function qw(){
    
        if(onlyq.classList.contains('fa-plus')){
            onlyq.classList.remove('fa-plus');
            onlyq.classList.add('fa-minus');
            document.querySelector('.answer').style.display='inline';
           }
        else{
            onlyq.classList.add('fa-plus');
            onlyq.classList.remove('fa-minus');
            document.querySelector('.answer').style.display='none';
        }
    
}
document.querySelector('.q').addEventListener('click',qw);
