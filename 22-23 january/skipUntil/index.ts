import { fromStdIn } from "../../utility";
import { startWith, take, skipUntil } from "rxjs/operators";
import { timer } from "rxjs";

fromStdIn()
    .pipe(
        skipUntil(timer(5000)),
        startWith("INPUT IS OFFICIALLY ACCEPTED in 5 SECONDS"),
    )
    .subscribe(console.log);