import java.util.Scanner;

public class June29 {

////    Let's start with the psvm (main) method.
////    for now, public and static are going to stay as is
////    the 'void' can be interchanged depending on what is going to be
////    returned
////    'main' is the name of the method
////    String[] args are the potential params getting passed into the
////    main method.
//        public static void main(String[] args) {
//            // System.out.println is Javas versions of console logging
//            // In Java, there are different types of 'console
//            // logging/system.print' because Java is strict, it needs to
//            // know what kind of data it's going to be printing out
//            System.out.println("hello, World!");
//
//            // We use Scanner to collect user input. again there are
//            // different methods available via Scanner that allow us to
//            // pull certain information from user input or collect
//            // information in a certain way (ex: .next(), .nextln(),
//            // .nextInt(), etc.
//            // we are saving our new Scanner instance to a variable
//            // called sc, so going forward we only have to reference sc.
//            Scanner sc = new Scanner(System.in);
//            // this is a simple print to the system that will prompt the
//            // user to type something into the console.
//            System.out.println("What's your name?");
//            // save the user's input into a String variable called
//            // userInput
//            String userInput = sc.next();
//
//            // Print out the results of invoking customGreeting and
//            // passing in the userInput into that method.
//            System.out.println(customGreeting(userInput));
//        }
//
//
//        // TODO: Create a new method that returns a string.
//
//        // this creates a brand new method with a name of customString
//        // () that will return a string and accepts no parameters.
//        public static String customString() {
//            // we are creating a brand new String variable that's
//            // holding the value of "what's up";
//            String customString = "What's Up";
//
//            // this method is using the 'return' keyword to return the
//            // value of customString
//            return customString;
//        }
//
//
//        // TODO: Create a new method that accepts a String and returns
//        //  that String.
//
//
//        // this creates a new method that will accept a username as a
//        // String data type and return a String
//        public static String customGreeting(String username) {
//            return "Welcome " + username + "!!";
//        }
        
        
//        -------- EXTRA EXERCISES -------
//         TODO: Create a method that accepts a movieTitle and the year
//          that movie was made and returns a sentence about that Movie
//          using the two arguments.

////          solution
//        public static void main(String[] args) {
//            Scanner scan = new Scanner(System.in);
//            System.out.println("What's your favorite movie?");
//            String movieTitle = scan.nextLine();
////            System.out.println(movieTitle);
//            System.out.println("When was your favorite movie released?");
//            int movieYear = scan.nextInt();
//            System.out.println(returnMovie(movieTitle, movieYear));
//        }
//
//        public static String returnMovie(String movie, int yr){
//            String str = "My favorite movie: " + movie + " came out in " +
//                                 "the year: " + yr;
//            return str;
//        }

    
}
