package Practice;
import java.util.*;

class Solution {
    public boolean isValid(String s) 
    {
        Stack <Character> myStack = new Stack<>();
        for (int i = 0 ; i < s.length(); i++)
        {
            char c = s.charAt(i);
            if( c == '(' || c == '{' || c == '[') 
            {
                myStack.push(c);
            } else {
                if(myStack.isEmpty() == true)
                    return false;
        
                char checkPeek = myStack.peek();
        
                if( (c == ')' && checkPeek == '(')
                || (c == '}' && checkPeek == '{')
                || (c == ']' && checkPeek == '[')) 
                {
                    myStack.pop();    
                } else {
                    return false;
                }
            }
        }
        return myStack.isEmpty();    
    }
    
    public static void main(String[] args) 
    {
    	Scanner sc = new Scanner(System.in);
    	String c;
    	System.out.println("Text c: ");
    	c = sc.next();
    	
    }
}
