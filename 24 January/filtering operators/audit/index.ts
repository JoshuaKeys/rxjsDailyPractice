import { fromStdIn } from "../../utility";
import { audit, startWith } from "rxjs/operators";
import { interval, timer } from "rxjs";

fromStdIn().pipe(
    audit(key => timer(5000)),
    startWith('Started')
).subscribe(console.log);