import { of, timer } from "rxjs";
import { debounce } from "rxjs/operators";

of('WAIT', 'ONE', 'SECOND', 'Last will display').pipe(
    debounce(()=> timer(1000))
).subscribe(console.log)