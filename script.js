const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here
const search_btn = document.querySelector("#search")
const reset_btn = document.querySelector("#reset")

const para = document.querySelector("#text")
const Alltext = para.innerText
const newpara =  document.createElement('p')


  let search_state = true
 search_btn.onclick = () =>{

  if(search_state){
  for(let i= 0;i<Alltext.length;)
  {
    
    let word= ""
    let j=0
    while(Alltext[i+j]!=" " && i+j<Alltext.length){
      word+=Alltext[i+j]
      j++
    }
    if(j>length.value)
    {
      const highlight = document.createElement("span")
      highlight.style.color = color.value
      highlight.innerText  = word
      const space = document.createTextNode(" ")
      newpara.appendChild(highlight)
      newpara.appendChild(space)
      
    }
    else{
      let normalword = document.createTextNode(word)
      if(!(i+j==Alltext.length-1)){
        normalword = document.createTextNode(word+" ")
      } 
      
      newpara.appendChild(normalword)
    }
    i+=j+1
  }
  document.body.replaceChild(newpara,para)
  search_state = false

  }

}

reset_btn.onclick = () =>{
 
  if(!search_state){
    document.body.replaceChild(para,newpara)
  newpara.innerText = ""
  length.value =  5
  color.value  = "#FF0000"
  search_state = true
  }
  
}


let btn_state = true
btn_toggle.onclick = () => {
if(btn_state)
{
   btn_toggle.innerText = "Show Author"
  author.innerText  = String(630610726-(-1*length.value))
  btn_state = false
}
else{
  btn_toggle.innerText = "Show Calculation"
  author.innerText  = "630610726 CHANCHAI CHAISALEE"
  btn_state =true
}
 
 
}


