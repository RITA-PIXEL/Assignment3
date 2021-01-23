//Repo-link : 
// Problem No.1 [ Kilometer_to_Meter_Converter ]
function kilometerToMeter(kilometer) {
    if (typeof kilometer == 'string' || kilometer < 0) {
        return 'Distance cant be negative.Please input a positive number.';
    } 
    else {
        var meter = kilometer * 1000;
        return meter;
    }
}

//call funcation and show output.
var distance = kilometerToMeter(20);
console.log(distance);



// Problem No.2 [ Budget_Calculator ]
function budgetCalculator(watch, phone, laptop) {
    if (watch < 1 || phone < 1 || laptop < 1) {
        return 'Products cant be negative.Please input valid numbers.'
    } else {
        var totalPrice = watch*50 + phone*100 + laptop*500;
        return totalPrice;
    }
}
//call funcation
var cost = budgetCalculator(15, 15, 15);
console.log(cost);






// Problem No.3 [ Calculate the total hotel cost ]
function hotelCost(night) {
    if (night > 0 && typeof night == 'number') {
        var nightCost = 0;
        if (night <= 10) {
            nightCost = night * 100;
        } else if (night <= 20) {
            var first10Nights = 10 * 100;
            var remaining = night - 10;
            var second10Nights = remaining * 80;
            nightCost = first10Nights + second10Nights;
        } else {
            var first10Nights = 10 * 100;
            var second10Nights = 10 * 80;
            var remaining = night - 20;
            var after20Nights = remaining * 50;
            nightCost = first10Nights + second10Nights + after20Nights;
        }
        return nightCost;
    } else {
        return 'Please input a positive number';
    }
}
//call funcation.
var cost = hotelCost(25);
console.log(cost);





// Problem No.4 [ Get the large length name ]

function megaFriend(name) {
    if (name.length > 0 && Array.isArray(name)) {
        var largestName = name[0];
        var largestNameLength = largestName.length;

        for (var i = 1; i < name.length; i++) {
            var currentLength = name[i].length;
            if (currentLength > largestNameLength) {
                largestName = name[i];
                largestNameLength = currentLength;
            }
        }
        return largestName;
    } else {
        return 'Please input right name. '
    }
}
//call funcation
var largename = megaFriend(['Sinthiya Islam Rita', 'Pranto Islam', 'Shanta Islam', 'Joti khatun', 'Birote Roy']);
console.log(largename);
