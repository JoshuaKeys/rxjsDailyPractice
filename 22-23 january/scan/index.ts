import { interval } from "rxjs";
import { take, scan } from "rxjs/operators";

interval(500).pipe(
    take(10),
    scan((acc, val)=> acc + val, 0)
)