let imgs = [{
    src: '2.jpg',
    id: '1',
    chosen: false
}, {
    src: '3.jpg',
    id: '2',
    chosen: false
}, {
    src: '4.jpg',
    id: '3',
    chosen: false

}, {
    src: '842656.jpg',
    id: '4',
    chosen: false

}, {
    src: '881445.jpg',
    id: '5',
    chosen: false

}, {
    src: '5.jpg',
    id: '6',
    chosen: false

}, {
    src: '5.jpg',
    id: '6',
    chosen: false

}, {
    src: '2.jpg',
    id: '1',
    chosen: false

}, {
    src: '842656.jpg',
    id: '4',
    chosen: false

}, {
    src: '3.jpg',
    id: '2',
    chosen: false

}, {
    src: '4.jpg',
    id: '3',
    chosen: false

}, {
    src: '881445.jpg',
    id: '5',
    chosen: false

},];
let scoreView = document.getElementById('score')
let compared, first, counter = 0, score = 0;
window.addEventListener('DOMContentLoaded', () => {
    shuffleArray(imgs);
    for (i = 0; i < 12; i++) {
        let gameBlock = document.createElement('div');
        gameBlock.classList.add('game-block');
        gameBlock.classList.add('is-flipped')

        let front = document.createElement('div');
        front.classList.add('face', 'front');
        let back = document.createElement('div')
        back.classList.add('face', 'back');
        let img = document.createElement('img');
        img.setAttribute('src', imgs[i].src);
        back.appendChild(img);
        gameBlock.appendChild(front);
        gameBlock.appendChild(back);
        gameBlock.setAttribute('index', i)
        document.querySelector('.game').appendChild(gameBlock)
    }
    setTimeout(function () {
        document.querySelector('.game').innerHTML = '';
        for (i = 0; i < 12; i++) {
            // let ele = document.createElement('img');
            // if (!imgs[i].chosen) {
            //     ele.setAttribute('src', 'images.jfif')
            // }
            // else {
            //     ele.setAttribute('src', imgs[i].src)
            // }
            // ele.setAttribute('index', i)
            // ele.addEventListener('click', function () {
            //     let num = parseInt(this.getAttribute('index'));
            //     if (!imgs[num].chosen) {
            //         ele.setAttribute('src', imgs[num].src);
            //         setTimeout(function () {
            //             if (counter == 1) {
            //                 compared = parseInt(first.getAttribute('index'));
            //                 console.log(first);

            //                 if (imgs[compared].id == imgs[num].id) {
            //                     imgs[num].chosen = true;
            //                     imgs[compared].chosen = true;
            //                     score += 1;
            //                     scoreView.innerText = score;
            //                 } else {
            //                     ele.setAttribute('src', 'images.jfif');
            //                     first.setAttribute('src', 'images.jfif')
            //                 }
            //                 counter = 0;
            //             } else {
            //                 first = ele;
            //                 ele.setAttribute('src', imgs[num].src)
            //                 counter = 1;
            //             }
            //         }, 1000)


            //     }
            // })

            let gameBlock = document.createElement('div');
            gameBlock.classList.add('game-block');
            if (imgs[i].chosen) {
                gameBlock.classList.add('is-flipped')
            }
            let front = document.createElement('div');
            front.classList.add('face', 'front');
            let back = document.createElement('div')
            back.classList.add('face', 'back');
            let img = document.createElement('img');
            img.setAttribute('src', imgs[i].src);
            back.appendChild(img);
            gameBlock.appendChild(front);
            gameBlock.appendChild(back);
            gameBlock.setAttribute('index', i)
            gameBlock.addEventListener('click', function () {
                let num = parseInt(this.getAttribute('index'));
                if (!imgs[num].chosen) {
                    gameBlock.classList.add('is-flipped');
                    setTimeout(function () {
                        if (counter == 1) {
                            compared = parseInt(first.getAttribute('index'));
                            // console.log(first);

                            if (imgs[compared].id == imgs[num].id) {
                                imgs[num].chosen = true;
                                imgs[compared].chosen = true;
                                score += 1;
                                scoreView.innerText = score;
                            } else {
                                gameBlock.classList.remove('is-flipped');
                                first.classList.remove('is-flipped');
                            }
                            counter = 0;
                        } else {
                            first = gameBlock;
                            gameBlock.classList.add('is-flipped')
                            counter = 1;
                        }
                    }, 1000)


                }
            })
            document.querySelector('.game').appendChild(gameBlock)
        }
    }, 4000)
})


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}