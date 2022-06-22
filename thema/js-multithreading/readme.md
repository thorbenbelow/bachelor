# JavaScript - Analysis of the current state of its capabilities in a multithreaded setting

  
## Expose

Moore's Law states the number of transistors doubles about every two years, though the cost of computers is halved. While this has been true for a long time, semiconductor advancement has slowed industry-wide since around 2010.  
A lot of the increase in compute power now comes from an increased core count in CPUs rather than a performance increase in single cores.  

It follows that the importance of software that can make use of this increased number also rises.  
Most modern programming languages provide features that allow for concurrent execution of its code.  

JavaScript is most well-known as the scripting language for Web pages, although it is also supported by many non-browser environments like Node.js or Deno.
It is lightweight, interpreted or just-in-time compiled, prototype-based and features first-class functions.  
In the past, the platforms that JavaScript ran on did not provide any thread support, so the language was thought of as single-threaded.  
Concurrency was achieved through the use of Callbacks and later, with the introduction of promises, asynchronous programming.  
Parallel programming was only possible in some environments by using other languages and interfacing with JavaScript.   
Since then there have been a lot of changes to the language to support multi threading.  

With the introduction of web, shared and service workers in the browser and worker threads in nodejs and deno, there are APIs to achieve real multithreading in all major environments. 



### todo
- erkenntnis und entwicklungsziel konkretisieren
- Möglichkeiten im Datenaustausch zwischen threads
- shared memory
- konkreter bezug auf function objects

## References
- Multithreaded JavaScript - Concurrency Beyond the Event Loop (Thomas Hunter II & Bryan English)
- ecma262 specification (https://tc39.es/ecma262/)
- 

## Content
1. Introduction
   1. Context and Motivation
   2. Scope
   3. Research question
2. Concurrency
   1. Async vs parallelism
   2. Thread Safety
   3. Atomics & Memory Ordering
3. JavaScript
   1. Core concepts
      1. Inheritance and the prototype chain
      2. Closures
      3. Strict mode
      4. Concurrency model and Event Loop
      5. Memory Management
   2. Engines
   3. Current capabilities
      1. Message channels
      2. Transferables
      3. Shared memory
      4. Atomics
   4. Open proposals 
4. Implementation
   1. Method 
      1. Serializing & Deserializing
      2. structured clone (?)
   2. Result
5. Related Work
6. Discussion
   1. Conclusion
   2. Outlook