* Scope: where to look for things

* js is a compile language: it run through the whole code to compile it, then run again in order to execute it
                            so it know what on line 4 when it's about to execute line 5

* js has scope functions: the smallest scope you can have it's a function

* the js compiler does jitc: just in time compilation in which

* var something is a  declaration -- setting that variable to a value is an initializaton expression

* function declaration: is the function keyword followed a name and block of code

* there is lhs = rhs

* when not in strict mode and there is an lhs and a rhs assignment in the global scope, the javascript compiler will create the variable and make the assignment even though we did not have a var key word

* undefined is actual value - it means a variable which has not been initialized- not given a specific value
-totally different from undeclared

* the reason it is rh it is because it is not a lhs

* the main difference between a function declaration and a function expression is whether or not not : the function keyword is the first one in the state- function declaration is when the function is the first one the statement --  anything else is function expression-- often considered as anonymous function-- it's good to create function expression with named function like: var test = function bar(){ } -- so that way we can refer to the function inside itself
---named function expression are always better than anonumous function expression

* caveat catch clause has its own scope
