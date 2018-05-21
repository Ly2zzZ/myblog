import { Drawback } from './js.js'
import { Drawname } from './Drawname.js'

export function donghua()
{
	  document.getElementById("first_in").style.width="100%";
      document.getElementById("first_in").style.opacity=1;

      Drawback();

      const shutter = document.querySelector('.shutter');

      setTimeout(function(){

      let right=document.getElementsByClassName("right_in");
      for (let i=0;i<right.length;i++)
      {
        right[i].style.right="10%";
        right[i].style.opacity= 1;
      }

      let left=document.getElementsByClassName("left_in");
      for (let i=0;i<left.length;i++)
      {
        left[i].style.left="10%";
        left[i].style.opacity= 1;
      }

      Drawname();

      if (shutter!=null)
      shutter.remove();
      if (document.getElementById("luoyu_svg")!=null)
          document.getElementById("luoyu_svg").remove();
       }, 1500);

      shutter.classList.toggle('open');
}