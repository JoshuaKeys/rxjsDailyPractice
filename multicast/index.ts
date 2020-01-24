import { interval, ConnectableObservable, BehaviorSubject, Subject } from "rxjs";
import { map, tap, take, publish, multicast } from "rxjs/operators";

const currencyTicker = interval(1000).pipe(
    tap(a => console.log('PINGED API')),
    map(n => `Currency Info #${n} - [placeholder]`),
    multicast(()=> new Subject()),
    take(2)
) as ConnectableObservable<number>

currencyTicker.subscribe(a => console.log('LEFT WIDGET', a))
currencyTicker.subscribe(a => console.log('RIGHT WIDGET', a))

currencyTicker.connect();