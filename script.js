// chat extension

var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/67eed7a2c84c5a191483de40/1inufklia';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
})();


// click event 

window.onload = function() {
    main();
}

function main() {
    const btns = document.querySelectorAll('.nav-link');
    for (let i=0; i<btns.length; i++) {
        if (i !== 0 && i !== 1) { 
            btns[i].onclick = function () {
                alert('অপেক্ষা করুন, দারুন কিছু আসতেছে !');
            };
        }
    }
}
