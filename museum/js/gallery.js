function genGalery(){
    const PATHS=[
        'assets/img/galery/galery1.jpg',
        'assets/img/galery/galery2.jpg',
        'assets/img/galery/galery3.jpg',
        'assets/img/galery/galery4.jpg',
        'assets/img/galery/galery5.jpg',
        'assets/img/galery/galery6.jpg',
        'assets/img/galery/galery7.jpg',
        'assets/img/galery/galery8.jpg',
        'assets/img/galery/galery9.jpg',
        'assets/img/galery/galery10.jpg',
        'assets/img/galery/galery11.jpg',
        'assets/img/galery/galery12.jpg',
        'assets/img/galery/galery13.jpg',
        'assets/img/galery/galery14.jpg',
        'assets/img/galery/galery15.jpg',
    ]
    const galleryWrp = document.querySelector('.galery-wrp');
    
    const randSorter = (a,b) => 0.5 - Math.random();
    PATHS.sort(randSorter)
    PATHS.forEach((pic, i) => {
        let classes = '';
        if (i%Math.floor(PATHS.length/3) === 0) {
            const flexWrap = document.createElement('div');
            flexWrap.classList.add('flex-wrap-element');
            if (i !== 0) galleryWrp.append(flexWrap);
            classes+=' galery-first-wrapped'
        }
        const img = document.createElement('img');
        img.src = pic;
        img.alt = "galery random image";
        img.style.position = 'relative';
        img.className = classes;
        galleryWrp.append(img)
    })
    
}
genGalery()