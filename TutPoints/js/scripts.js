const TutPoint = {
    tutorials: {
        java: {
            title: "Java Tutorial",
            topics: [
                {
                    id: "introduction",
                    title: "Introduction",
                    content: `
                    <h3>Introduction to Java</h3>
                    <p>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It was developed by Sun Microsystems (now owned by Oracle Corporation) and released in 1995 as a core component of Sun Microsystems' Java platform. The language was originally called Oak, after an oak tree that stood outside the office of its creator, James Gosling.</p>
                    
                    <h4>Key Features of Java</h4>
                    <ul>
                        <li><strong>Platform Independence:</strong> Java is known for its "write once, run anywhere" capability, meaning compiled Java code can run on any platform that supports Java without the need for recompilation. This is achieved through the Java Virtual Machine (JVM), which interprets the bytecode.</li>
                        <li><strong>Object-Oriented:</strong> Java is inherently object-oriented, which means everything in Java is an object. It supports fundamental OOP concepts like inheritance, polymorphism, encapsulation, and abstraction.</li>
                        <li><strong>Robust and Secure:</strong> Java has strong memory management features, with a focus on eliminating vulnerabilities like pointer arithmetic that could cause security issues. It also has a built-in garbage collector to manage memory automatically.</li>
                        <li><strong>Multithreaded:</strong> Java supports multithreading at the language level, allowing for the development of highly interactive and responsive applications.</li>
                        <li><strong>Rich API:</strong> Java comes with a comprehensive set of APIs that make tasks such as networking, data management, and graphics easier to implement.</li>
                        <li><strong>Dynamic and Extensible:</strong> Java is designed to adapt to an evolving environment, which allows for dynamic memory allocation, ensuring optimal utilization of resources. It also supports dynamic linking of new class libraries, methods, and objects.</li>
                    </ul>
                    
                    <h4>Java Editions</h4>
                    <p>Java is available in several editions, each targeting different application domains:</p>
                    <ul>
                        <li><strong>Java Standard Edition (Java SE):</strong> The core platform for general-purpose programming. It provides the necessary libraries and APIs for desktop and server applications.</li>
                        <li><strong>Java Enterprise Edition (Java EE):</strong> An extension of Java SE, it provides additional libraries for large-scale, distributed, and web-based applications. It's widely used for enterprise-level applications.</li>
                        <li><strong>Java Micro Edition (Java ME):</strong> A subset of Java SE, designed for mobile devices and embedded systems, offering a lightweight runtime environment.</li>
                        <li><strong>JavaFX:</strong> A platform for developing rich internet applications with a modern user interface.</li>
                    </ul>
                
                    <h4>The Java Ecosystem</h4>
                    <p>Java has a vast ecosystem consisting of various tools, libraries, and frameworks that enhance its capabilities:</p>
                    <ul>
                        <li><strong>Integrated Development Environments (IDEs):</strong> Popular IDEs like IntelliJ IDEA, Eclipse, and NetBeans provide powerful tools for writing, debugging, and testing Java applications.</li>
                        <li><strong>Build Tools:</strong> Tools like Maven, Gradle, and Ant help manage project dependencies, automate builds, and streamline project workflows.</li>
                        <li><strong>Testing Frameworks:</strong> JUnit and TestNG are commonly used for writing and running unit tests, ensuring code reliability.</li>
                        <li><strong>Frameworks:</strong> Java boasts numerous frameworks like Spring, Hibernate, and Apache Struts that simplify development by providing ready-to-use solutions for common programming challenges.</li>
                    </ul>
                
                    <h4>Java Community and Open-Source Contribution</h4>
                    <p>Java has a vibrant and active community that contributes to its growth and evolution. Many Java frameworks, libraries, and tools are open-source, fostering collaboration and innovation. The Java Community Process (JCP) allows developers to contribute to the development and future directions of the Java language and platform.</p>
                
                    <h4>Conclusion</h4>
                    <p>Java continues to be a dominant language in the software industry, thanks to its robustness, security, and versatility. Whether you're developing web applications, mobile apps, enterprise solutions, or cloud-based systems, Java provides the tools and libraries needed to build reliable and scalable solutions. As you progress through this tutorial, you'll gain a deeper understanding of Java's core principles and how to leverage its features to build powerful applications.</p>
                    `
                },
                {
                    "id": "installation-setup",
                    "title": "Installation and Setup",
                    "content": `
                    <h3>Installation and Setup</h3>
                    <p>To start coding in Java, you need to install the Java Development Kit (JDK) and set up your environment. This section will guide you through the installation process for different operating systems and configuring your development environment.</p>
                    
                    <h4>1. Installing Java Development Kit (JDK)</h4>
                    <p>The JDK is essential for Java development. Follow these steps to install it:</p>
                    
                    <h5>Windows</h5>
                    <ol>
                        <li>Download the JDK installer from the <a href="https://www.oracle.com/java/technologies/javase-jdk15-downloads.html">Oracle website</a>.</li>
                        <li>Run the installer and follow the on-screen instructions. Make sure to note the installation directory.</li>
                        <li>Set up the environment variables:
                            <ul>
                                <li>Right-click on 'This PC' or 'Computer' on the desktop or in File Explorer and select 'Properties'.</li>
                                <li>Click on 'Advanced system settings' and then 'Environment Variables'.</li>
                                <li>In the 'System variables' section, click 'New' and add a variable named <strong>JAVA_HOME</strong> with the path to your JDK installation directory (e.g., C:\\Program Files\\Java\\jdk-15).</li>
                                <li>Find the 'Path' variable, click 'Edit', and add <strong>%JAVA_HOME%\\bin</strong> to the list of values.</li>
                            </ul>
                        </li>
                        <li>Open Command Prompt and type <code>java -version</code> to verify the installation.</li>
                    </ol>
                    
                    <h5>macOS</h5>
                    <ol>
                        <li>Download the JDK installer from the <a href="https://www.oracle.com/java/technologies/javase-jdk15-downloads.html">Oracle website</a>.</li>
                        <li>Open the .dmg file and follow the installation instructions.</li>
                        <li>Set the JAVA_HOME environment variable:
                            <ul>
                                <li>Open Terminal and add the following line to your .bash_profile or .zshrc file (depending on your shell): <code>export JAVA_HOME=$(/usr/libexec/java_home)</code>.</li>
                                <li>Reload your profile by running <code>source ~/.bash_profile</code> or <code>source ~/.zshrc</code>.</li>
                            </ul>
                        </li>
                        <li>Type <code>java -version</code> in the terminal to confirm the installation.</li>
                    </ol>
                    
                    <h5>Linux</h5>
                    <ol>
                        <li>Install the JDK using your package manager:
                            <ul>
                                <li>For Ubuntu/Debian, run <code>sudo apt update</code> and <code>sudo apt install openjdk-15-jdk</code>.</li>
                            </ul>
                        </li>
                        <li>Set the JAVA_HOME environment variable:
                            <ul>
                                <li>Add the following line to your .bashrc or .profile file: <code>export JAVA_HOME=/usr/lib/jvm/java-15-openjdk-amd64</code>.</li>
                                <li>Reload your profile with <code>source ~/.bashrc</code> or <code>source ~/.profile</code>.</li
                            </ul>
                        </li>
                        <li>Verify the installation by running <code>java -version</code> in the terminal.</li>
                    </ol>

                    <h4>2. Installing an Integrated Development Environment (IDE)</h4>
                    <p>An IDE enhances productivity with features like code completion, debugging, and project management. Popular IDEs for Java include:</p>
                    <ul>
                        <li><a href="https://www.eclipse.org/">Eclipse</a></li>
                        <li><a href="https://www.jetbrains.com/idea/">IntelliJ IDEA</a></li>
                        <li><a href="https://netbeans.apache.org/">NetBeans</a></li>
                    </ul>
                    <p>Download and install one of these IDEs from their respective websites, following the installation instructions provided.</p>

                    <h4>3. Verifying the Installation</h4>
                    <p>After installing the JDK and IDE, you should verify that everything is working correctly by creating and running a simple Java program:</p>
                    <pre><code>public class HelloWorld {public static void main(String[] args) {
                        System.out.println("Hello, World!");
                        }
                    }</code></pre> <p>Compile and run this program using your IDE or from the command line to ensure your Java environment is properly configured.</p> `
                },
                {
                    "id": "java-basics",
                    "title": "Java Basics",
                    "content": `
                    <h3>Java Basics</h3>
                    <p>This section covers the fundamental building blocks of Java programming, which include variables, data types, operators, control statements, and basic input/output operations.</p>
                    
                    <h4>1. Variables</h4>
                    <p>Variables are used to store data that can be used and manipulated throughout a program. In Java, variables must be declared with a specific data type. The syntax for declaring a variable is:</p>
                    <pre><code>dataType variableName = value;</code></pre>
                    <p>For example:</p>
                    <pre><code>int age = 25;
                    String name = "John Doe";</code></pre>
                    
                    <h4>2. Data Types</h4>
                    <p>Java is a strongly-typed language, which means that every variable must be declared with a data type. Java has two main categories of data types:</p>
                    <ul>
                        <li><strong>Primitive Data Types:</strong> These are the basic data types provided by Java, including <code>int</code>, <code>char</code>, <code>double</code>, <code>float</code>, <code>boolean</code>, <code>byte</code>, <code>short</code>, and <code>long</code>.</li>
                        <li><strong>Reference Data Types:</strong> These are used to refer to objects and include classes, interfaces, and arrays. For example, <code>String</code> is a reference data type.</li>
                    </ul>
                    
                    <h4>3. Operators</h4>
                    <p>Operators are special symbols that perform operations on variables and values. Java supports several types of operators:</p>
                    <ul>
                        <li><strong>Arithmetic Operators:</strong> <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code></li>
                        <li><strong>Relational Operators:</strong> <code>==</code>, <code>!=</code>, <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code></li>
                        <li><strong>Logical Operators:</strong> <code>&&</code>, <code>||</code>, <code>!</code></li>
                        <li><strong>Assignment Operators:</strong> <code>=</code>, <code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code></li>
                        <li><strong>Increment and Decrement Operators:</strong> <code>++</code>, <code>--</code></li>
                    </ul>
                    
                    <h4>4. Control Statements</h4>
                    <p>Control statements allow you to control the flow of execution in your program:</p>
                    <h5>Conditional Statements</h5>
                    <ul>
                        <li><strong>If-Else Statement:</strong> Executes a block of code if a condition is true, and another block if the condition is false.</li>
                        <pre><code>if (condition) {
                    // code to be executed if condition is true
                } else {
                    // code to be executed if condition is false
                }</code></pre>
                        <li><strong>Switch-Case Statement:</strong> Allows a variable to be tested for equality against a list of values.</li>
                        <pre><code>switch (expression) {
                    case value1:
                        // code to be executed if expression equals value1
                        break;
                    case value2:
                        // code to be executed if expression equals value2
                        break;
                    default:
                        // code to be executed if expression does not equal any value
                }</code></pre>
                    </ul>
                    
                    <h5>Looping Statements</h5>
                    <ul>
                        <li><strong>For Loop:</strong> Repeats a block of code a specified number of times.</li>
                        <pre><code>for (initialization; condition; update) {
                    // code to be executed
                }</code></pre>
                        <li><strong>While Loop:</strong> Repeats a block of code as long as a specified condition is true.</li>
                        <pre><code>while (condition) {
                    // code to be executed
                }</code></pre>
                        <li><strong>Do-While Loop:</strong> Similar to the while loop, but guarantees that the code block will be executed at least once.</li>
                        <pre><code>do {
                    // code to be executed
                } while (condition);</code></pre>
                    </ul>
                    
                    <h4>5. Basic Input/Output (I/O)</h4>
                    <p>Java provides classes and methods for basic input and output operations:</p>
                    <h5>Input</h5>
                    <p>To read user input from the console, use the <code>Scanner</code> class:</p>
                    <pre><code>import java.util.Scanner;
                
                Scanner scanner = new Scanner(System.in);
                System.out.print("Enter your name: ");
                String name = scanner.nextLine();</code></pre>
                    
                    <h5>Output</h5>
                    <p>To display output to the console, use <code>System.out.println()</code>:</p>
                    <pre><code>System.out.println("Hello, World!");</code></pre>
                    `
                },
                {
                    "id": "oop",
                    "title": "Object-Oriented Programming",
                    "content": `
                    <h3>Object-Oriented Programming in Java</h3>
                    <p>Object-Oriented Programming (OOP) is a programming paradigm that uses objects and classes to model real-world entities and their interactions. Java is an object-oriented language, which means it utilizes the principles of OOP to build modular, reusable, and maintainable code. This section covers the fundamental concepts of OOP, including Classes, Objects, Inheritance, Polymorphism, Encapsulation, and Abstraction, with practical examples to illustrate each concept.</p>
                     <img src="assets/OOPS_Concept_of_JAVA.png" alt="Description of image" style="height: auto;">
                    <h4>1. Classes and Objects</h4>
                    
                    <p><strong>Class:</strong> A class is a blueprint or template for creating objects. It defines a set of attributes (fields) and methods (functions) that the objects created from the class will have. For example, a <code>Car</code> class might include attributes such as <code>color</code> and <code>model</code>, and methods such as <code>startEngine()</code>.</p>
                    <pre><code>class Car {\n    // Attributes (fields)\n    String color;\n    String model;\n\n    // Method\n    void startEngine() {\n        System.out.println(\"Engine started!\");\n    }\n}</code></pre>
                    <p><strong>Object:</strong> An object is an instance of a class. It is created using the <code>new</code> keyword and can access the class’s fields and methods. For example, you can create a <code>Car</code> object and use it to call the <code>startEngine()</code> method.</p>
                    <pre><code>Car myCar = new Car();\nmyCar.color = \"Red\";\nmyCar.model = \"Toyota\";\nmyCar.startEngine(); // Output: Engine started!</code></pre>
                
                    <h4>2. Inheritance</h4>
                    <p>Inheritance is a mechanism in OOP that allows a new class to inherit properties and behaviors from an existing class. This promotes code reuse and establishes a hierarchical relationship between classes.</p>
                    <pre><code>class ElectricCar extends Car {\n    // Additional attribute specific to ElectricCar\n    int batteryCapacity;\n\n    // Method specific to ElectricCar\n    void chargeBattery() {\n        System.out.println(\"Battery charging...\");\n    }\n}</code></pre>
                    <p>In this example, <code>ElectricCar</code> inherits from <code>Car</code> and can use the <code>startEngine()</code> method while adding its own method, <code>chargeBattery()</code>.</p>
                
                    <h4>3. Polymorphism</h4>
                    <p>Polymorphism allows objects to be treated as instances of their parent class rather than their actual class. It also enables a single method to perform different tasks based on the object it is acting upon.</p>
                    <pre><code>class Animal {\n    void makeSound() {\n        System.out.println(\"Some sound...\");\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    void makeSound() {\n        System.out.println(\"Woof!\");\n    }\n}\n\nclass Cat extends Animal {\n    @Override\n    void makeSound() {\n        System.out.println(\"Meow!\");\n    }\n}</code></pre>
                    <p>In this example, both <code>Dog</code> and <code>Cat</code> are subclasses of <code>Animal</code> and override the <code>makeSound()</code> method. The method call is determined by the object type at runtime.</p>
                    <pre><code>Animal myPet = new Dog();\nmyPet.makeSound(); // Output: Woof!</code></pre>
                
                    <h4>4. Encapsulation</h4>
                    <p>Encapsulation is the practice of bundling the data (attributes) and the methods (functions) that operate on the data into a single unit or class. It also involves restricting direct access to some of the object’s components to protect the integrity of the data.</p>
                    <pre><code>class Person {\n    // Private attributes\n    private String name;\n    private int age;\n\n    // Public getter for name\n    public String getName() {\n        return name;\n    }\n\n    // Public setter for name\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    // Public getter for age\n    public int getAge() {\n        return age;\n    }\n\n    // Public setter for age\n    public void setAge(int age) {\n        if (age > 0) {\n            this.age = age;\n        }\n    }\n}</code></pre>
                    <p>In this example, the <code>Person</code> class uses private attributes and provides public getter and setter methods to access and modify these attributes safely.</p>
                
                    <h4>5. Abstraction</h4>
                    <p>Abstraction involves hiding the complex implementation details and showing only the necessary features of an object. It helps to reduce complexity by allowing the programmer to focus on interactions at a higher level.</p>
                    <pre><code>abstract class Shape {\n    abstract void draw();\n}\n\nclass Circle extends Shape {\n    @Override\n    void draw() {\n        System.out.println(\"Drawing a circle...\");\n    }\n}</code></pre>
                    <p>The <code>Shape</code> class is abstract and provides a blueprint for other shapes. The <code>Circle</code> class extends <code>Shape</code> and implements the <code>draw()</code> method.</p>
                    `
                },
                {
                    "id": "advanced-oop",
                    "title": "Advanced OOP Concepts",
                    "content": `
                    <h3>Advanced OOP Concepts</h3>
                    <p>In this section, we'll explore more advanced Object-Oriented Programming (OOP) topics, including Interfaces, Abstract Classes, Nested Classes, and Generics. These concepts build upon the foundational OOP principles to provide more flexible and powerful ways to design and implement your Java programs.</p>
                
                    <h4>1. Interfaces</h4>
                    <p>An interface in Java is a reference type that can contain only constants, method signatures, default methods, static methods, and nested types. Interfaces are used to specify a set of methods that a class must implement. They allow different classes to implement the same set of methods, providing a form of polymorphism.</p>
                    <pre><code>interface Drawable {\n    void draw();\n}\n\nclass Circle implements Drawable {\n    @Override\n    public void draw() {\n        System.out.println(\"Drawing a circle...\");\n    }\n}\n\nclass Rectangle implements Drawable {\n    @Override\n    public void draw() {\n        System.out.println(\"Drawing a rectangle...\");\n    }\n}</code></pre>
                    <p>In this example, both <code>Circle</code> and <code>Rectangle</code> classes implement the <code>Drawable</code> interface and provide their own implementation of the <code>draw()</code> method.</p>
                
                    <h4>2. Abstract Classes</h4>
                    <p>An abstract class is a class that cannot be instantiated on its own and must be subclassed. It can contain abstract methods (methods without a body) as well as concrete methods (methods with a body). Abstract classes are used to provide a base for subclasses to extend and implement the abstract methods.</p>
                    <pre><code>abstract class Animal {\n    abstract void makeSound();\n\n    void sleep() {\n        System.out.println(\"Sleeping...\");\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    void makeSound() {\n        System.out.println(\"Woof!\");\n    }\n}</code></pre>
                    <p>Here, <code>Animal</code> is an abstract class with an abstract method <code>makeSound()</code> and a concrete method <code>sleep()</code>. The <code>Dog</code> class extends <code>Animal</code> and provides an implementation for the <code>makeSound()</code> method.</p>
                
                    <h4>3. Nested Classes</h4>
                    <p>Java supports nested classes, which are classes defined within another class. Nested classes can be categorized into static nested classes, non-static inner classes, local classes, and anonymous classes. Each type of nested class serves different purposes and provides various levels of access to the enclosing class.</p>
                    <pre><code>class OuterClass {\n    private String outerField = \"Outer\";\n\n    static class StaticNestedClass {\n        void display() {\n            System.out.println(\"Static Nested Class\");\n        }\n    }\n\n    class InnerClass {\n        void display() {\n            System.out.println(\"Inner Class with access to: \" + outerField);\n        }\n    }\n}\n\nOuterClass.StaticNestedClass staticNested = new OuterClass.StaticNestedClass();\nstaticNested.display();\n\nOuterClass outer = new OuterClass();\nOuterClass.InnerClass inner = outer.new InnerClass();\ninner.display();</code></pre>
                    <p>In this example, <code>StaticNestedClass</code> is a static nested class and <code>InnerClass</code> is a non-static inner class. The inner class has access to the members of the outer class, while the static nested class does not.</p>
                
                    <h4>4. Generics</h4>
                    <p>Generics enable you to define classes, interfaces, and methods with a placeholder for the type they operate on. They provide stronger type checks at compile time and support generic algorithms. Generics are used to create classes that can work with different data types while providing compile-time type safety.</p>
                    <pre><code>class Box<T> {\n    private T value;\n\n    public void setValue(T value) {\n        this.value = value;\n    }\n\n    public T getValue() {\n        return value;\n    }\n}\n\nBox<Integer> integerBox = new Box<>();\nintegerBox.setValue(10);\nSystem.out.println(integerBox.getValue());\n\nBox<String> stringBox = new Box<>();\nstringBox.setValue(\"Hello\");\nSystem.out.println(stringBox.getValue());</code></pre>
                    <p>In this example, <code>Box</code> is a generic class that can store any type of object. By using generics, you can create instances of <code>Box</code> with different types, such as <code>Integer</code> and <code>String</code>, while maintaining type safety.</p>
                    `
                },
                {
                    "id": "exception-handling",
                    "title": "Exception Handling",
                    "content": `
                    <h3>Exception Handling in Java</h3>
                    <p>Exception handling is a critical aspect of Java programming that allows you to manage and respond to runtime errors. Java provides a robust mechanism for handling exceptions through constructs like try-catch blocks, the finally block, throw statements, and custom exceptions. This section will cover these concepts in detail.</p>
                
                    <h4>1. Try-Catch Blocks</h4>
                    <p>The try-catch block is used to handle exceptions by specifying a block of code to be executed (try) and a block of code to handle exceptions (catch). This mechanism allows you to catch and handle exceptions that occur during runtime.</p>
                    <pre><code>try {\n    // Code that may throw an exception\n    int result = 10 / 0;\n} catch (ArithmeticException e) {\n    // Code to handle the exception\n    System.out.println("Cannot divide by zero!");\n}</code></pre>
                    <p>In this example, if an <code>ArithmeticException</code> is thrown (due to division by zero), it is caught by the <code>catch</code> block, which then prints an error message.</p>
                
                    <h4>2. Finally Block</h4>
                    <p>The <code>finally</code> block is used to execute code that must run regardless of whether an exception was thrown or not. It is typically used for closing resources such as file streams or database connections.</p>
                    <pre><code>try {\n    // Code that may throw an exception\n    int[] numbers = new int[5];\n    numbers[10] = 1;\n} catch (ArrayIndexOutOfBoundsException e) {\n    // Code to handle the exception\n    System.out.println("Array index out of bounds!");\n} finally {\n    // Code that will always execute\n    System.out.println("This will always execute.");\n}</code></pre>
                    <p>Here, the <code>finally</code> block will execute regardless of whether an exception is caught or not.</p>
                
                    <h4>3. Throwing Exceptions</h4>
                    <p>You can throw exceptions manually using the <code>throw</code> keyword. This is useful for indicating that a method has encountered an error that it cannot handle and needs to pass it up to the caller.</p>
                    <pre><code>public void checkAge(int age) {\n    if (age < 18) {\n        throw new IllegalArgumentException("Age must be at least 18.");\n    }\n    System.out.println("Age is valid.");\n}</code></pre>
                    <p>In this example, if the <code>age</code> is less than 18, an <code>IllegalArgumentException</code> is thrown with a message indicating that the age must be at least 18.</p>
                
                    <h4>4. Custom Exceptions</h4>
                    <p>Custom exceptions allow you to create your own exception classes that extend the <code>Exception</code> or <code>RuntimeException</code> classes. This is useful for creating exceptions specific to your application's needs.</p>
                    <pre><code>class CustomException extends Exception {\n    public CustomException(String message) {\n        super(message);\n    }\n}\n\npublic void process() throws CustomException {\n    throw new CustomException("This is a custom exception.");\n}</code></pre>
                    <p>In this example, <code>CustomException</code> is a user-defined exception that can be thrown and caught in the same way as built-in exceptions.</p>
                
                    <h4>5. Exception Hierarchy</h4>
                    <p>Java exceptions are organized in a hierarchy. The base class for all exceptions is <code>Throwable</code>. It has two main subclasses:</p>
                    <ul>
                        <li><strong>Exception:</strong> Used for conditions that a reasonable application should catch. It includes checked exceptions (e.g., <code>IOException</code>).</li>
                        <li><strong>RuntimeException:</strong> Used for programming errors, such as logical errors or incorrect API usage. These are unchecked exceptions (e.g., <code>NullPointerException</code>).</li>
                    </ul>
                    <p>Understanding the exception hierarchy helps in choosing the appropriate exception type to use and handle.</p>
                    `
                },
                {
                    "id": "collections-framework",
                    "title": "Java Collections Framework",
                    "content": `
                    <h3>Java Collections Framework</h3>
                    <p>The Java Collections Framework provides a set of interfaces, implementations, and algorithms to manage and manipulate collections of objects. It includes several data structures such as lists, sets, and maps, along with utilities for algorithmic operations. This section covers the core components and concepts of the Collections Framework.</p>
                
                    <h4>1. Overview</h4>
                    <p>The Collections Framework is designed to provide a standard way to manage collections of objects, making it easier to handle data and perform common operations. It includes the following key components:</p>
                    <ul>
                        <li><strong>Interfaces:</strong> Define the contract for collection operations (e.g., <code>List</code>, <code>Set</code>, <code>Map</code>).</li>
                        <li><strong>Implementations:</strong> Provide concrete implementations of the collection interfaces (e.g., <code>ArrayList</code>, <code>HashSet</code>, <code>HashMap</code>).</li>
                        <li><strong>Algorithms:</strong> Implement common algorithms for sorting, searching, and manipulating collections (e.g., <code>Collections.sort()</code>).</li>
                    </ul>
                
                    <h4>2. Interfaces</h4>
                    <p>The core interfaces in the Collections Framework define various types of collections:</p>
                    <ul>
                        <li><strong>Collection:</strong> The root interface for all collection classes. It provides basic methods such as <code>add()</code>, <code>remove()</code>, and <code>size()</code>.</li>
                        <li><strong>List:</strong> An ordered collection that allows duplicates and provides positional access to elements. Common implementations include <code>ArrayList</code> and <code>LinkedList</code>.</li>
                        <li><strong>Set:</strong> A collection that does not allow duplicates. Implementations include <code>HashSet</code> and <code>TreeSet</code>.</li>
                        <li><strong>Map:</strong> A collection that maps keys to values. Each key is unique, and each key maps to exactly one value. Common implementations include <code>HashMap</code> and <code>TreeMap</code>.</li>
                        <li><strong>Queue:</strong> A collection designed for holding elements prior to processing. Implementations include <code>LinkedList</code> and <code>PriorityQueue</code>.</li>
                    </ul>
                
                    <h4>3. Implementations</h4>
                    <p>Here are some key implementations of the core interfaces:</p>
                    <h5>List Implementations</h5>
                    <ul>
                        <li><strong>ArrayList:</strong> A resizable array implementation of the <code>List</code> interface. It provides fast random access but slow insertions and deletions.</li>
                        <li><strong>LinkedList:</strong> A doubly-linked list implementation of the <code>List</code> interface. It provides faster insertions and deletions but slower random access.</li>
                    </ul>
                    <h5>Set Implementations</h5>
                    <ul>
                        <li><strong>HashSet:</strong> A hash table-based implementation of the <code>Set</code> interface. It provides constant-time performance for basic operations.</li>
                        <li><strong>TreeSet:</strong> A navigable <code>Set</code> implementation based on a red-black tree. It provides ordered traversal.</li>
                    </ul>
                    <h5>Map Implementations</h5>
                    <ul>
                        <li><strong>HashMap:</strong> A hash table-based implementation of the <code>Map</code> interface. It allows <code>null</code> values and keys and provides constant-time performance for basic operations.</li>
                        <li><strong>TreeMap:</strong> A map implementation based on a red-black tree. It provides ordered traversal and allows <code>null</code> values but not <code>null</code> keys.</li>
                    </ul>
                
                    <h4>4. Algorithms</h4>
                    <p>The Collections Framework includes the <code>Collections</code> utility class, which provides static methods for common operations:</p>
                    <ul>
                        <li><strong>Sorting:</strong> The <code>Collections.sort()</code> method can be used to sort a <code>List</code>:</li>
                        <pre><code>List<String> list = Arrays.asList("banana", "apple", "orange");
                        Collections.sort(list);
                        System.out.println(list); // Output: [apple, banana, orange]</code></pre>
                        <li><strong>Searching:</strong> The <code>Collections.binarySearch()</code> method can be used to search for an element in a sorted list:</li>
                        <pre><code>int index = Collections.binarySearch(list, "banana");
                        System.out.println(index); // Output: 1</code></pre>
                    </ul>
                
                    <h4>5. Comparing and Sorting</h4>
                    <p>When working with collections, it's often necessary to sort or compare elements. Java provides the <code>Comparable</code> and <code>Comparator</code> interfaces for this purpose:</p>
                    <ul>
                        <li><strong>Comparable:</strong> Implemented by classes whose objects need to be ordered. For example, <code>String</code> implements <code>Comparable</code>:</li>
                        <pre><code>public class Person implements Comparable<Person> {\n    private String name;\n    private int age;\n    public Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n    @Override\n    public int compareTo(Person other) {\n        return Integer.compare(this.age, other.age);\n    }\n}</code></pre>
                        <li><strong>Comparator:</strong> Used to define multiple ways to compare objects. For example, sorting by name:</li>
                        <pre><code>public class NameComparator implements Comparator<Person> {\n    @Override\n    public int compare(Person p1, Person p2) {\n        return p1.name.compareTo(p2.name);\n    }\n}</code></pre>
                    </ul>
                    `
                },
                {
                    "id": "multithreading",
                    "title": "Multithreading and Concurrency",
                    "content": `
                    <h3>Multithreading and Concurrency in Java</h3>
                    <p>Multithreading and concurrency are fundamental concepts in Java that allow you to write programs that can perform multiple tasks simultaneously. This section covers the principles of multithreading, synchronization, executors, and advanced concurrency utilities in Java.</p>
                
                    <h4>1. Introduction to Multithreading</h4>
                    <p>Multithreading allows a program to execute multiple threads concurrently, enabling more efficient use of resources and improving the performance of applications that perform multiple tasks. Each thread represents a separate path of execution in a program.</p>
                    
                    <h5>Creating Threads</h5>
                    <p>In Java, threads can be created in two ways:</p>
                    <ul>
                        <li><strong>Extending the <code>Thread</code> Class:</strong> Create a new class that extends the <code>Thread</code> class and override the <code>run()</code> method:</li>
                        <pre><code>public class MyThread extends Thread {
                            @Override
                            public void run() {
                                System.out.println("Thread is running...");
                            }
                        }
                        
                        MyThread thread = new MyThread();
                        thread.start();</code></pre>
                        
                        <li><strong>Implementing the <code>Runnable</code> Interface:</strong> Implement the <code>Runnable</code> interface and pass an instance of the implementing class to a <code>Thread</code> object:</li>
                        <pre><code>public class MyRunnable implements Runnable {
                            @Override
                            public void run() {
                                System.out.println("Runnable is running...");
                            }
                        }
                        
                        Thread thread = new Thread(new MyRunnable());
                        thread.start();</code></pre>
                    </ul>
                    
                    <h4>2. Thread Synchronization</h4>
                    <p>When multiple threads access shared resources, synchronization is needed to avoid data inconsistency and ensure that only one thread can access the resource at a time.</p>
                    
                    <h5>Synchronizing Methods</h5>
                    <p>Use the <code>synchronized</code> keyword to synchronize methods:</p>
                    <pre><code>public synchronized void synchronizedMethod() {
                        // code that accesses shared resources
                    }</code></pre>
                    
                    <h5>Synchronizing Blocks</h5>
                    <p>You can also synchronize specific blocks of code:</p>
                    <pre><code>public void method() {
                        synchronized (this) {
                            // code that accesses shared resources
                        }
                    }</code></pre>
                    
                    <h4>3. Executors and Thread Pools</h4>
                    <p>The <code>java.util.concurrent</code> package provides the <code>Executor</code> framework for managing thread execution. This framework simplifies thread management and improves performance.</p>
                    
                    <h5>Creating a Thread Pool</h5>
                    <p>Use the <code>ExecutorService</code> interface to create and manage a thread pool:</p>
                    <pre><code>import java.util.concurrent.ExecutorService;
                    import java.util.concurrent.Executors;
                
                    ExecutorService executor = Executors.newFixedThreadPool(4);
                    executor.execute(() -> {
                        System.out.println("Task is running in thread pool...");
                    });
                    executor.shutdown();</code></pre>
                    
                    <h4>4. Advanced Concurrency Utilities</h4>
                    <p>Java provides several advanced concurrency utilities to simplify complex multithreaded operations:</p>
                    
                    <h5>Locks</h5>
                    <p>The <code>ReentrantLock</code> class provides more control over synchronization compared to the synchronized keyword:</p>
                    <pre><code>import java.util.concurrent.locks.Lock;
                    import java.util.concurrent.locks.ReentrantLock;
                
                    private final Lock lock = new ReentrantLock();
                
                    public void method() {
                        lock.lock();
                        try {
                            // code that accesses shared resources
                        } finally {
                            lock.unlock();
                        }
                    }</code></pre>
                    
                    <h5>Concurrency Utilities</h5>
                    <p>Java provides additional utilities such as <code>CountDownLatch</code>, <code>Semaphore</code>, <code>ConcurrentHashMap</code>, and <code>BlockingQueue</code> for various concurrency scenarios:</p>
                    <ul>
                        <li><strong><code>CountDownLatch</code>:</strong> Allows one or more threads to wait until a set of operations being performed in other threads completes.</li>
                        <li><strong><code>Semaphore</code>:</strong> Controls access to a resource by a fixed number of threads.</li>
                        <li><strong><code>ConcurrentHashMap</code>:</strong> A thread-safe map implementation that allows concurrent access and updates.</li>
                        <li><strong><code>BlockingQueue</code>:</strong> A queue that supports operations that wait for the queue to become non-empty when retrieving an element and wait for space to become available in the queue when storing an element.</li>
                    </ul>
                    
                    <h4>5. Example: Producer-Consumer Problem</h4>
                    <p>The producer-consumer problem is a classic example of using concurrency utilities to manage a shared resource. Here's a simple implementation using a <code>BlockingQueue</code>:</p>
                    <pre><code>import java.util.concurrent.BlockingQueue;
                    import java.util.concurrent.LinkedBlockingQueue;
                
                    public class ProducerConsumerExample {
                        private static final BlockingQueue<Integer> queue = new LinkedBlockingQueue<>();
                
                        public static void main(String[] args) {
                            Thread producer = new Thread(() -> {
                                try {
                                    for (int i = 0; i < 10; i++) {
                                        queue.put(i);
                                        System.out.println("Produced: " + i);
                                    }
                                } catch (InterruptedException e) {
                                    Thread.currentThread().interrupt();
                                }
                            });
                
                            Thread consumer = new Thread(() -> {
                                try {
                                    for (int i = 0; i < 10; i++) {
                                        Integer value = queue.take();
                                        System.out.println("Consumed: " + value);
                                    }
                                } catch (InterruptedException e) {
                                    Thread.currentThread().interrupt();
                                }
                            });
                
                            producer.start();
                            consumer.start();
                        }
                    }</code></pre>
                    `
                },
                {
                    "id": "file-io",
                    "title": "File I/O in Java",
                    "content": `
                    <h3>File I/O in Java</h3>
                    <p>Java provides several classes and APIs for performing file input and output operations. This section explores how Java handles file I/O operations using classes like <code>File</code>, <code>FileReader</code>, <code>FileWriter</code>, and the NIO (New I/O) package.</p>
                
                    <h4>1. Working with Files Using <code>java.io.File</code></h4>
                    <p>The <code>File</code> class provides methods for creating, deleting, and querying files and directories.</p>
                    
                    <h5>Creating and Deleting Files</h5>
                    <p>Use the <code>File</code> class to create and delete files and directories:</p>
                    <pre><code>import java.io.File;
                    
                    // Create a new file
                    File file = new File("example.txt");
                    try {
                        if (file.createNewFile()) {
                            System.out.println("File created: " + file.getName());
                        } else {
                            System.out.println("File already exists.");
                        }
                    } catch (IOException e) {
                        System.out.println("An error occurred.");
                        e.printStackTrace();
                    }
                    
                    // Delete a file
                    if (file.delete()) {
                        System.out.println("Deleted the file: " + file.getName());
                    } else {
                        System.out.println("Failed to delete the file.");
                    }</code></pre>
                    
                    <h5>Checking File Properties</h5>
                    <p>Retrieve information about a file or directory:</p>
                    <pre><code>if (file.exists()) {
                        System.out.println("File exists: " + file.getName());
                        System.out.println("Is it a directory? " + file.isDirectory());
                        System.out.println("File size in bytes: " + file.length());
                    } else {
                        System.out.println("File does not exist.");
                    }</code></pre>
                
                    <h4>2. Reading and Writing Files Using <code>FileReader</code> and <code>FileWriter</code></h4>
                    <p>The <code>FileReader</code> and <code>FileWriter</code> classes provide convenient methods for reading from and writing to text files.</p>
                    
                    <h5>Reading from a File</h5>
                    <p>Use the <code>FileReader</code> class to read characters from a file:</p>
                    <pre><code>import java.io.FileReader;
                    import java.io.IOException;
                    
                    try (FileReader reader = new FileReader("example.txt")) {
                        int character;
                        while ((character = reader.read()) != -1) {
                            System.out.print((char) character);
                        }
                    } catch (IOException e) {
                        System.out.println("An error occurred.");
                        e.printStackTrace();
                    }</code></pre>
                    
                    <h5>Writing to a File</h5>
                    <p>Use the <code>FileWriter</code> class to write characters to a file:</p>
                    <pre><code>import java.io.FileWriter;
                    import java.io.IOException;
                    
                    try (FileWriter writer = new FileWriter("example.txt")) {
                        writer.write("Hello, World!");
                    } catch (IOException e) {
                        System.out.println("An error occurred.");
                        e.printStackTrace();
                    }</code></pre>
                
                    <h4>3. NIO (New I/O) Package</h4>
                    <p>The NIO package introduced in Java 7 provides more efficient file handling and additional features.</p>
                    
                    <h5>Using <code>Files</code> Class</h5>
                    <p>The <code>Files</code> class provides static methods for file operations:</p>
                    <pre><code>import java.nio.file.Files;
                    import java.nio.file.Paths;
                    import java.io.IOException;
                    
                    // Reading a file into a byte array
                    try {
                        byte[] fileBytes = Files.readAllBytes(Paths.get("example.txt"));
                        System.out.println(new String(fileBytes));
                    } catch (IOException e) {
                        System.out.println("An error occurred.");
                        e.printStackTrace();
                    }
                    
                    // Writing to a file
                    try {
                        String content = "Hello, NIO!";
                        Files.write(Paths.get("example.txt"), content.getBytes());
                    } catch (IOException e) {
                        System.out.println("An error occurred.");
                        e.printStackTrace();
                    }</code></pre>
                
                    <h5>Using <code>Path</code> Class</h5>
                    <p>The <code>Path</code> class represents a path in the file system and can be used for various file operations:</p>
                    <pre><code>import java.nio.file.Path;
                    import java.nio.file.Paths;
                    
                    Path path = Paths.get("example.txt");
                    System.out.println("File name: " + path.getFileName());
                    System.out.println("File size: " + Files.size(path) + " bytes");
                    </code></pre>
                    `
                },
                {
                    "id": "networking",
                    "title": "Networking in Java",
                    "content": `
                    <h3>Networking in Java</h3>
                    <p>Java provides a comprehensive set of APIs for network communication. This section covers the basics of networking in Java, including working with sockets, URLs, and building simple client-server applications.</p>
                
                    <h4>1. Understanding Sockets</h4>
                    <p>Sockets are endpoints for communication between two machines. Java's <code>java.net</code> package provides classes to work with sockets.</p>
                    
                    <h5>Client-Server Communication Using Sockets</h5>
                    <p>Here’s how to create a simple client-server application:</p>
                    
                    <h6>Server Side</h6>
                    <pre><code>import java.io.*;
                    import java.net.ServerSocket;
                    import java.net.Socket;
                    
                    public class Server {
                        public static void main(String[] args) {
                            try (ServerSocket serverSocket = new ServerSocket(12345)) {
                                System.out.println("Server started. Waiting for connections...");
                                Socket clientSocket = serverSocket.accept();
                                System.out.println("Client connected.");
                                
                                BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
                                PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);
                                
                                out.println("Hello from server!");
                                String message = in.readLine();
                                System.out.println("Received from client: " + message);
                                
                                in.close();
                                out.close();
                                clientSocket.close();
                            } catch (IOException e) {
                                e.printStackTrace();
                            }
                        }
                    }</code></pre>
                
                    <h6>Client Side</h6>
                    <pre><code>import java.io.*;
                    import java.net.Socket;
                    
                    public class Client {
                        public static void main(String[] args) {
                            try (Socket socket = new Socket("localhost", 12345)) {
                                BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
                                PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
                                
                                System.out.println("Server response: " + in.readLine());
                                out.println("Hello from client!");
                                
                                in.close();
                                out.close();
                            } catch (IOException e) {
                                e.printStackTrace();
                            }
                        }
                    }</code></pre>
                
                    <h4>2. Working with URLs</h4>
                    <p>Java provides the <code>java.net.URL</code> class for working with URLs. You can use it to read data from a web resource:</p>
                    <pre><code>import java.io.BufferedReader;
                    import java.io.InputStreamReader;
                    import java.net.URL;
                    
                    public class URLReader {
                        public static void main(String[] args) {
                            try {
                                URL url = new URL("https://www.example.com");
                                BufferedReader in = new BufferedReader(new InputStreamReader(url.openStream()));
                                String inputLine;
                                
                                while ((inputLine = in.readLine()) != null) {
                                    System.out.println(inputLine);
                                }
                                in.close();
                            } catch (IOException e) {
                                e.printStackTrace();
                            }
                        }
                    }</code></pre>
                
                    <h4>3. Building a Simple HTTP Server</h4>
                    <p>Java can also be used to build simple HTTP servers using the <code>com.sun.net.httpserver</code> package:</p>
                    <pre><code>import com.sun.net.httpserver.HttpServer;
                    import com.sun.net.httpserver.HttpHandler;
                    import com.sun.net.httpserver.HttpExchange;
                    
                    import java.io.IOException;
                    import java.io.OutputStream;
                    import java.net.InetSocketAddress;
                    
                    public class SimpleHttpServer {
                        public static void main(String[] args) throws IOException {
                            HttpServer server = HttpServer.create(new InetSocketAddress(8000), 0);
                            server.createContext("/", new HttpHandler() {
                                @Override
                                public void handle(HttpExchange exchange) throws IOException {
                                    String response = "Hello, World!";
                                    exchange.sendResponseHeaders(200, response.getBytes().length);
                                    OutputStream os = exchange.getResponseBody();
                                    os.write(response.getBytes());
                                    os.close();
                                }
                            });
                            server.start();
                            System.out.println("Server is running on port 8000");
                        }
                    }</code></pre>
                
                    <h4>4. Handling Network Errors</h4>
                    <p>When working with network operations, handling errors gracefully is crucial:</p>
                    <pre><code>try {
                        // Network operation
                    } catch (IOException e) {
                        System.err.println("Network error: " + e.getMessage());
                    }</code></pre>
                
                    <p>By using the above techniques, you can build robust networked applications in Java that communicate over sockets, handle URLs, and build simple HTTP servers.</p>
                    `
                },
                {
                    "id": "advanced-topics",
                    "title": "Advanced Java Topics",
                    "content": `
                    <h3>Advanced Java Topics</h3>
                    <p>This section dives into more advanced topics in Java, including Reflection, Annotations, Lambda Expressions, Streams API, and Modular Programming. These concepts extend Java's capabilities and offer more flexibility and power in your programming.</p>
                
                    <h4>1. Reflection</h4>
                    <p>Reflection is a powerful feature in Java that allows programs to inspect and manipulate classes, methods, and fields at runtime.</p>
                    
                    <h5>Example: Using Reflection to Inspect a Class</h5>
                    <pre><code>import java.lang.reflect.Field;
                    import java.lang.reflect.Method;
                    
                    public class ReflectionExample {
                        public static void main(String[] args) {
                            try {
                                Class<?> cls = Class.forName("java.lang.String");
                                
                                System.out.println("Class Name: " + cls.getName());
                                
                                System.out.println("Methods:");
                                for (Method method : cls.getDeclaredMethods()) {
                                    System.out.println(method.getName());
                                }
                                
                                System.out.println("Fields:");
                                for (Field field : cls.getDeclaredFields()) {
                                    System.out.println(field.getName());
                                }
                            } catch (ClassNotFoundException e) {
                                e.printStackTrace();
                            }
                        }
                    }</code></pre>
                
                    <h4>2. Annotations</h4>
                    <p>Annotations provide metadata about the code, which can be used by the compiler or runtime to perform certain operations. They are defined with the <code>@</code> symbol.</p>
                    
                    <h5>Example: Defining and Using Custom Annotations</h5>
                    <pre><code>import java.lang.annotation.Retention;
                    import java.lang.annotation.RetentionPolicy;
                    
                    @Retention(RetentionPolicy.RUNTIME)
                    @interface MyAnnotation {
                        String value();
                    }
                    
                    @MyAnnotation("Hello World")
                    public class AnnotatedClass {
                        public static void main(String[] args) {
                            MyAnnotation annotation = AnnotatedClass.class.getAnnotation(MyAnnotation.class);
                            System.out.println("Annotation Value: " + annotation.value());
                        }
                    }</code></pre>
                
                    <h4>3. Lambda Expressions</h4>
                    <p>Lambda expressions provide a clear and concise way to represent a method interface using an expression. They are a key feature in Java 8.</p>
                    
                    <h5>Example: Using Lambda Expressions with Functional Interfaces</h5>
                    <pre><code>import java.util.Arrays;
                    import java.util.List;
                    
                    public class LambdaExample {
                        public static void main(String[] args) {
                            List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
                            
                            // Using a lambda expression to print each name
                            names.forEach(name -> System.out.println(name));
                        }
                    }</code></pre>
                
                    <h4>4. Streams API</h4>
                    <p>The Streams API, introduced in Java 8, provides a high-level abstraction for processing sequences of elements. It allows for functional-style operations on collections of elements.</p>
                    
                    <h5>Example: Using Streams to Filter and Sort Data</h5>
                    <pre><code>import java.util.Arrays;
                    import java.util.List;
                    import java.util.stream.Collectors;
                    
                    public class StreamsExample {
                        public static void main(String[] args) {
                            List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");
                            
                            // Filtering and sorting names using Streams API
                            List<String> filteredNames = names.stream()
                                .filter(name -> name.startsWith("A"))
                                .sorted()
                                .collect(Collectors.toList());
                            
                            filteredNames.forEach(System.out::println);
                        }
                    }</code></pre>
                
                    <h4>5. Modular Programming</h4>
                    <p>Modular programming, introduced in Java 9, allows you to divide your code into modules. Each module encapsulates its own data and methods, making it easier to manage and maintain large codebases.</p>
                    
                    <h5>Example: Defining a Module</h5>
                    <pre><code>module my.module {
                        exports com.example.mypackage;
                    }</code></pre>
                
                    <p>To use a module, you need to specify the modules required in your application with <code>module-info.java</code> files. Modular programming enhances encapsulation and dependency management.</p>
                    `
                },
                {
                    "id": "java-best-practices",
                    "title": "Java Best Practices",
                    "content": `
                    <h3>Java Best Practices</h3>
                    <p>Writing efficient, maintainable, and secure Java code is crucial for developing high-quality software. This section covers essential best practices, including code readability, design patterns, and performance optimization.</p>
                
                    <h4>1. Code Readability</h4>
                    <p>Readable code is easier to maintain and debug. Follow these guidelines to improve code readability:</p>
                    
                    <h5>Consistent Naming Conventions</h5>
                    <p>Use meaningful names for variables, methods, and classes. Follow standard naming conventions:</p>
                    <ul>
                        <li><strong>Classes:</strong> Use CamelCase (e.g., <code>CustomerManager</code>)</li>
                        <li><strong>Methods:</strong> Use camelCase (e.g., <code>calculateTotal</code>)</li>
                        <li><strong>Variables:</strong> Use camelCase for local variables and underscores for constants (e.g., <code>MAX_SIZE</code>)</li>
                    </ul>
                    
                    <h5>Code Formatting</h5>
                    <p>Maintain consistent indentation and spacing. Use tools like <code>Prettier</code> or <code>Checkstyle</code> to enforce formatting rules.</p>
                    
                    <h5>Comments and Documentation</h5>
                    <p>Use comments to explain complex code and document your methods with Javadoc:</p>
                    <pre><code>/**
                     * Calculates the total amount.
                     * @param items List of items
                     * @return Total amount
                     */
                    public double calculateTotal(List<Item> items) {
                        // Implementation here
                    }</code></pre>
                
                    <h4>2. Design Patterns</h4>
                    <p>Design patterns are proven solutions to common problems in software design. Some commonly used patterns include:</p>
                    
                    <h5>Singleton Pattern</h5>
                    <p>The Singleton pattern ensures that a class has only one instance and provides a global point of access to it:</p>
                    <pre><code>public class Singleton {
                        private static Singleton instance;
                        
                        private Singleton() {}
                        
                        public static Singleton getInstance() {
                            if (instance == null) {
                                instance = new Singleton();
                            }
                            return instance;
                        }
                    }</code></pre>
                    
                    <h5>Factory Pattern</h5>
                    <p>The Factory pattern provides a way to create objects without specifying the exact class of object that will be created:</p>
                    <pre><code>public abstract class Animal {
                        public abstract void makeSound();
                    }
                    
                    public class Dog extends Animal {
                        @Override
                        public void makeSound() {
                            System.out.println("Bark");
                        }
                    }
                    
                    public class Cat extends Animal {
                        @Override
                        public void makeSound() {
                            System.out.println("Meow");
                        }
                    }
                    
                    public class AnimalFactory {
                        public static Animal getAnimal(String type) {
                            if ("Dog".equalsIgnoreCase(type)) {
                                return new Dog();
                            } else if ("Cat".equalsIgnoreCase(type)) {
                                return new Cat();
                            }
                            return null;
                        }
                    }</code></pre>
                
                    <h4>3. Performance Optimization</h4>
                    <p>Optimize the performance of your Java applications by following these tips:</p>
                    
                    <h5>Efficient Data Structures</h5>
                    <p>Choose the right data structures for your needs. For example, use <code>ArrayList</code> for fast access and <code>HashMap</code> for quick lookups.</p>
                    
                    <h5>Avoid Unnecessary Object Creation</h5>
                    <p>Minimize object creation in performance-critical parts of your code. Reuse objects when possible and use primitives where appropriate.</p>
                    
                    <h5>Use Streams Wisely</h5>
                    <p>While the Streams API provides a concise way to process collections, be mindful of its impact on performance. For performance-critical tasks, prefer traditional loops.</p>
                    
                    <h5>Profiling and Monitoring</h5>
                    <p>Use profiling tools like <code>VisualVM</code> or <code>JProfiler</code> to identify and address performance bottlenecks.</p>
                    
                    <h4>4. Security Practices</h4>
                    <p>Ensure your Java code is secure by following these practices:</p>
                    
                    <h5>Validate Input</h5>
                    <p>Always validate user input to prevent injection attacks and ensure data integrity.</p>
                    
                    <h5>Use Secure APIs</h5>
                    <p>Prefer using built-in Java APIs for security-related operations, such as cryptography and secure communication.</p>
                    
                    <h5>Handle Exceptions Properly</h5>
                    <p>Handle exceptions gracefully and avoid exposing sensitive information in error messages.</p>
                    `
                },
                {
                    "id": "frameworks",
                    "title": "Popular Java Frameworks",
                    "content": `
                    <h3>Popular Java Frameworks</h3>
                    <p>Java frameworks provide pre-built structures and tools to simplify the development of enterprise applications. This section covers some of the most popular Java frameworks, including Spring, Hibernate, and Apache Struts.</p>
                
                    <h4>1. Spring Framework</h4>
                    <p>The Spring Framework is a comprehensive framework for enterprise Java development. It offers a range of features for building robust, scalable applications:</p>
                    
                    <h5>Core Features</h5>
                    <ul>
                        <li><strong>Inversion of Control (IoC):</strong> Manages object creation and dependencies through Dependency Injection (DI).</li>
                        <li><strong>Aspect-Oriented Programming (AOP):</strong> Provides support for cross-cutting concerns like logging and transaction management.</li>
                        <li><strong>Spring Boot:</strong> Simplifies the setup and development of new Spring applications with convention over configuration.</li>
                    </ul>
                    
                    <h5>Example</h5>
                    <pre><code>@Component
                public class MyService {
                    private final MyRepository myRepository;
                
                    @Autowired
                    public MyService(MyRepository myRepository) {
                        this.myRepository = myRepository;
                    }
                
                    public void performAction() {
                        // Business logic here
                    }
                }</code></pre>
                    
                    <h4>2. Hibernate</h4>
                    <p>Hibernate is an object-relational mapping (ORM) framework that simplifies database interactions by mapping Java objects to database tables:</p>
                    
                    <h5>Core Features</h5>
                    <ul>
                        <li><strong>Object-Relational Mapping (ORM):</strong> Maps Java objects to database tables, reducing the need for boilerplate SQL code.</li>
                        <li><strong>Automatic Schema Generation:</strong> Generates database schema from Java classes.</li>
                        <li><strong>Query Language:</strong> Provides HQL (Hibernate Query Language) for querying database objects.</li>
                    </ul>
                    
                    <h5>Example</h5>
                    <pre><code>@Entity
                @Table(name = "employees")
                public class Employee {
                    @Id
                    @GeneratedValue(strategy = GenerationType.IDENTITY)
                    private Long id;
                
                    @Column(name = "name")
                    private String name;
                
                    @Column(name = "salary")
                    private BigDecimal salary;
                
                    // Getters and setters
                }</code></pre>
                    
                    <h4>3. Apache Struts</h4>
                    <p>Apache Struts is a framework for building web applications in Java. It follows the Model-View-Controller (MVC) architecture and helps in creating maintainable and scalable web applications:</p>
                    
                    <h5>Core Features</h5>
                    <ul>
                        <li><strong>Model-View-Controller (MVC):</strong> Separates the application into three components: Model, View, and Controller, enhancing maintainability.</li>
                        <li><strong>Tag Libraries:</strong> Provides custom JSP tags for simplifying web application development.</li>
                        <li><strong>Validation Framework:</strong> Offers built-in validation for form inputs.</li>
                    </ul>
                    
                    <h5>Example</h5>
                    <pre><code>public class UserAction extends ActionSupport {
                    private String username;
                
                    public String execute() {
                        // Business logic here
                        return SUCCESS;
                    }
                
                    // Getter and setter for username
                }</code></pre>
                    
                    <h4>4. Comparison and Use Cases</h4>
                    <p>Each framework has its strengths and is suitable for different scenarios:</p>
                    <ul>
                        <li><strong>Spring:</strong> Ideal for building comprehensive enterprise applications with a focus on flexibility and modularity.</li>
                        <li><strong>Hibernate:</strong> Best for applications with complex database interactions requiring ORM support.</li>
                        <li><strong>Apache Struts:</strong> Suitable for traditional web applications needing MVC architecture and robust form validation.</li>
                    </ul>
                    `
                }
                // Add more topics as needed
            ]
        },

        python: {
            title: "Python Tutorial",
            topics: [
                { id: "introduction", title: "Introduction", content: "<h3>Introduction to Python</h3><p>Python is an interpreted, high-level and general-purpose programming language...</p>" },
                { id: "syntax", title: "Python Syntax", content: "<h3>Python Syntax</h3><p>Variables, Indentation, Comments, Data Structures...</p>" },
                { id: "modules", title: "Modules and Packages", content: "<h3>Modules and Packages</h3><p>Importing, Creating Modules, Exploring Standard Library...</p>" },
                // Add more topics as needed
            ]
        },
        cybersecurity: {
            title: "CyberSecurity Tutorial",
            topics: [
                { id: "intro", title: "Introduction to CyberSecurity", content: "<h3>Introduction to CyberSecurity</h3><p>CyberSecurity involves protecting systems, networks, and programs from digital attacks...</p>" },
                { id: "threats", title: "Common Threats", content: "<h3>Common Threats</h3><p>Malware, Phishing, Ransomware, etc...</p>" },
                { id: "defense", title: "Defense Mechanisms", content: "<h3>Defense Mechanisms</h3><p>Firewalls, Encryption, Antivirus Software...</p>" },
                // Add more topics as needed
            ]
        },

        html: {
            title: "HTML Tutorial",
            topics: [
                { id: "intro", title: "Introduction to HTML", content: "<h3>Introduction to HTML</h3><p>CyberSecurity involves protecting systems, networks, and programs from digital attacks...</p>" },
                { id: "threats", title: "Common Threats", content: "<h3>Common Threats</h3><p>Malware, Phishing, Ransomware, etc...</p>" },
                { id: "defense", title: "Defense Mechanisms", content: "<h3>Defense Mechanisms</h3><p>Firewalls, Encryption, Antivirus Software...</p>" },
                // Add more topics as needed
            ]
        }
        // Add more categories as needed
    },

    loadTutorialDetail: function () {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category') || 'python'; // Default category
        console.log(`Searching for category: ${category}`); // Debug statement
    
        const categoryLower = category.toLowerCase();
        const selectedTutorial = this.tutorials[categoryLower];
    
        if (selectedTutorial) {
            console.log('Tutorial found:', selectedTutorial); // Debug statement
            this.displayTutorial(selectedTutorial);
        } else {
            console.log('Tutorial not found'); // Debug statement
            this.showNotFoundMessage();
        }
    },

    
    displayTutorial: function (tutorial) {
        // Set the page title
        document.title = `TutPoint - ${tutorial.title}`;

        // Populate the sidebar with topics
        const topicList = document.getElementById('topicList');
        topicList.innerHTML = ''; // Clear existing topics

        const savedTopicId = localStorage.getItem('selectedTopicId') || tutorial.topics[0].id; // Get saved topic ID or default to the first topic

        tutorial.topics.forEach((topic) => {
            const li = document.createElement('li');
            li.classList.add('nav-item');

            const a = document.createElement('a');
            a.classList.add('nav-link');
            if (topic.id === savedTopicId) a.classList.add('active'); // Set the active class if it's the saved topic
            a.href = "#";
            a.textContent = topic.title;
            a.dataset.topic = topic.id;

            // Event listener for topic click
            a.addEventListener('click', function (e) {
                e.preventDefault();
                // Remove 'active' class from all links
                document.querySelectorAll('#topicList .nav-link').forEach(link => link.classList.remove('active'));
                // Add 'active' class to the clicked link
                this.classList.add('active');
                // Load the content
                TutPoint.loadContent(topic);

                // Save the selected topic ID to localStorage
                localStorage.setItem('selectedTopicId', topic.id);
            });

            li.appendChild(a);
            topicList.appendChild(li);
        });

        // Load the saved topic by default
        const selectedTopic = tutorial.topics.find(topic => topic.id === savedTopicId);
        this.loadContent(selectedTopic);
    },

    showNotFoundMessage: function () {
        const contentArea = document.getElementById('contentArea');
        contentArea.innerHTML = `
            <h3>Tutorial Not Found</h3>
            <p>We could not find the tutorial you were looking for.</p>
        `;
    
        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Optional: adds a smooth scrolling effect
        });
    },


    loadContent: function (topic) {
        const contentArea = document.getElementById('contentArea');
        contentArea.innerHTML = topic.content;

        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Optional: adds a smooth scrolling effect
        });

        // After loading the content, add the copy button to each code block
        const codeBlocks = contentArea.querySelectorAll('pre');
        codeBlocks.forEach((codeBlock) => {
            const codeContainer = document.createElement('div');
            codeContainer.classList.add('code-container');
            codeBlock.parentNode.insertBefore(codeContainer, codeBlock);
            codeContainer.appendChild(codeBlock);

            // Create and append the copy button
            const copyButton = document.createElement('button');
            copyButton.classList.add('copy-btn');
            copyButton.innerHTML = '<img src="assets/copy-file-icon.svg" alt="Copy" class="copy-icon">';
            copyButton.addEventListener('click', function () {
                const codeText = codeBlock.textContent;
                const tempTextArea = document.createElement('textarea');
                tempTextArea.value = codeText;
                document.body.appendChild(tempTextArea);
                tempTextArea.select();
                document.execCommand('copy');
                document.body.removeChild(tempTextArea);

                // Optionally, show a copied message
                copyButton.innerHTML = 'Copied!';
                setTimeout(() => {
                    copyButton.innerHTML = '<img src="assets/copy-file-icon.svg" alt="Copy" class="copy-icon">';
                }, 2000);
            });

            codeContainer.appendChild(copyButton);
        });
    }
};

// Call the function when the document is ready
document.addEventListener('DOMContentLoaded', function () {
    TutPoint.loadTutorialDetail();
});

