import { fromStdIn } from "../../utility";
import { first, take } from "rxjs/operators";

fromStdIn().pipe(
    take(5),
    first(key => key === 'p')
).subscribe(console.log);