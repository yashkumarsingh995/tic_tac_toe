function generate_count(arr,weight_arr_element,element)
{
  for(let i=1;i<=3;i++)
  {
    for(let j=1;j<=3;j++)
    { 
          
            if((arr[i-1][j-1]==element && arr[i][j]==element && arr[i+1][j+1]==element) 
            || (arr[i-1][j]==element && arr[i][j]==element && arr[i+1][j]==element)
            ||(arr[i][j-1]==element && arr[i][j]==element && arr[i][j+1]==element)
            ||(arr[i-1][j+1]==element && arr[i][j]==element && arr[i+1][j-1]==element))
            { console.log(i,j)
              weight_arr_element[i][j]=1;
            }
          
    }
  }
  console.log(weight_arr_element);
  return weight_arr_element;
}



function find_max_count(weight_arr_element)
{
  let max=-1000;
  
  for(let i=1;i<=3;i++)
  {
    for(let j=1;j<=3;j++)
    {
      if(weight_arr_element[i][j]>=max)
      {
        max=weight_arr_element[i][j];
      }
    }
  }
  
  return max;
}



function check_validation(arr,element1,element2)
{
  let count_element1=0,count_element2=0;
  
  for(let i=1;i<=3;i++)
  {
    for(let j=1;j<=3;j++)
    {
      if(arr[i][j]==element1)
      {
        count_element1+=1;
      }
      else if(arr[i][j]==element2)
      {
        count_element2+=1;
      }
      else
      { console.log('hii')
        return 3;
      }
    }
  }
  if((count_element1==5 && count_element2==4)||(count_element1==4 &&count_element2==5))
  {
    return 1;
  }
  else
  {
    return 2;
  }
}



function tic_tac_toe(arr)
{
  //var arr=[[-1,-1,-1,-1,-1],[-1,1,0,1,-1],[-1,1,0,0,-1],[-1,0,0,0,-1],[-1,-1,-1,-1,-1]];
  
   
  var check_validation_result=check_validation(arr,1,0);
  
  if(check_validation_result==1)
  {
  
  var weight_arr_of_1=[];
  var weight_arr_of_0=[];
  
  
  for(let i=-1;i<=3;i++)
  { weight_arr_of_0.push([]);
    weight_arr_of_1.push([]);
    for(let j=-1;j<=3;j++)
    {
      weight_arr_of_0[i+1].push(0);
      weight_arr_of_1[i+1].push(0);
    }
  }
  
  weight_arr_of_1=generate_count(arr,weight_arr_of_1,1);
  weight_arr_of_0=generate_count(arr,weight_arr_of_0,0);
  
  var count_max_of_1=find_max_count(weight_arr_of_1,1);
  var count_max_of_0=find_max_count(weight_arr_of_0,0);
  
  if(count_max_of_0==count_max_of_1)
  {
    return 2;
  }
  if((count_max_of_0>count_max_of_1)|| (count_max_of_0<count_max_of_1))
  {
    return 1;
  }
  }
  else
  {
    return check_validation_result;
  }

 
}

function main(){
  
  
  var a=document.getElementById('number').value;
  var arr=[[-1,-1,-1,-1,-1],[-1,a[0],a[1],a[2],-1],[-1,a[3],a[4],a[5],-1],[-1,a[6],a[7],a[8],-1],[-1,-1,-1,-1,-1]];
  
  var result_final=tic_tac_toe(arr);
  var opt=document.getElementById('options');
  if(result_final==1)
  {
    var d=document.createElement('h2');
    d.className='d';
    d.innerText='Either of one is winner or ,the match ties';
    
  }
  else if(result_final==2)
  {
    var d = document.createElement('h2');
    d.className = 'd';
    d.innerText = 'invalid game!!!';
  }
  else 
  {
    var d = document.createElement('h2');
    d.className = 'd';
    d.innerText = 'Incomplete move!!';
  }
  opt.appendChild(d);
}


