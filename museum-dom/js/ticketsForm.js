class Order{
    constructor(types, costs) {
        this.costs = costs;
        this.types = types;
        this.curTypeIndex = 0;
        this.basicAmount = 1;
        this.seniorAmount = 1;
        this.basicSum = 0;
        this.seniorSum = 0;
        this.sum = 0;
        this.setSums()
    }
    setType(type){
        if (!type) return;
        const newIndex = this.types.indexOf(type);
        if (newIndex <0) return;
        this.curTypeIndex = newIndex;
        this.setSums();
    }
    setBasicAmount(n){
        if (!n || +n < 0 || +n > 20) return
        this.basicAmount = n;
        this.setSums();
        return this.basicAmount;
    }
    setSeniorAmount(n){
        if (!n || +n < 0 || +n > 20) return
        this.seniorAmount = n;
        this.setSums();
        return this.seniorAmount;
    }
    setSums(){
        this.basicSum = this.basicAmount * this.getBasicCost();
        this.seniorSum = this.seniorAmount * this.getSeniorCost();
        this.sum = this.basicSum + this.seniorSum;
    }
    getBasicCost(){
        return this.costs[this.types[this.curTypeIndex]].basic;
    }
    getSeniorCost(){
        return this.costs[this.types[this.curTypeIndex]].senior;
    }
    getType(){
        return this.types[this.curTypeIndex]
    }
}

const order = new Order (['Permanent exhibition', 'Temporary exhibition', 'Combined Admission'], {'Permanent exhibition': {'basic': 20, 'senior': 10}, 'Temporary exhibition': {'basic': 25, 'senior': 12.5}, 'Combined Admission':{'basic': 40, 'senior': 20}})

console.log("ORDER", order)

//start form to class events
    const basicAmount1 = document.querySelector('#tickets-18-amount');
    basicAmount1.value = order.basicAmount;
    basicAmount1.addEventListener('change', (e) => {
        order.setBasicAmount(+e.target.value);
        updateForm()
    })

    const basicAmount2 = document.querySelector('#tickets-18-amount-modal');
    basicAmount2.value = order.basicAmount;
    basicAmount2.addEventListener('change', (e) => {
        order.setBasicAmount(+e.target.value);
        updateForm()
    })
    
    const seniorAmount1 = document.querySelector('#tickets-65-amount');
    seniorAmount1.value = order.seniorAmount;
    seniorAmount1.addEventListener('change', (e) => {
        order.setSeniorAmount(+e.target.value)
        updateForm();
    })

    const seniorAmount2 = document.querySelector('#tickets-65-amount-modal');
    seniorAmount2.value = order.seniorAmount;
    seniorAmount2.addEventListener('change', (e) => {
        order.setSeniorAmount(+e.target.value)
        updateForm();
    })

    const typeRadios = document.querySelectorAll('.tickets-types-radio')
    typeRadios.forEach(rad =>rad.addEventListener('click', (e)=>{
        order.setType(e.target.dataset.type)
        updateForm();
    }))



    function updateForm(){
        const formSum1 = document.querySelector('#prev-cost');
        formSum1.innerText = order.sum;
        basicAmount1.value = order.basicAmount;
        basicAmount2.value = order.basicAmount;
        seniorAmount1.value = order.seniorAmount;
        seniorAmount2.value = order.seniorAmount;
        document.querySelector('#total-amount-basic').innerText = order.basicAmount;
        document.querySelector('#total-amount-senior').innerText = order.seniorAmount;

        document.querySelector('#total-basic-cost').innerText = order.getBasicCost();
        document.querySelector('#total-senior-cost').innerText = order.getSeniorCost();

        document.querySelector('#total-sum-basic').innerText = order.basicSum;
        document.querySelector('#total-sum-senior').innerText = order.seniorSum;
        document.querySelector('#total-sum').innerText = order.sum;

        document.querySelector("#overview-type").innerText = order.getType();
    }
    updateForm();
//end form to class events


