let inputBox = document.getElementById("input-box");
const searchBtn = document.getElementById("searchButton");
let list = document.getElementById("meaning-container")

searchBtn.addEventListener("click", async () => {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

  let word = inputBox.value;
  const url =
    `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${word}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7275b10851mshd3579f9bbf6eef7p15e35cjsn43f30971dfec",
      "X-RapidAPI-Host": "dictionary-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    let answer = result.definition
    console.log(answer)
    let start_index = answer.indexOf("1.")
    let end_index = answer.indexOf(". O")
    if (end_index == -1) {
        answer = answer.replace("1.", "")
        let end_index = answer.indexOf(".")

        answer = answer.substring(0, end_index);
    }
    else{
        answer = answer.substring(start_index+3, end_index);
    }
    let mean = answer.split(';');
    mean.forEach((meaning)=>{
        let li = document.createElement("li");
        li.innerHTML = meaning;
        list.appendChild(li)

    })
    console.log (mean);
  } catch (error) {
    console.error(error);
  }
});
