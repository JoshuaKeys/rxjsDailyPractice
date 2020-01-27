import { of } from "rxjs";
import { takeLast } from "rxjs/operators";

of('ignore', 'ignore', 'ignore', 'hello', 'world').pipe(
    takeLast(2),
).subscribe(console.log);