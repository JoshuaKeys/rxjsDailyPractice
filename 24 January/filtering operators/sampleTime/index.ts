import { fromStdIn } from "../../utility";
import { sampleTime } from "rxjs/operators";

fromStdIn().pipe(
    sampleTime(2000)
).subscribe(console.log);