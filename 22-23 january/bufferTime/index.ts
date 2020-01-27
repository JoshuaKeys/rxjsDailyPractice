import { fromStdIn } from "../../utility";
import { bufferTime } from "rxjs/operators";

// const clicks = fromStdIn();
// const buffered = clicks.pipe(bufferTime(10000));
// buffered.subscribe(console.log);

fromStdIn().pipe(
    bufferTime(1000)
).subscribe(console.log)