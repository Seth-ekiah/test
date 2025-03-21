// Define the list of C++ keywords
const cppKeyWords = [
	"do",
	"or",
	"if",
	"not",
	"xor",
	"try",
	"new",
	"int",
	"for",
	"asm",
	"and",
	"bool",
	"this",
	"true",
	"void",
	"long",
	"enum",
	"else",
	"char",
	"goto",
	"case",
	"auto",
	"throw",
	"short",
	"while",
	"union",
	"using",
	"float",
	"final",
	"or_eq",
	"false",
	"catch",
	"class",
	"break",
	"bitor",
	"compl",
	"const",
	"extern",
	"export",
	"double",
	"inline",
	"friend",
	"delete",
	"not_eq",
	"typeid",
	"switch",
	"struct",
	"static",
	"sizeof",
	"signed",
	"return",
	"public",
	"xor_eq",
	"bitand",
	"and_eq",
	"concept",
	"alignof",
	"mutable",
	"typedef",
	"wchar_t",
	"virtual",
	"private",
	"nullptr",
	"alignas",
	"char8_t",
	"default",
	"decltype",
	"continue",
	"co_await",
	"char32_t",
	"volatile",
	"unsigned",
	"noexcept",
	"typename",
	"template",
	"requires",
	"register",
	"explicit",
	"operator",
	"char16_t",
	"co_yield",
	"co_return",
	"protected",
	"namespace",
	"consteval",
	"constexpr",
	"constinit",
	"const_cast",
	"static_cast",
	"dynamic_cast",
	"thread_local",
	"static_assert",
	"reinterpret_cast"
];

// Function to interpret the string
function interpret(string) {
	const start = '<span style="color: #0000ff">';
	const end = '</span>';

  let searcher = string;
  cppKeyWords.forEach(keyword => {
    let index = 0;
    let i = 0;
    while (i !== -1) {
      i = searcher.substring(index).indexOf(keyword);
      index = i + index;
      if (i === -1) {
        break;
      }

      if(searcher[index - 1] === "\\") {
      	searcher = searcher.substring(0, index - 1) + searcher.substring(index);
      }
      else if (searcher[index + keyword.length] === '=') {}
      else if (!searcher[index - 1].match(/[a-zA-Z]/) && !searcher[index + keyword.length].match(/[a-zA-Z]/)) {
        searcher = searcher.substring(0, index) + start + keyword + end + searcher.substring(index + keyword.length);
        index += start.length + end.length;
      }

      index += keyword.length;
    }
  });

  return searcher;
}

function applyKeywordColoring() {
	const collection = document.getElementsByClassName("code");
	for (element of collection) {
		element.innerHTML = interpret(element.innerHTML);

	}
}

applyKeywordColoring();