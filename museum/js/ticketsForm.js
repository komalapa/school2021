function formatOnDateFocusOut(e){
    e.target.type='text';
    if (e.target.value) e.target.value=e.target.value.split('-').reverse().join('.')
}
function formatDateOnFocusIn(e){
    if (e.target.value) e.target.value=new Date(e.target.value.split('.').reverse().join('-')).toISOString().substring(0,10)
    console.log(e.target.value)
    e.target.type='date';
}

function formatOnTimeFocusOut(e){
    e.target.type='text';
}
function formatTimeOnFocusIn(e){
    e.target.type='time';
}


const dateEl = document.querySelector('#tickets-date-pick');
dateEl.addEventListener('focusout', formatOnDateFocusOut);
dateEl.addEventListener('focus', formatDateOnFocusIn);


const timeEl = document.querySelector('#tickets-time-pick');
timeEl.addEventListener('focusout', formatOnTimeFocusOut);
timeEl.addEventListener('focus', formatTimeOnFocusIn);

//small options in select
// const selectOpts=document.querySelector('#tickets-select-type').querySelectorAll('option')
// selectOpts.forEach(opt=>{
// if(opt.textContent.length>20)
// opt.textContent=x.textContent.substring(0,20)+'...';
// })

function humanReadableDate(date){
    console.log(date)
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`
}
const testDate = new Date ('2022-08-19  16:30');
document.querySelector('#overview-date').innerHTML = humanReadableDate(testDate)
document.querySelector('#overview-time').innerHTML = testDate.getHours() + ':' + testDate.getMinutes()