import { interval } from "rxjs";
import { window, concatMap, toArray, windowCount } from "rxjs/operators";

interval(200).pipe(
    windowCount(10),
    concatMap(a => a.pipe(toArray()))
).subscribe(console.log);