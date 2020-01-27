import { interval } from "rxjs";
import { skip, tap, take } from "rxjs/operators";

interval(500).pipe(
    take(10),
    tap((n)=>console.log(`Call #${n+1}`)),
    skip(5)
).subscribe(console.log);