function initTicketsForm(){
    let formIsOpen = true;
    const modalForm = document.querySelector('.tickets-modal')
    function formSwitcher(e){
        formIsOpen = !formIsOpen;
        modalForm.style.left = formIsOpen ? 0 : '-100%'
    }
    formSwitcher();
    //eventlisteners for buttons
    document.querySelector('.tickets-modal-close').addEventListener('click', formSwitcher)
    document.querySelector('.tickets-submit').addEventListener('click', formSwitcher)
    //close by overlay
    const overlay = document.querySelector('.tickets-modal')
    overlay.addEventListener('click', (e)=>{
        if (e.target == overlay) formSwitcher();
    })
    
    function formatOnDateFocusOut(e){
        e.target.type='text';
        if (e.target.value) e.target.value=e.target.value.split('-').reverse().join('.')
    }
    function formatDateOnFocusIn(e){
        if (e.target.value) e.target.value=new Date(e.target.value.split('.').reverse().join('-')).toISOString().substring(0,10)
        // console.log(e.target.value)
        e.target.type='date';
        const today = new Date();
        // dateEl.min = `${today.getFullYear()}-${('0'+today.getMonth()).slice(-2)}-${('0'+today.getDate()).slice(-2)}`
        // dateEl.max = `${today.getFullYear()+1}-${('0'+today.getMonth()).slice(-2)}-${('0'+today.getDate()).slice(-2)}`

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
    dateEl.addEventListener('change', (e)=>{
        if (e.target.value) document.querySelector('#overview-date').innerText = humanReadableDate(new Date(e.target.value))
    })
    const today = new Date();
    dateEl.min = `${today.getFullYear()}-${('0'+(today.getMonth()+1)).slice(-2)}-${('0'+today.getDate()).slice(-2)}`
    dateEl.max = `${today.getFullYear()+1}-${('0'+(today.getMonth()+1)).slice(-2)}-${('0'+today.getDate()).slice(-2)}`


    const timeEl = document.querySelector('#tickets-time-pick');
    timeEl.addEventListener('focusout', formatOnTimeFocusOut);
    timeEl.addEventListener('focus', formatTimeOnFocusIn);
    timeEl.addEventListener('input', (e)=>{
        console.log(e.target.value)
        if (e.target.value) document.querySelector('#overview-time').innerText = e.target.value;
    })

    function humanReadableDate(date){
        console.log(date)
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
        return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`
    }

    const testDate = new Date ('2022-08-19  16:30');
    document.querySelector('#overview-date').innerHTML = humanReadableDate(testDate)
    document.querySelector('#overview-time').innerHTML = testDate.getHours() + ':' + testDate.getMinutes()

    function cardNumberValidator(e){
        if (e.key != 'Backspace') e.preventDefault();
        let val = e.target.value.split(' ').join('')
        if (['1','2','3','4','5','6','7','8','9','0'].indexOf(e.key)>=0 && val.length < 16 ){
            val += e.key;
        }
        e.target.value = `${val.slice(0,4)} ${val.slice(4,8)} ${val.slice(8,12)} ${val.slice(12)}`.trim()
        
    }
    document.querySelector("#card-number").addEventListener('keydown', cardNumberValidator);

    function cardMonthValidator(e){
        if (e.key != 'Backspace') e.preventDefault();
        let val = e.target.value
        if (['1','2','3','4','5','6','7','8','9','0'].indexOf(e.key)>=0){
            val += e.key;
        }
        val = +val
        if (val < 0) {
            e.target.value = '00'
            return
        }
        if (val < 10) {
            e.target.value = '0'+val
            return
        }
        if (val < 13) {
            e.target.value = val
            return
        }
        e.target.value = '12'

        
    }

    document.querySelector('#card-exp-m').addEventListener('keydown',cardMonthValidator)
    document.querySelector('#card-exp-m').addEventListener('input',cardMonthValidator)
    document.querySelector('#card-exp-m').addEventListener('change',cardMonthValidator)

    function cardYearValidator(e){
        if (e.key != 'Backspace') e.preventDefault();
        let val = e.target.value
        if (['1','2','3','4','5','6','7','8','9','0'].indexOf(e.key)>=0){
            val += e.key;
        }
        val = +val
        if (val < 2021) {
            e.target.value = '2021'
            return
        }
        if (val > 2999) {
            e.target.value = '2999'
            return
        }
        
        e.target.value = val
    }
    document.querySelector('#card-exp-y').addEventListener('keydown',cardYearValidator)

    //select in booking form
    const selectCheckbox = document.querySelector('#select-is-open');
    let ticketType = '';
    const options = document.querySelectorAll('.select-option')
    options.forEach(opt =>{
        opt.addEventListener('click', (e)=>{
            selectCheckbox.checked = false;
            ticketType = e.target.dataset.type;
            console.log(ticketType)//there will be main action on click
            order.setType(ticketType);
            updateForm();
        })
    })
    const openIcon = document.querySelector('#select-icon-open');
    selectCheckbox.addEventListener('input',()=>{
        openIcon.style.transform = selectCheckbox.checked ? 'rotate(180deg)': ''
    })

    function cardCVVValidator(e){
        if (e.key != 'Backspace') e.preventDefault();
        console.log(e.target.key)
        let val = e.target.value
        if (['1','2','3','4','5','6','7','8','9','0'].indexOf(e.key)>=0){
            val += e.key;
        }
        if (+val < 10000) {//cvv 4 digits not 3!
            e.target.value = val
            return
        }
        
    }
    document.querySelector('#card-cvv').addEventListener('keydown',cardCVVValidator)
}

initTicketsForm()

function stepper(that,direction){ //for using as onclick for step buttons in card form
    const event = new Event('change');
    // console.log(that.nextElementSibling)
    if (direction === 'down'){
        that.nextElementSibling.stepDown()
        that.nextElementSibling.dispatchEvent(event)
    } else {
        that.previousElementSibling.stepUp()
        that.previousElementSibling.dispatchEvent(event)
    }
}

//validator
const submitBtn = document.querySelector('.book-submit')
console.log(submitBtn)
const nameField = document.querySelector('#tickets-name-pick')
nameField.addEventListener('input', (e)=>{
    console.log(e.target)
    const re = new RegExp ('^([A-Z]|[a-z]|[а-я]|[А-Я]|\ ){3,15}$')
    console.log(re.test(e.target.value))
    if (re.test(e.target.value)){
        nameField.parentNode.classList.remove('wrong-input', 'wrong-input-text')
        submitBtn.disabled = false;
    } else {
        nameField.parentNode.classList.add('wrong-input', 'wrong-input-text')
        submitBtn.disabled = true;
    }
})

const emailField = document.querySelector('#tickets-email-pick')
emailField.addEventListener('input', (e)=>{
    console.log(e.target)
    const re = new RegExp ('^[A-Za-z0-9_-]{3,15}@[A-Za-z0-9-]{4,}.[A-Za-z]{2,4}$')
    console.log(re.test(e.target.value))
    if (re.test(e.target.value)){
        emailField.parentNode.classList.remove('wrong-input', 'wrong-input-email')
        submitBtn.disabled = false;
    } else {
        emailField.parentNode.classList.add('wrong-input', 'wrong-input-email')
        submitBtn.disabled = true;
    }
})

const phoneField = document.querySelector('#tickets-tel-pick')
phoneField.addEventListener('input', (e)=>{
    console.log(e.target)
    const re = new RegExp ('^([0-9]( ?|-?)){0,10}$')
    console.log(re.test(e.target.value))
    if (re.test(e.target.value)){
        phoneField.parentNode.classList.remove('wrong-input', 'wrong-input-phone')
        submitBtn.disabled = false;
    } else {
        phoneField.parentNode.classList.add('wrong-input', 'wrong-input-phone')
        submitBtn.disabled = true;
    }
})