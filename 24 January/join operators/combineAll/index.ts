import { fromEvent, interval } from "rxjs";
import { fromStdIn } from "../../../utility";
import { map, take, combineAll, startWith, tap } from "rxjs/operators";

const clicks = fromStdIn();
const higherOrder = clicks.pipe(
    tap(n=> console.log(`key #${n}`)),
    map(key => interval(2000).pipe(take(3))),
    take(3)
);

higherOrder.pipe(
    combineAll(),
    startWith('Started')
).subscribe(console.log);