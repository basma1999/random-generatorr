function quotes() {
    var quoteContent = ['"Be yourself; every else is already taken."', '"A room without books is like a body without a soul."', '"you only live once, but if you do it right, once is enough."', '"Be the change that you wish to see in the world."'];
    var quouteWriter = ['-- Oscar Wilde', '-- Marcus Tulius cicero', '-- mae West', '-- Mahatma Gandhi'];
    

    var number = Math.floor(Math.random() * quoteContent.length)
    document.getElementById('quotetext').innerHTML= quoteContent[number];
    document.getElementById('text').innerHTML=quouteWriter[number]
    
        

    
    

}
