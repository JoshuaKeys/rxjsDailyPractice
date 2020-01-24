import { fromStdIn } from "../utility";
import { throttleTime, startWith } from "rxjs/operators";

fromStdIn().pipe(
    throttleTime(10000),
    startWith('Started'),

).subscribe(console.log);