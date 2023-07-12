var para = document.getElementsByTagName('p')[0]
var bb = document.getElementsByTagName('body')[0]
var msg = document.getElementById('doc')

// document.write(`Paragraph's inner HTML: ${para.innerHTML}`)

para.style.color = ('yellow')
bb.style.background = ('slategray')
msg.style.background = ('lightgray')

var sel = document.querySelector('p strong')
sel.style.textDecoration = ('underline')