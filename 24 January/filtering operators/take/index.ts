import { interval } from "rxjs";
import { take } from "rxjs/operators";

interval(100).pipe(
    take(10)
).subscribe(console.log);