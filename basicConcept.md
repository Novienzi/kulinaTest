1. Coding 
    A. Give an example of code smell (1) that usually happened in   
       OOP. Explain and give the preventive action

       Code smells are not bugs or errors. Instead these are absolute violations of the fundamentals of developing software that decrease the quality of code. Having a code smells will slow down the processing, increased risk of failure and error while making the program vulnerable tp bugs in the future. This is indicates a deeper problem in the software system.

       Most common code smells:

       1. Bloaters
       2. Object-Orientation Abusers
       3. Change preventers
       4. Dispensable
       5. Couplers

       Object-Orientation Abusers, often happened on OOP. These smells are incomplete or incorrect application of object-oriented programming principles. For example, 
       
       a. Switch Statements is having a complex switch operator or sequence of if statements.
          
          Solution :

          * Isolate `switch` and put it in the  
            right class, you may need Extract Method and then Move Method.
          * If a `switch` is based on type code, 
            such as when the program’s runtime mode is switched, use    
            replace Type Code with Subclasses or replace Type Code with State/Strategy.
          * After specifying the inheritance   
            structure, use Replace Conditional with Polymorphism.
          * If one of the conditional options is 
            null, use Introduce Null Object.

       Preventive action : 
       
       Code smell differs from project to project and developer to developer, according to the design standards that have been set by an organization. Code smells is that it’s easy for inexperienced people to spot, it can be easily detected with the help of tools. So, the preventive action can be routinely checking the program.
        
       Many companies organize “code smells of the week” and ask developers to look for the smell and bring it up with the senior members of the team. Doing it one smell at a time is a good way of gradually teaching people on the team to be better programmers. 

    B. Explain briefly about Dependency Injection, and why is it 
       important ?

       Dependency in programming means when class A uses some functionality of class B, then its said that class A has a dependency of class B. So, Dependency injection is a technique whereby one object (or static method) supplies the dependencies of another object. A dependency is an object that can be used (a service).

       Why dependency injection is important?

       For example, there is a car class which contains various objects such as wheels, engine, etc. Here the car class is responsible for creating all the dependency objects. Now, what if in the future the owner decide to ditch MRFWheels and want to use Yokohama Wheels?

       Then, will need to recreate the car object with a new Yokohama dependency. But when using dependency injection (DI), we can change the Wheels at runtime (because dependencies can be injected at runtime rather than at compile time).

       Can be concluded that DI as the middleman in code who does all the work of creating the preferred wheels object and providing it to the Car class.

       It makes the Car class independent from creating the objects of Wheels, Battery, etc.

2. Rest API
    A. Give 1 example each, of what do’s and don’ts when you handle request while
       using these method :
       *POST

       DO : If the request was successful and the response’s body is empty (or null) you have to return 204 No content. This is not only to be picky, but it is used to prevent front-end errors. In most cases, if the status returned by a request is 204, the parser will not be called even though the request expected JSON content.

       DON'T : The correct response to a successful POST request is always 201 Created. 200 OK is used for updates or deletions (including a body).

       *GET

       DO : You must put some restrictions in place to avoid and protect against DDoS (Distributed Denial of Service) attacks. One possibility is to limit the number of requests made based on the user’s IP address, but I would instead recommend using some kind of ID-based Authorization system. With this system, the user gets a client ID once registered and must use this client ID in order to consume the API. It allows you to keep record of your users’ requests and put some restrictions in place.

       DON'T : Don't ever use GET to alter state. Which means if you make a request several times, they should have the same effect