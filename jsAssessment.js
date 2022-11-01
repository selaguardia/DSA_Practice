
let strings = [
  'This is **bold** text.',
  'This is __underlined__ text.',
  'This is ~~strikethrough~~ text.',
  'This is *italic* text.',
  'This is a hyperlink: https://www.google.com/',
  'This is an email: leeroy.jenkins@gmail.com'
];





const parseMarkdown = (markdownString) => {
  const bold = /\*\*(.*)\*\*/gim
  const underline = /\_\_(.*)\_\_/gim
  const strikethrough = /\~\~(.*)\~\~/gim
  const italic = /\*(.*)\*/gim
  const hyperlink = /((http|https|ftp):\/\/[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/g
  const email =/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi
	
  const htmlEl = markdownString
		.replace(bold, '<strong>$1</strong>')
		.replace(underline, '<u>$1</u>')
		.replace(strikethrough, '<s>$1</s>')
		.replace(italic, '<em>$1</em>')
		.replace(hyperlink, '<a href="$1" target="_blank">$1</a>')
		.replace(email, '<a href = "mailto: $1">$1</a>')

	return htmlEl.trim()
}

strings.forEach((element)=> {
  console.log(parseMarkdown(element))
})