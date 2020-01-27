import { interval, merge } from "rxjs";
import { map, take } from "rxjs/operators";
import { fromStdIn } from "../../utility";

// const bluePostFeed = interval(1000).pipe(
//     map(n=> `Blue Post Article #${n}`)
// );

// const redHeraldFeed = interval(1000).pipe(
//     map(n=> `Red Herald Article #${n}`)
// );


// merge(bluePostFeed, redHeraldFeed)
// .subscribe(console.log)

const clicks = fromStdIn().pipe(take(10));
const timer = interval(1000);

const clicksOrTimer = merge(clicks, timer, 1);
clicksOrTimer.subscribe(console.log)