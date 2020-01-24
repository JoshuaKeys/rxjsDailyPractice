import { interval } from "rxjs";
import { window, concatMap, toArray } from "rxjs/operators";

interval(200).pipe(
    window(interval(2000)),
    concatMap(a => a.pipe(toArray()))
).subscribe(console.log);