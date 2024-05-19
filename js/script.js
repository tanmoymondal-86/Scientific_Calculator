var screen=document.querySelector('#screen')
var working=document.querySelector('#working');
var btn=document.querySelectorAll('.btn');
var btn_revin=document.querySelectorAll('.revin');
working.value=screen.value;
btn_revin.value=''
console.log(working.value);
console.log(btn_revin.value);
var isHyperbolic=false;
const operators = ['/', '*', '**', '**2', '**3', '/100'];
const restrict = ['+', '÷', '×', '^', 'x²', 'x³', '%'];

function changeTrigFunctions()
{
    if(isHyperbolic)
    {
        document.getElementById("sinButton").setAttribute("onclick", "sinh(); playClickSound()");
        document.getElementById("sinButton").innerHTML="sinh";

        document.getElementById("cosButton").setAttribute("onclick", "cosh(); playClickSound()");
        document.getElementById("cosButton").innerHTML="cosh";

        document.getElementById("tanButton").setAttribute("onclick", "tanh(); playClickSound()");
        document.getElementById("tanButton").innerHTML="tanh";
    }
    else
    {
        document.getElementById("sinButton").setAttribute("onclick", "sin(); playClickSound()");
        document.getElementById("sinButton").innerHTML="sin";

        document.getElementById("cosButton").setAttribute("onclick", "cos(); playClickSound()");
        document.getElementById("cosButton").innerHTML="cos";

        document.getElementById("tanButton").setAttribute("onclick", "tan(); playClickSound()");
        document.getElementById("tanButton").innerHTML="tan";
    }    
}

function playClickSound()
{
    var audio=document.getElementById("clickSound");
    audio.play();
}

function playEqualSound()
{
    var audio=document.getElementById("equalSound");
    audio.play();
}

for(item of btn)
{
    item.addEventListener('click',(event)=>{
        event.preventDefault();
        let btn_text=event.target.innerText;
        let btn_input=event.target.innerText;
        if(btn_text=='=')
        {
            // console.log(working.value);
            // console.log(screen.value);
            screen.value='';
            if(btn_revin.value.charAt(0)=='√')
            {
                btn_revin.value=btn_revin.value.slice(1);
                if(btn_revin.value.charAt(0)=='-')
                {
                    btn_input='undefined';
                }
                else 
                {
                    btn_input=Math.sqrt(parseInt(btn_revin.value));
                }
                btn_revin.value='';
                btn_text=btn_input;
            }
            else if(btn_revin.value.charAt(0)=='∛')
            {
                btn_revin.value=btn_revin.value.slice(1);
                console.log(btn_revin.value);
                btn_input=Math.cbrt(parseInt(btn_revin.value));
                btn_revin.value='';
                console.log(btn_input);
                btn_text=btn_input;
            }
            else
            {
                screen.value=eval(working.value);
                btn_input=btn_text='';
            }
        }
        if(btn_revin.value.charAt(0)=='√'|| btn_revin.value.charAt(0)=='∛')
        {
            if(restrict.includes(btn_text))
                return;
            btn_revin.value+=btn_text;
            screen.value+=btn_text;
            console.log(btn_revin.value);
            return;
        }
        if(btn_text=='×')
        {
            btn_text='×';
            btn_input='*';
        }
        if(btn_text=='÷')
        {
            btn_text='÷';
            btn_input='/';
        }
        if(btn_text=='%')
        {
            btn_text='%';
            btn_input='/100';
        }
        if(btn_text=='x²')
        {
            btn_text='^(2)';
            btn_input='**2';
        }
        if(btn_text=='x³')
        {
            btn_text='^(3)';
            btn_input='**3';
        }
        if(btn_text=='∛')
        {
            btn_revin.value='∛';
            btn_text='∛';
        }
        if(btn_text=='√')
        {
            btn_revin.value='√';
            btn_text='√';
        }
        if(btn_text=='^')
        {
            btn_text='^';
            btn_input='**';
        }
        if(btn_text=='exp')
        {
            btn_text='.e+';
            btn_input='*10**';
        }
        if (operators.includes(btn_input) && screen.value.charAt(0)=='')
        {
        screen.value+='';
        working.value+='';
        }
        else
        {
        screen.value+=btn_text;
        working.value+=btn_input;
        }
        
    });


    function sin()
    {
        working.value=screen.value=Math.sin(screen.value);
    }
    function cos()
    {
        working.value=screen.value=Math.cos(screen.value);
    }
    function tan()
    {
        working.value=screen.value=Math.tan(screen.value);
    }
    function log()
    {
        working.value=screen.value=Math.log10(screen.value);
    }
    function ln()
    {
        working.value=screen.value=Math.log(screen.value);
    }
    function pi()
    {
        working.value=screen.value=3.1415926535897932384626433832795;
    }
    function e()
    {
        working.value=screen.value=2.7182818284590452353602874713527;
    }
    function fact()
    {
        var f=1
        var num=screen.value;
        
        if(num<0)
        {
            working.value=screen.value='invalid input';
        }
        else
        {
            for(let i=1; i<=num; i++)
            {
                f=f*i;
            }
            working.value=screen.value=f;   
        }
        
    }
    function inv()
    {
        working.value=screen.value=screen.value**(-1);
    }
    function modulus()
    {
        working.value=screen.value=Math.abs(screen.value);
    }
    function approx()
    {
        working.value=screen.value=Math.round(screen.value);
    }
    function negate()
    {
        working.value=screen.value=-(screen.value);
    }
    function hyp()
    {
        isHyperbolic=!isHyperbolic;
        changeTrigFunctions();
    }
    function sinh()
    {
        working.value=screen.value=Math.sinh(screen.value);
    }
    function cosh()
    {
        working.value=screen.value=Math.cosh(screen.value);
    }
    function tanh()
    {
        working.value=screen.value=Math.tanh(screen.value);
    }
}
