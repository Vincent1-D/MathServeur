import Controller from './Controller.js';
import * as mathUtilities from '../mathUtilities.js';
export default class MathsController extends Controller {
    constructor(HttpContext) {
        super(HttpContext);
    }
    get(){
        if(this.HttpContext.path.params.op==' '){
            
            let x=this.HttpContext.path.params.x;
            let y=this.HttpContext.path.params.y;
            x=parseInt(x);
            y=parseInt(y);
            let result;
            let erreur;
            if(isNaN(x)||isNaN(y)){
                result=mathUtilities.NaNCheck(x,y);
            }
            else{
                result=x+y;
            }

            
            this.HttpContext.response.JSON({...this.HttpContext.path.params,value:result});
        }
        if(this.HttpContext.path.params.op=='-'){
            let x=this.HttpContext.path.params.x;
            let y=this.HttpContext.path.params.y;
            x=parseInt(x);
            y=parseInt(y);
            let result;
            if(isNaN(x)||isNaN(y)){
                result=mathUtilities.NaNCheck(x,y);
            }
            else{
             result=x-y;
            }

            
            this.HttpContext.response.JSON({...this.HttpContext.path.params,value:result});
        }
        if(this.HttpContext.path.params.op=='*'){
            let x=this.HttpContext.path.params.x;
            let y=this.HttpContext.path.params.y;
            x=parseInt(x);
            y=parseInt(y);
            let result;
            if(isNaN(x)||isNaN(y)){
                result=mathUtilities.NaNCheck(x,y);
            }
            else{
             result=x*y;
            }

            
            this.HttpContext.response.JSON({...this.HttpContext.path.params,value:result});
        }
        if(this.HttpContext.path.params.op=='/'){
            let x=this.HttpContext.path.params.x;
            let y=this.HttpContext.path.params.y;
            x=parseInt(x);
            y=parseInt(y);
            let result;
            if(isNaN(x)||isNaN(y)){
                if(y==0){
                    if(x==0){
                        result=NaN;
                    }
                    else{
                    result='infinity'                        
                    }

                }
                else{
                    result=mathUtilities.NaNCheck(x,y);                    
                }

            }
            else{
                 result=x/y;
            }

            
            this.HttpContext.response.JSON({...this.HttpContext.path.params,value:result});
        }
        if(this.HttpContext.path.params.op=='%'){
            let x=this.HttpContext.path.params.x;
            let y=this.HttpContext.path.params.y;
            x=parseInt(x);
            y=parseInt(y);
            let result;
            if(isNaN(x)||isNaN(y)){
                result=mathUtilities.NaNCheck(x,y);
            }
            else{
                if(y==0){
                    if(x==0){
                        result=NaN;
                        
                    }
                    else{
                         result=NaN;                   
                    }

                }
                result=x%y;
            }

            
            this.HttpContext.response.JSON({...this.HttpContext.path.params,value:result});
        }
        if(this.HttpContext.path.params.op=='!'){
            let n=this.HttpContext.path.params.n;
            n=parseInt(n);
            let result
            if(isNaN(n) || n==0){
                result='n parameter is not a number'
            }
            else{
             result=mathUtilities.factorial(n);                
            }

            
            this.HttpContext.response.JSON({...this.HttpContext.path.params,value:result});
        }
        if(this.HttpContext.path.params.op=='p'){
            let n=this.HttpContext.path.params.n;
            let result
            n=parseInt(n);
            if(isNaN(n) || n==0){
                result='n parameter is not a number';
        
            }else{
                if(!Number.isInteger(n)){
                    result='n must be an integer';
                }
                else{
                    result=mathUtilities.isPrime(n);  
                }

            

            if(result==false){
                result='false';
            }
            this.HttpContext.response.JSON({...this.HttpContext.path.params,value:result});
        }
        }
        if(this.HttpContext.path.params.op=='np'){
            let n=this.HttpContext.path.params.n;
            n=parseInt(n);
            let result
            if(isNaN(n)){
                result='n parameter is not a number'            
            }
            else{
             result=mathUtilities.findPrime(n);                
            }

            this.HttpContext.response.JSON({...this.HttpContext.path.params,value:result});
        }
        if (this.HttpContext.path.params.op == '?') {
            // Instead of trying to redirect from the server, just return a message
            this.HttpContext.response.JSON({ helpUrl: '../pageAide.html' });
        }
        
    }
}