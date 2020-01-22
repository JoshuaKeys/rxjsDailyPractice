import { Observable, Subscriber, interval } from "rxjs";
import { take, distinctUntilChanged } from "rxjs/operators";

const observeble: Observable<string> = Observable.create((subscriber: Subscriber<string>)=>{
    const arrayOfNames = ["Joshua", "Joshua", "Joshua", "Oguma", "Oguma", "Oguma"];

    interval(1000).pipe(take(6)).subscribe(
        n => subscriber.next(arrayOfNames[n])
    )
})

observeble.pipe(
    distinctUntilChanged()
).subscribe(console.log);