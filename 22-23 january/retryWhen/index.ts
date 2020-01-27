import { retryWhen, tap, take } from "rxjs/operators";
import { timer, interval } from "rxjs";

const buggyAPI = timer(1000).pipe(
    tap(a=> console.log('You called the buggy API')),
    tap(a => {throw new Error()})
)

buggyAPI.pipe(
    retryWhen(errors => interval(1000).pipe(take(5)))
).subscribe(console.log);