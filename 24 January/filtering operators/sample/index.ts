import { interval, timer } from "rxjs";
import { sample, startWith } from "rxjs/operators";
import { fromStdIn } from "../../utility";

interval(100).pipe(
    sample(fromStdIn()),
    startWith('Started')
).subscribe(console.log);