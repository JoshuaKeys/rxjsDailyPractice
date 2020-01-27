import { fromStdIn } from "../../utility";
import { auditTime } from "rxjs/operators";

fromStdIn().pipe(
    auditTime(5000)
).subscribe(console.log);