export default function (code) {
	let opretors = ["=","+","-","~",">","<","&","|","*","/","%","^" ]
	let keywords = ["abstract", "arguments", "await*", "boolean", "break", "byte", "case", "catch", "char", "class*", "const", "continue", "debugger", "default", "delete", "do", "double", "else", "enum*", "eval", "export*", "extends*", "false", "final", "finally", "float", "for", "function", "goto", "if", "implements", "import*", "in", "instanceof", "int", "interface", "let*", "long", "native", "new", "null", "package", "private", "protected", "public", "return", "short", "static", "super*", "switch", "synchronized", "this", "throw", "throws", "transient", "true", "try", "typeof", "var", "void", "volatile", "while", "with", "yield"]
	let globals = ["Array", "Date","Math","Object","Number", "String"]
	
	const match = {
		opretor: {
			priority: 0,
			regex: new RegExp("(" + opretors.map(v => "\\" + v).join("|") + ")+", "g"),
			style: "§7"
		},
		int: {
			priority: 1,
			regex: /\b(?<!§)([\d_]+)\b(?!\.)/g,
			style: "§g"
		},
		float: {
			priority: 2,
			regex: /\b(?<!§)(\d*\.\d*)\b(?!\.)/g,
			style: "§g"
		},
		class: {
			priority: 3,
			regex: /\b(?<!§)([A-Z]\w*)\b/g,
			style: "§b"
		},
		global: {
			priority: 4,
			regex: new RegExp("\\b(" + globals.join("|") + ")\\b", "g"),
			style: "§3"
		},
		parameter: {
			priority: 5,
			regex: /\b(?<!§)(?<=function[\s\w]*?\()(.*?)(?=\))/g,
			style: "§7"
		},
		variable: {
			priority: 6,
			regex: /\b(?<!§)(?<=(?:var|let|const)\s*?)(\w+)\b/g,
			style: "§7"
		},
		keyword: {
			priority: 7,
			regex: new RegExp("\\b(" + keywords.join("|") + ")\\b", "g"),
			style: "§c"
		},
		method: {
			priority: 8,
			regex: /\b(?<!§)(\.\w+?)\b/g,
			style: "§6"
		},
		string: {
			priority: 9,
			regex: /(?<!\\)(?:\\\\)*((['"`\/]).*?(?<!\\)(?:\\\\)*\2)/g,
			style: "§2"
		},
		comment: {
			priority: 10,
			regex: /(\/\/.*)/g,
			style: "§8"
		},
		multi_line_comment: {
			priority: 11,
			regex: /(\/\*(?:.|[\n\r])*?\*\/)/g,
			style: "§8"
		}
	}
	
	for (let key in match) {
		let data = match[key]
		code = code.replaceAll(data.regex, (match,value) => data.style + value.replaceAll(/§./g, "") + "§r" )
	}
	
	return code
}
