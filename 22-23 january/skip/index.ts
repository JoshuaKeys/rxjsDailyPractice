import { fromStdIn } from "../../utility";
import { startWith, skip, take } from "rxjs/operators";

fromStdIn()
    .pipe(
        skip(10),
        take(5),
        startWith("INPUT IS OFFICIALLY ACCEPTED"),
    )
    .subscribe(console.log);