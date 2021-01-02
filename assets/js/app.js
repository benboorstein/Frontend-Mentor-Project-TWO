const plans = [
    { // Monthly
        priceBasic: '19.99',
        priceProfessional: '24.99',
        priceMaster: '39.99'
    },
    { // Annually
        priceBasic: '199.99',
        priceProfessional: '249.99',
        priceMaster: '399.99'
    }
]

// QQQ: Is it possible to add a counter (as we did in the FEM Testimonials project), and do with only one function (instead of two functions) here? Or is that impossible because here we're dealing with a toggle (technically a checkbox) and not two different arrows? And if it is possible here, is it even desirable, or just unnecessary?
function monthlyPlan() {
    document.getElementById('price-basic').innerText = plans[0].priceBasic
    document.getElementById('price-professional').innerText = plans[0].priceProfessional
    document.getElementById('price-master').innerText = plans[0].priceMaster
}

function annualPlan() {
    document.getElementById('price-basic').innerText = plans[1].priceBasic
    document.getElementById('price-professional').innerText = plans[1].priceProfessional
    document.getElementById('price-master').innerText = plans[1].priceMaster
}

function getPlan() {
    if (document.getElementById('toggle').checked) {
        monthlyPlan()
    } else {
        annualPlan()
    }
}

document.querySelector('.switch').addEventListener('click', function() { // QQQ: Also works by selecting with "getElementById('toggle')". Which one is better / more proper / makes more sense, and why?

    getPlan()
     
})
