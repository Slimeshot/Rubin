if (document.querySelector('.solution__customSelec-plus')) {
    let buttonSelectPlus = document.querySelector('.solution__customSelec-plus');
    let buttonSelectMinus = document.querySelector('.solution__customSelec-minus');
    let solutionCustomSelectHour = document.querySelector('.solution__customSelect-hours');
    let solutionCustomSelectMin = document.querySelector('.solution__customSelectTime-minutes');
   
   
    let buttonSelectCountPlus = document.querySelector('.solution__customSelecCount-plus');
    let buttonSelectCountMinus = document.querySelector('.solution__customSelecCount-minus');
    let solutionCustomSelectCount = document.querySelector('.solution__customSelectCount-hour');
   
   
   
    buttonSelectPlus.addEventListener('click', () => {
       if (solutionCustomSelectHour.innerHTML >= 24 && solutionCustomSelectMin.innerHTML == 0) {
           return;
       }
       solutionCustomSelectMin.innerHTML = +solutionCustomSelectMin.innerHTML + 15;
       if (solutionCustomSelectMin.innerHTML >= 60) {
           solutionCustomSelectHour.innerHTML = +solutionCustomSelectHour.innerHTML + 1;
           solutionCustomSelectMin.innerHTML = 0;
       }
    })
   
   
    buttonSelectMinus.addEventListener('click', () => {
       if (solutionCustomSelectHour.innerHTML - 1 < 1 && solutionCustomSelectMin.innerHTML - 15 < 0) {
           return;
       }
       solutionCustomSelectMin.innerHTML = +solutionCustomSelectMin.innerHTML - 15;
       if (solutionCustomSelectMin.innerHTML < 0) {
           if (solutionCustomSelectHour.innerHTML - 1 < 0) {
               return;
           }
           solutionCustomSelectHour.innerHTML = +solutionCustomSelectHour.innerHTML - 1;
           solutionCustomSelectMin.innerHTML = 45;
       }
    })
   
   
   
   
   
   
    buttonSelectCountPlus.addEventListener('click', () => {
       if (solutionCustomSelectCount.innerHTML >= 32) {
           return;
       }
       solutionCustomSelectCount.innerHTML = +solutionCustomSelectCount.innerHTML + 1;
    })
   
   
    buttonSelectCountMinus.addEventListener('click', () => {
       if (solutionCustomSelectCount.innerHTML - 1 < 1) {
           return;
       }
       solutionCustomSelectCount.innerHTML = +solutionCustomSelectCount.innerHTML - 1;
   
    })
}