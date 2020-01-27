import { interval } from "rxjs";
import { window, concatMap, toArray, windowTime } from "rxjs/operators";

interval(200).pipe(
    windowTime(5000),
    concatMap(a => a.pipe(toArray()))
).subscribe(console.log);