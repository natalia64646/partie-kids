const articleDo = '.w-do-992';
const articlePislia = '.w-pislia-992';


function doPislia(){
    if (document.querySelector('.w-do-992') === true ){
        document.write = document.querySelector('.w-do-992') ;
        document.hidden =document.querySelector('.w-pislia-992');
    } else{
        document.write = document.querySelector('.w-pislia-992') ;
        document.hidden = document.querySelector('.w-do-992');
    }
}
    doPislia();

