// display ticket section
document.getElementById('buy-ticket-btn').addEventListener('click', function(){
    document.getElementById('buy-ticket-section').scrollIntoView()
});

// catch the seats
const allSeats = document.getElementsByClassName('add-seat');

const maxSeats = 4;
let buttonDisable = false;
let seatCount = 0;
for (const seat of allSeats) {
    seat.addEventListener('click', function handleClick(e) {
        seatCount++;
        seat.style.backgroundColor = '#1DD100'; 
        const seatName = e.target.innerText;
        const ticketFare = parseInt(document.getElementById('ticket-fare').innerText);
        
        // Update total-seat-left count
        const totalSeatLeft = document.getElementById('total-seat-left');
        totalSeatLeft.innerText = parseInt(totalSeatLeft.innerText) - 1;

        // 4seat eligible
        const countingSeat = seatCount;
        if(countingSeat === maxSeats){
            makeTheRemainSeatsdisable();
            alert('Your limit is over')
            document.getElementById('apply-btn').disabled = false;
            
        }

         // remove default
         const getDefaultSeat = document.getElementsByClassName('default-seat-info')
         for (let i = 0; i < getDefaultSeat.length; i++) {
         getDefaultSeat[i].classList.add('hidden');
            }

        // Created selected seat info
        const selectedSeatInfo = document.getElementById('selected-seat-info');
        const getSeatInfo = document.createElement('div');
        getSeatInfo.classList.add('flex', 'justify-between');
        getSeatInfo.style.marginTop = '16px';
        getSeatInfo.style.marginBottom = '16px';

        const pSeat = document.createElement('p');
        pSeat.innerText = seatName;

        const pClass = document.createElement('p');
        pClass.innerText = 'Economy';

        const pFare = document.createElement('p');
        pFare.innerText = ticketFare;

        getSeatInfo.appendChild(pSeat);
        getSeatInfo.appendChild(pClass);
        getSeatInfo.appendChild(pFare);
        selectedSeatInfo.appendChild(getSeatInfo);

        setInnerText('selected-seats', seatCount);


        // Update total price
        const totalPrice = parseInt(document.getElementById('total-price').innerText);
        const sumOfTheTicketFare = totalPrice + ticketFare;

        // Update grand price
        document.getElementById('grand-total').innerText = totalPrice + ticketFare;

        



         // apply btn
        const inputText = document.getElementById('input-text');
        const applyBtn = document.getElementById('apply-btn');

        inputText.addEventListener('input', function() {
        if (inputText.value === 'NEW15' || inputText.value === 'Couple 20') {
        applyBtn.addEventListener('click', function() {
            let getDiscount = 0;
            let discountPrice = 0;

            if (inputText.value === 'NEW15') {
                getDiscount = 0.15;
            } else if (inputText.value === 'Couple 20') {
                getDiscount = 0.20;
            }

            discountPrice = sumOfTheTicketFare * getDiscount;

            const selectedDiscountBar = document.getElementById('discount-bar');
            const getDiscountBar = document.createElement('div');

            getDiscountBar.classList.add('flex', 'justify-between');
            getDiscountBar.style.color = '#000';
            getDiscountBar.style.marginTop = '16px';

            const Dtitle = document.createElement('p');
            Dtitle.innerText = 'Total Discount';

            const DtotalPrice = document.createElement('p');
            DtotalPrice.innerText = discountPrice;

            // Clear existing discount bar content
            selectedDiscountBar.innerHTML = '';

            getDiscountBar.appendChild(Dtitle);
            getDiscountBar.appendChild(DtotalPrice);
            selectedDiscountBar.appendChild(getDiscountBar);

            // Update grand total
            document.getElementById('grand-total').innerText = 
            sumOfTheTicketFare - discountPrice;

            applyBtn.disabled = true;

            
        });
            
        
    }
});

     
        

        // next button able
        const nextBtn = document.getElementById('next-btn');
        const userNumber = document.getElementById('phone-number')

    
        userNumber.addEventListener('input', function(){
            if(userNumber.value !== 'string'){
                nextBtn.disabled = false;
            }else{
                nextBtn.disabled = true;
            }
        })

        nextBtn.addEventListener('click', function(){

        })
        
        

        // Remove event listener after click
        seat.removeEventListener('click', handleClick);

        // Update info
        setInnerText('selected-seats', seatCount);
        setInnerText('total-price', sumOfTheTicketFare)
        setInnerText('grand-total', grandCost); 
    });
}


function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

function makeTheRemainSeatsdisable() {
    for (const seat of allSeats) 
            seat.disabled = true;
}




document.getElementById('next-btn').addEventListener('click', function(){
    const catchTheDefaultScreen = document.getElementsByClassName('default-screen');
    for(const screen of catchTheDefaultScreen){
        screen.classList.add('hidden')
    }
    document.getElementById('special-screen').classList.remove('hidden')
})

document.getElementById('continue-btn').addEventListener('click', function(){
    const specialScreen = document.getElementById('special-screen');
    specialScreen.classList.add('hidden');

    const catchTheDefaultScreen = document.getElementsByClassName('default-screen');
    for(const screen of catchTheDefaultScreen){
        screen.classList.remove('hidden')}

        window.location.href = 'index.html';

    

})


