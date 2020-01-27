import { timer, combineLatest } from "rxjs";
import { map, take, startWith } from "rxjs/operators";

const firstTimer = timer(0, 5000).pipe(
    map(n => `FirstTimer #${n}`)
);
const secondTimer = timer(1000, 5000).pipe(
    map(n => `SecondTimer #${n}`)
);
const combinedTimers = combineLatest([firstTimer, secondTimer]);
combinedTimers.pipe(
    startWith('Started'),
    take(10)
).subscribe(console.log);