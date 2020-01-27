import { fromEvent } from "rxjs";
import { tap, map, pluck } from "rxjs/operators";

fromEvent(document.forms[0], 'submit').pipe(
    tap(()=> console.log('Preventing Default'))
).subscribe(e => e.preventDefault());

fromEvent(document.getElementById('animal'), 'change').pipe(
    pluck('target', 'value')
)
.subscribe(e => console.log(e))

fromEvent(document.getElementById('moto'), 'change').pipe(
    pluck('target', 'value')
).subscribe(console.log)