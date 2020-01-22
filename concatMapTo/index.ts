import { interval, range } from "rxjs";
import { map, concatMapTo, take, skip } from "rxjs/operators";

interval(1000).pipe(
    take(5),
    skip(4),
    concatMapTo(range(0, 10)),
).subscribe(console.log)