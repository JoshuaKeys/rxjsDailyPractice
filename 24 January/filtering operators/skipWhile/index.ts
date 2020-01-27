import { interval } from "rxjs";
import { skipWhile, tap } from "rxjs/operators";

interval(1000).pipe(
    tap(n=> console.log(`n = ${n}`)),
    skipWhile(n => n <= 10),
    tap(n => console.log('was called here'))
).subscribe(console.log);