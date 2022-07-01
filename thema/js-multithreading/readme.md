# Parallelism in the JavaScript ecosystem

  
## Expose
Moore's Law states the number of transistors doubles about every two years, though the cost of computers is halved. While this has been true for a long time, semiconductor advancement has slowed industry-wide since around 2010.  
Looking at the development of CPU architectures over the last decades in general shows that the pace of improvement of parameters that increase the compute power of single cores is in decline.
On the other hand the number of cores in a CPU has increased significantly since the introduction of the first multi-core CPU and is steadily rising [[1]](#references).  
It follows that the importance for programming languages to be able to make use of these additional cores and software that does so also increases.  
  
JavaScript is best-known as the scripting language for Web pages, although it is also supported by many non-browser environments like Node.js or Deno.
It is lightweight, interpreted or just-in-time compiled, prototype-based and features first-class functions.  
Because of the event-based nature of JS, concurrency is inate to the language. 
It's achieved through the use of Callbacks and more recently with promises and async/await.
This form of concurrency can solve a lot of problems that would otherwise end in down time like waiting for I/O or network requests.  
While this enables running different tasks concurrent instead of strictly sequentualy, the execution is still limited to one thread.  
   
Other use cases such as ones that require a lot of CPU power, or ones that require a lot of memory, don't benefit from this approach.  
Some of these were solved individually by the runtime environments like browsers by introducing special APIs, but for a lot of the needs of software needs this does not suffice.
These use cases are best handled by parallelism and the use of multiple threads.  
  
In the past, the platforms that JavaScript ran on did not provide any thread support, so the language was thought of as single-threaded.
While the ECMAScript specification has no concept of threads, it specifies realms, execution context and its memory management.  
The implementation of threads and the corresponding APIs is left to the runtime environments.  
  
In the browser this concept has been in use for a long time e. g. for seperating execution contexts of different tabs.
With the introduction of web, shared and service workers in the browser and worker threads in nodejs and deno, there are also APIs for developers to achieve real multithreading in all major environments. These differ in their indivdual options and have different use cases.  
While they have been around for a long time now, the usage of these possibilities is still quite low and not well understood by a lot of developers.  
This is also visible in the comparatively low number of available documentation and examples compared to other features of the language.  
  
Communication between Threads or JavaScript contexts is done via message channels and the postMessage API. While this API allows sending JSON Objects and some builtin data types, it also has strict limitations when it comes to other objects. It is not possible to send Function Objects or preserve prototype information.[[2]](#references)
This greatly impacts the way multithreaded programs can be designed, especially for libraries (e. g. using polymorphy (OOP) and compositon (FP) across thread bounds becomes non trivial).
  
The goal of this thesis is to understand the reasoning behind the restrictions regarding the communication between contexts in general and explain how the underlying mechanism work.  
   
To answer this question, we will first give an overview of multithreading and the important concepts that go along with it. After that, the memory model underlying JavaScript and the way in which engines convert code into executable instructions will be looked at in more detail and the already existing and planned possibilities for interaction between threads will be presented.  
  
Subsequently, Function Objects (and the corresponding subtypes) will be considered in particular. In addition prototypically experiment(?) which dependencies and restrictions arise here with the transmission over thread bounds. (e. g. serialize/deserialze necessary?).
  
## References
1. Jeff Parkhurst, John Darringer, and Bill Grundmann. 2006. From single core to multi-core: preparing for a new exponential. In Proceedings of the 2006 IEEE/ACM international conference on Computer-aided design (ICCAD '06). Association for Computing Machinery, New York, NY, USA, 67–72. https://doi.org/10.1145/1233501.1233516
2. https://nodejs.org/api/worker_threads.html#portpostmessagevalue-transferlist


## Literature
- Modern Operating Systems (Tanenbaum & Bos)
- Multithreaded JavaScript - Concurrency Beyond the Event Loop (Thomas Hunter II & Bryan English)
- ecma262 specification (https://tc39.es/ecma262/)
- HTML specification - Web messaging (https://html.spec.whatwg.org/multipage/web-messaging.html)
- V8 documentation (https://v8.dev/docs)

## Content
1. Introduction
   1. Context and Motivation
   2. Scope
   3. Research question

2. Fundamental concepts of parallelism
   1. Processes and Threads
   2. Communication between threads 
   3. Atomics & Memory Ordering / Synchronisation

3. State of Parallelism in JavaScript
   1. Core concepts
   2. Messaging
   3. Transferables
   4. Shared memory
   5. Open proposals 
   6. Differences between runtime environments

4. Limitations
   1. Function Objects
   2. Prototype information
   3. Result

5. Discussion
   1. Conclusion
   2. Outlook
