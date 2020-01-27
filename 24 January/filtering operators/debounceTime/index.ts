import { debounceTime, startWith } from "rxjs/operators";
import { fromStdIn } from "../../utility";

fromStdIn().pipe(
    debounceTime(2000),
    startWith('Started')
).subscribe(console.log);