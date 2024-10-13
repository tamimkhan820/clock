
let myClockElem = document.querySelector('.clock');
myClockElem.append(stripeArea());
myClockElem.append(numberArea());
myClockElem.append(handlerArea());


function stripeArea() {
    let creatParentDiv = document.createElement('div');
    creatParentDiv.classList.add('script-area');

    for( let i = 0; i <= 59; i++ ){

        let creatSpanTag = document.createElement('span');
        creatSpanTag.style.transform =  `rotate(${ i * 6}deg)`;

        if ( i % 5 ==0){
            creatSpanTag.classList.add('script','aruon')
        } else{
            creatSpanTag.classList.add('script')
        }


        creatParentDiv.append(creatSpanTag);
    }
    return creatParentDiv;
}

function numberArea() {
    let creatDiv = document.createElement('div');
    creatDiv.classList.add('number-area');

    for( let i = 1; i <= 12; i++ ){
        let creatDivParentTag = document.createElement('div');
        creatDivParentTag.classList.add('number');
        creatDivParentTag.style.transform =  `rotate(${ i * 30}deg)`;


        let creatSpan = document.createElement('span');
        creatSpan.textContent = i;
        creatSpan.style.transform =  `rotate(-${ i * 30}deg)`;

        creatDivParentTag.append(creatSpan);
        creatDiv.append(creatDivParentTag);

    }
    return creatDiv;
}

function handlerArea () {
    let handlerDiv = document.createElement('div');
    handlerDiv.classList.add('time-handler')
    let sechandlerDiv = document.createElement('div');
    sechandlerDiv.classList.add('sec')
    let minhandlerDiv = document.createElement('div');
    minhandlerDiv.classList.add('min')
    let hrhandlerDiv = document.createElement('div');
    hrhandlerDiv.classList.add('hr');

    handlerDiv.append(sechandlerDiv );
    handlerDiv.append(minhandlerDiv);
    handlerDiv.append(hrhandlerDiv);

    return handlerDiv;
}

function ourclockStrat (){

    let d = new Date();
    let sec = d.getSeconds() / 60;
    let min = d.getMinutes() / 60;
    let hr = d.getHours() / 12;


    let secElem = document.querySelector('.sec');
    let minElem = document.querySelector('.min');
    let hrElem = document.querySelector('.hr');




    secElem.style.transform =  `rotate(${ sec * 360}deg)`;
    minElem.style.transform =  `rotate(${ min * 360}deg)`;
    hrElem.style.transform =  `rotate(${ hr * 360}deg)`;

}
ourclockStrat ();
setInterval(ourclockStrat, 1000);