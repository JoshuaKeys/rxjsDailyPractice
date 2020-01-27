import { fromStdIn } from "../../utility";
import { bufferCount } from "rxjs/operators";

// const clicks = fromStdIn();
// const buffered = clicks.pipe(bufferCount(5));
// buffered.subscribe(x => console.log(x));

fromStdIn().pipe(
    bufferCount(10)
).subscribe(console.log)