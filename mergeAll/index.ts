import { fromStdIn } from "../utility";
import { mapTo, mergeAll, take, map } from "rxjs/operators";
import { range, interval } from "rxjs";

// const clicks = fromStdIn();
// const higherOrder = clicks.pipe(mapTo(range(1, 2)));

// higherOrder.pipe(
//     mergeAll()
// ).subscribe(console.log)

const clicks = fromStdIn();
const higherOrder = clicks.pipe(map(y => interval(1000).pipe(take(4), map(x=> `Key ${y} merged with interval#${x}`))));

higherOrder.pipe(
    mergeAll(2)
).subscribe(console.log)