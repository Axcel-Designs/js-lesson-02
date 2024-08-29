// Task 7: Use the "switch" statement  20 marks

let day = 0;
switch (day){
    case 0:
        day = 'Sunday';
        text = day + 'first day of the week';
        break;
    case 1:
        day = 'Monday';
        text = day + 'work resumes';
        break;
    case 2:
        day = 'Tuesday';
        text = day + 'second working day';
        break;
    case 3:
        day = 'Wednesday';
        text = day + 'mid-week';
        break;
    case 4:
        day = 'Thursday';
        text = day + 'thors day';
        break;
    case 5:
        day = 'Friday';
        text = day + 'begining of weekend';
        break;
    case 6:
        day = 'Saturday';
        text = day + 'last day of the week';
        break;
    default:
        console.log('choose 0 to 6');
        break;
}
console.log(text);