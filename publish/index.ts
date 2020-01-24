import { interval, ConnectableObservable } from "rxjs";
import { map, tap, take, publish } from "rxjs/operators";

const currencyTicker = interval(1000).pipe(
    tap(a => console.log('PINGED API')),
    map(n => `Currency Info #${n} - [placeholder]`),
    publish(),
    take(2)
) as ConnectableObservable<number>

currencyTicker.subscribe(a => console.log('LEFT WIDGET', a))
currencyTicker.subscribe(a => console.log('RIGHT WIDGET', a))

setTimeout(function() {
    currencyTicker.connect();
}, 2000)
