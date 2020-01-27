import { fromStdIn } from "../../utility";
import { startWith, skip, take, skipWhile } from "rxjs/operators";

fromStdIn()
    .pipe(
        skipWhile(v=> v !== 'g'),
        startWith("INPUT IS OFFICIALLY ACCEPTED"),
    )
    .subscribe(console.log);