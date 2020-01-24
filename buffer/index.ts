import { fromStdIn } from "../utility";
import { interval } from "rxjs";
import { buffer, take, filter } from "rxjs/operators";

// const clicks = fromStdIn();
// const intervalEvents = interval(1000).pipe(take(10));
// const buffered = intervalEvents.pipe(buffer(clicks));
// buffered.subscribe(console.log, null, ()=> console.log('Completed'));

fromStdIn().pipe(
    buffer(
        fromStdIn().pipe(
            filter(key=> key === 'p')
        )
    )
).subscribe(console.log)