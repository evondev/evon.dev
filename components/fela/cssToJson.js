/* eslint-disable no-undef */
function cssToJson(cssString) {
	try {
		let regCssString = `{\n\t${cssString.trim()}\n}`
			.replace(/}/g, "\n}\n")
			.replace(/"/g, `'`)
			.replace(/:\s*{/g, "{")
			.replace(/\};/g, "}")
			.replace(/animation-name/g, "animationName")
			.replace(/debug/g, "className")
			.replace(/(\w|'|\)|%)(?!;)$/gm, (s) => `${s};`)
			.replace(/\n/g, "")
			.replace(/\*\//g, "*/\n")
			.replace(/\/\*.*\*\//g, "")
			.replace(/{/g, "{\n ")
			.replace(/;(?!('|\]|base64))/g, ";\n ")
			.replace(/}/g, "}\n ")
			.trim()
			.replace(/,$\n/gm, ",")
			.replace(/^\s+(?!$)/gm, '"')
			.replace(/"\}/gm, "},")
			.replace(/^"(?!(&|:)).+(?=:)/gm, (s) => s.trim())
			.replace(/^".*(?=\s*\{)/gm, (s) => `${s.trim()}":`)
			.replace(/;(?!('|\]|base64)|$)/gm, ";\n")
			.replace(/^"(?!content).*;$/gm, (s) =>
				s.replace(/;/g, '",').replace(/:\s*/g, '":"')
			)
			.replace(/^"content.*;$/gm, (s) =>
				s.replace(/;/g, '",').replace(/content:\s*/g, 'content":"')
			)
			.replace(/"\{/gm, "{")
			.replace(/},$/g, "}")
			.replace(/,$\n\}/gm, "\n}")
			.replace(/@.*":"/g, (s) => s.replace(/":"/g, ":"))
			.replace(/"(?!(@|&|animationName|from|to|\d)).*":{/g, (s) =>
				s.replace(/^"/g, '"& ')
			)
			.replace(/",base64/g, ";base64")
			.replace(/data":"image/g, "data:image")
			.replace(/\(.*",\s"(?=\))/g, (s) => s.replace(/",\s"/g, ""))
			.replace(/"&\s.*":{/g, (s) => s.replace(/,\s*/g, ", & "))
			.replace(/\s+/g, " ")
			.replace(/"",/g, "")
			.replace(/,\s+""\s+/g, "")
			.replace(/\s+"\w+":\s/g, "");
		if (process.env.NODE_ENV !== "production") {
			regCssString = regCssString.replace(
				/"className":"\w+"/g,
				function (match) {
					let name = match.replace(/"/g, "").split(":");
					let random = Math.random().toString(30).substring(8);
					return `"${name[0]}":"${name[1] + "_" + random}"`;
				}
			);
		}
		return JSON.parse(regCssString);
	} catch {
		throw new Error("😢 Lỗi CSS rồi");
	}
}

export default cssToJson;
