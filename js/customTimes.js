/**
	 * Handler for controls buttons in number input
	 */
    if (document.querySelectorAll('.customTimes__text')) {

        let valueTimes = document.querySelectorAll('.customTimes__text');
        let buttonMinus = document.querySelectorAll('.customTimes__minus');
        let buttonPlus = document.querySelectorAll('.customTimes__plus');
        
        
        
        buttonMinus.forEach((item, index) => {
            item.addEventListener('click', () => {
                if (index == 0) {
                    if (valueTimes[0].value - 1 < 1) {
                        return;
                    }
                    valueTimes[0].value = +valueTimes[0].value - 1;
                } else {
                    if (valueTimes[0].value - 1 < 1 && valueTimes[1].value - 15 < 0) {
                        return;
                    }
                    valueTimes[1].value = +valueTimes[1].value - 15;
                    if (valueTimes[1].value < 0) {
                        if (valueTimes[0].value - 1 < 0) {
                            return;
                        }
                        valueTimes[0].value = +valueTimes[0].value - 1;
                        valueTimes[1].value = 45;
                    }
                }
            })
        });
        
        buttonPlus.forEach((item, index) => {
            item.addEventListener('click', (event) => {
                if (index == 0) {
                    if (valueTimes[0].value >= 24) {
                        valueTimes[1].value = 0;
                        return;
                    }
                    valueTimes[0].value = +valueTimes[0].value + 1;
                    if (valueTimes[0].value >= 24) {
                        valueTimes[1].value = 0;
                    }
                } else {
                    if (valueTimes[0].value >= 24 && valueTimes[1].value == 0) {
                        return;
                    }
                    valueTimes[1].value = +valueTimes[1].value + 15;
                    if (valueTimes[1].value >= 60) {
                        valueTimes[0].value = +valueTimes[0].value + 1;
                        valueTimes[1].value = 0;
                    }
                }
            })
        });
    }