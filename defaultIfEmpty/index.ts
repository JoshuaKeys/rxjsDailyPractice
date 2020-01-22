import { empty } from "rxjs";
import { defaultIfEmpty } from "rxjs/operators";

empty().pipe(
    defaultIfEmpty(42)
).subscribe(console.log)