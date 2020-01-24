import { fromEvent, combineLatest, zip } from "rxjs";

const countryObs$ = fromEvent(
    document.getElementById('country'), 
    'change', 
    (e)=> e.target.value
);

const cityObs$ = fromEvent(
    document.getElementById('city'),
    'change',
    (e)=> e.target.value
);

zip(countryObs$, cityObs$).subscribe(console.log)