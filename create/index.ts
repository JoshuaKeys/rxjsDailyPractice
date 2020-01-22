import { Observable, onErrorResumeNext, Subscriber } from "rxjs";

const observeble = Observable.create((subscriber: Subscriber<number>)=>{
    subscriber.next(1)
    subscriber.next(1)
    subscriber.next(1)
    subscriber.next(2)
    subscriber.next(2)
    subscriber.error(new Error('Error: => Just for fun'))
    subscriber.next(3)
    subscriber.next(3)
    subscriber.complete()
})

observeble.subscribe({
    next: function(a){console.log(a)},
    complete: ()=>{
        console.log('Completed')
    },
    error: (err)=>{
        console.log(err.message);
    }
})