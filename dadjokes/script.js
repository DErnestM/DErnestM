const jokes = {
  "0": "Why was the math book sad? It had too many problems.",
  "1": "Why couldn't the bicycle stand up by itself? It was two-tired.",
  "2": "Why did the tomato turn red? Because it saw the salad dressing!",
  "3": "Why was the computer cold? Because it left its Windows open.",
  "4": "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "5": "Did you hear about the cheese factory that exploded? There was nothing left but de-brie.",
  "6": "Why couldn't the leopard play hide and seek? Because he was always spotted.",
  "7": "Why did the cookie go to the doctor? Because it was feeling crumbly.",
  "8": "Why did the cow go to outer space? To see the moooon!",
  "9": "Why was the cat sitting on the computer? It wanted to keep an eye on the mouse.",
  "10": "Why was the math teacher wearing sunglasses? Because his problems were complex.",
  "11": "Why was the belt arrested? For holding up a pair of pants!",
  "12": "Why did the robot go to the bar? For oil and lubrication.",
  "13": "Why did the cookie go to therapy? It was feeling crumbly.",
  "14": "Why couldn't the singer open the juice bottle? Because it was sealed with a capitol 'P'!",
  "15": "Why did the chicken go to the seance? To talk to the other side.",
  "16": "Why did the ant go to the bar? For a quick ANTeaser!",
  "17": "Why did the gym close down? Because it just didn't work out.",
  "18": "Why was the math book sad? It had too many problems.",
  "19": "Why couldn't the bicycle stand up by itself? It was two-tired.",
  "20": "Why did the tomato turn red? Because it saw the salad dressing!",
  "21": "Why was the computer cold? Because it left its Windows open.",
  "22": "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "23": "Did you hear about the cheese factory that exploded? There was nothing left but de-brie.",
  "24": "Why couldn't the leopard play hide and seek? Because he was always spotted.",
  "25": "Why did the cookie go to the doctor? Because it was feeling crumbly.",
  "26": "Why was the math book sad? It had too many problems.",
  "27": "Why couldn't the bicycle stand up by itself? It was two-tired.",
  "28": "Why did the tomato turn red? Because it saw the salad dressing!",
  "29": "Why was the computer cold? Because it left its Windows open.",
  "30": "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "31": "Did you hear about the cheese factory that exploded? There was nothing left but de-brie.",
  "32": "Why couldn't the leopard play hide and seek? Because he was always spotted.",
  "33": "Why did the cookie goto the doctor? Because it was feeling crumbly.",
  "34": "Why was the computer cold? Because it left its Windows open.",
  "35": "Why was the math book sad? It had too many problems.",
  "36": "Why couldn't the bicycle stand up by itself? It was two-tired.",
  "37": "Why did the tomato turn red? Because it saw the salad dressing!",
  "38": "Why was the computer cold? Because it left its Windows open.",
  "39": "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "40": "Did you hear about the cheese factory that exploded? There was nothing left but de-brie.",
  "41": "Why couldn't the leopard play hide and seek? Because he was always spotted.",
  "42": "Why did the cookie go to the doctor? Because it was feeling crumbly.",
  "43": "Why was the math book sad? It had too many problems.",
  "44": "Why couldn't the bicycle stand up by itself? It was two-tired.",
  "45": "Why did the tomato turn red? Because it saw the salad dressing!",
  "46": "Why was the computer cold? Because it left its Windows open.",
  "47": "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "48": "Did you hear about the cheese factory that exploded? There was nothing left but de-brie.",
  "49": "Why couldn't the leopard play hide and seek? Because he was always spotted.",
  "50": "Why was the math book sad? It had too many problems.",
};



const btn = document.getElementById("btn")


function getQuote(){
  const quote = document.getElementById("quote");
  
  let number =  Math.floor(Math.random() * 49);
  console.log(number)

  quote.innerText = jokes[number] 
}

btn.addEventListener("click", getQuote)