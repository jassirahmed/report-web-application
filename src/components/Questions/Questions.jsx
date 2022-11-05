import React from 'react'
import { Box, Typography } from '@mui/material'

export default function Questions() {
    const QuesitonAnswers = [
        {
            Q: "Q #1) Write a function that will request for names and ages using promise factory and then will join them by index to display name and age respective index from an array",
            ans: `
// [ ' a ' , ' A ' , ' C ' , ' Z ' , ' b ' , ' B ' , ' d ' , ' E ' , ' z ' ] 
// Output = a , C , Z , b , d , E
    class Solutions (
                                    
    char ch [ ] [ ' a ' , ' A ' , ' C ' , ' Z ' , ' b ' , ' B ' , ' d ' , ' E ' , ' z ' ] ;
    removeDuplicates ( ch )
                                    
    }

public void removeDuplicates ( ch ) {
                                
int n = ch.hength ;
int index = 0 ;
for ( int i = 0 ; i < n ; i ++ ) {
for ( int j - 1 ; j < n ; j ++ ) {
 if ( Ich [ i ] .equalsIgnoreCase ( ch [ j ] ) ) {
  ch[index++] = ch[i] ; }
  }
                                  
 }
                                 
}
                                
}


// Thread ,
class MainActivity extends Appcompactivity {
@override 
protected void onCreate ( Bundle saveInstance ) {
 super.onCreate(saveInstance) ;\
                             
 btn.setOnClickListener ( this new OnClickListener ( ) {
  @override
    public void onClick ( ) {
    Handler handler . = new Handler ( ) {
        @override
        public void run ( ) {
        startService(new AudioForeground())
  //}
 //}
//}
class AudioForeground extends service {
AudioForeground() {

}
                            
@override
void startCommand ( Intent intent , Int flag ) { 

  }
}


//create dynamic UI based on backend API response
//Create one form
//2 Edit Text
//1 Button
[
    data{
        key = 1{
            `,
            result: 'Right',
            time: '20 min / 10 sec'
        },
        {
            Q: 'Q #2) How to get the matching characters in a string?',
            ans: `
HashMap<Character, Integer> mp = new HashMap<> (); 
    for (int j = 0; j<text.length (); j++) { 
        char ch = text.charAt(j); 
            if(mp.containsKey(ch)){ 
                int cnt = mp.get(ch);
               mp.put(ch, ++cnt);
            }else{ 
                mp.put(ch, 1); 
            } 
    } 
    Set<Character> charct = map.keySet(); 
    for (Character ch: charct){
        int c= mp.get(ch);
        if(c>1){ System.out.println(ch+ " - " + c); 
    } 
}`,
            result: 'Right',
            time: '10 min/10 sec'
        },
        {
            Q: 'Q #3) How to calculate the number of numerical digits in a string?',
            ans: `
package introduction; 
public class GG { 
    
    public static void main(String[] args) { 
        // TODO Auto-generated method stub 
        String str = "TESTu45"; 
          str=str.replaceAll("\\d", ""); 
          int l = str.length(); 
          System.out.println("The length of the string without digit is:" + l); 
        } 
    }
            `,
            result: 'Right',
            time: '12 min / 10 sec'
        }
    ]
    return (
        <Box p='40px' pb='0px'>
            <Box fontSize='40px' fontWeight='700' textAlign='left' color='#130D3C'>Questions</Box>
            {QuesitonAnswers.map((item, i) => (
                <Box key={i} pb='20px'>
                    <Typography textAlign='left' color='#344CB6' fontSize='14px' py='15px'>
                        {item.Q}
                    </Typography>
                    <Box p="15px 20px" bgcolor='#E2E2E2'>
                        <Box bgcolor='#0A081D' borderRadius='15px' boxShadow='0px 2px 20px #9891C61A'>
                            <Box textAlign='left' p='20px' color='#FFFFFF'>
                                <pre>{item.ans}</pre>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='flex' justifyContent='space-between' mt='10px'>
                        <Box className='flex' fontSize='12px' color='#777FAE'>Answer from candidate:
                            <Box ml='3px' color='#00B5A2' fontWeight={600}>{item.result}</Box>
                        </Box>
                        <Box className='flex' fontSize='10px'>
                            <Box width='25px' height='15px' borderRight='1px solid #33333340' pr='10px'>
                                <img src="/images/check.png" style={{ width: '100%', height: '100%' }} alt="" />
                            </Box>
                            <Box color='#130D3C' pl='10px'>Time taken : {item.time}</Box>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Box>
    )
}
