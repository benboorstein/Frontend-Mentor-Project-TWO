// VERSION 2:

// Note: I told Robert I think of Version 1 backwards and he said in this case (because, mainly, all functions are stored in memory and the array isn't accessed until later) it's fine to write the code that way. So here, in Version 2, this is what I've done. And there are also other good changes in this version that you need to pay attention to.

document.getElementById('toggle').addEventListener('click', getPlan) // Remember that putting "getPlan" here as the event listener's second argument works because getPlan() is not receiving parameters in this case. If it were, then I'd have to make the event listener's second argument an anonymous function instead (as I did in Version 1, even though I didn't need to there).
// And remember that the second argument of addEventListener() is ALWAYS (by default, whether you write anything in or not) "event". So here it's fine, because "getPlan" is the event. But if you don't want the second argument to be an event then you need to pass in "e" or "event" as the second argument anyway and then pass in as the third argument what you wanted to pass in as the second argument.

function getPlan() {
    if (document.getElementById('toggle').checked) { // This also works: "document.getElementById('toggle').checked == true". And this: "document.getElementById('toggle').checked === true". Just FYI: Almost never (or maybe never) in an "if...else" statement's condition should you be using a single equals sign (given what a single equals sign actually does).
        monthlyPlan(plans)
    } else {
        annualPlan(plans)
    }
}

function monthlyPlan(list) { // Functions should ALWAYS have inputs and expect outputs, and functions should behave exactly the same way every time they're run. And remember that what are passed in as parameters are "the things on which the function will operate". So, in this respect, this version is way better than Version 1. 
    document.getElementById('price-basic').innerText = list[0].priceBasic
    document.getElementById('price-professional').innerText = list[0].priceProfessional
    document.getElementById('price-master').innerText = list[0].priceMaster
}

function annualPlan(list) {
    document.getElementById('price-basic').innerText = list[1].priceBasic
    document.getElementById('price-professional').innerText = list[1].priceProfessional
    document.getElementById('price-master').innerText = list[1].priceMaster
}

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


/*

// VERSION 1:

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

// QUESTION: Is it possible to add a counter (as we did in the FEM Testimonials project), and do with only one function (instead of two functions) here? Or is that impossible because here we're dealing with a toggle (technically a checkbox) and not two different arrows? And if it is possible here, is it even desirable, or just unnecessary?
// ANSWER: "Using a counter: yes, it's certainly possible. When writing a function, you should seek to write it in a way that the function expects an input, and returns an output. Right now, none of your functions expect an input, nor do they return an output. Instead, each one performs actions on some element and then exits the function. If you made your functions expect a counter, then at least you would have them use some input (e.g. the number that should be used to update the counter)."
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

document.getElementById('toggle').addEventListener('click', function() { // Note that "querySelector('.switch')" also works here but that it's not the preferable option because it's not as "readable" (targeted) as getElementById(). 'querySelector' and 'getElementById' will each return the first element it matches. So, by giving it '.switch' you risk it finding the wrong element with class 'switch'. Given that only one element ever has a given ID, giving it 'toggle' is more dependable. The more readable/targeted, the better!

    getPlan()
     
})

*/
