var div = document.getElementById("countdown");
var count = 10;
document.body.append(div)
setTimeout(()=>{
  div.innerHTML = count;
  count = count - 1;
  setTimeout(()=>{
    div.innerHTML = count;
    count = count - 1;
    setTimeout(()=>{
      div.innerHTML = count;
      count = count - 1;
      setTimeout(()=>{
        div.innerHTML = count;
        count = count - 1;
        setTimeout(()=>{
          div.innerHTML = count;
          count = count - 1;
          setTimeout(()=>{
            div.innerHTML = count;
            count = count - 1;
            setTimeout(()=>{
              div.innerHTML = count;
              count = count - 1;
              setTimeout(()=>{
                div.innerHTML = count;
                count = count - 1;
                setTimeout(()=>{
                  div.innerHTML = count;
                  count = count - 1;
                  setTimeout(()=>{
                    div.innerHTML = count;
                    count = count - 1;
                    setTimeout(()=>{
                      div.innerHTML = "Happy Independence Day";
                    },1000)
                  },1000)
                },1000)
              },1000)
            },1000)
          },1000)
        },1000)      
      },1000)
    },1000)
  },1000)  
},1000)