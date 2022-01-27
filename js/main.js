$(document).ready(function () {
    console.log('hello its me');


    // fetchAll 很多個
    const navLinkList = document.querySelectorAll('.navbar .nav-link');
    const navbar = document.getElementById('navbar')
    const scrollReport = document.getElementById('scrollReport')

    // JQuery 宣告抓不到值
    // const scrollReport = $('#scrollReport');
    

    console.log(navLinkList,'navLinkList')
    console.log(navbar,'navbar')
    console.log(scrollReport,'scrollReport')


    const navigationTable = {};

    //很多個 所以用foreach
    navLinkList.forEach(value => {
        //value 每一種<a>
        //console.log('value',value);
        const sectionId = value.dataset.target;

    navigationTable[sectionId] = {
        link: value,
        section: document.getElementById(sectionId)
        }
    });

    console.log('navigationTable',navigationTable);

    window.addEventListener('scroll',function(){
        console.log('window',window);
        const y = Math.round(window.scrollY + navbar.offsetHeight);
        // console.log('navbar',navbar)
        scrollReport.innerText = `目前所在的位置${y}`;
        console.log(`目前所在的位置${y}`);
    

    //上面是用原生JS寫的，因為有此物件用JQuery會抓不到，變成undefine

    for (const key in navigationTable){
        console.log('navigationTable[key]',navigationTable[key]);
        const link = navigationTable[key].link;
        const section = navigationTable[key].section;
        console.log('link',link);
        console.log('section',section);

        //section top
        const top = section.offsetTop;
        //sectoin bottom
        const bottom = top + section.offsetHeight;

        if(y > top && y < bottom){
            link.classList.add('text-warning');
            section.classList.add('is-active');
        }else{
            link.classList.remove('text-warning');
            section.classList.remove('is-active');
        }
    }


});
});