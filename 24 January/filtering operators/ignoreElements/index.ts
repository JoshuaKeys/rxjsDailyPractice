import { of } from "rxjs";
import { ignoreElements } from "rxjs/operators";

of('you', 'talking', 'to', 'me').pipe(
    ignoreElements()
).subscribe(console.log, console.error, ()=> console.log('the end'))