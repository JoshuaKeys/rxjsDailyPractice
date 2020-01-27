import { interval, timer } from "rxjs";
import { skipUntil, take, tap } from "rxjs/operators";

interval(1000).pipe(
    take(10),
    tap(n=> console.log('called')),
    skipUntil(timer(5000))
).subscribe(console.log);