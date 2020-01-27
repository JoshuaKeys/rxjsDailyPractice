import { interval, range } from "rxjs";
import { map, concatMap, take } from "rxjs/operators";

interval(1000).pipe(
    take(5),
    concatMap(n => range(0, n+1)),
).subscribe(console.log)