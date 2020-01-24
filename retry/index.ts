import { timer } from "rxjs";
import { tap, retry } from "rxjs/operators";

const buggyAPI = timer(1000).pipe(
    tap(a=> console.log('You called the buggy API')),
    tap(a=> {throw new Error()})
)
buggyAPI.pipe(
    retry(4)
).subscribe(console.log);