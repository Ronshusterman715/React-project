export function customEncodeURIComponent(str: string): string {
  // Create a map of characters that need to be encoded
  const unsafeChars: any = {
    "%": "%25",
    " ": "%20",
    '"': "%22",
    "#": "%23",
    $: "%24",
    "&": "%26",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "*": "%2A",
    "+": "%2B",
    ",": "%2C",
    "/": "%2F",
    ":": "%3A",
    ";": "%3B",
    "<": "%3C",
    "=": "%3D",
    ">": "%3E",
    "?": "%3F",
    "@": "%40",
    "[": "%5B",
    "\\": "%5C",
    "]": "%5D",
    "^": "%5E",
    _: "%5F",
    "`": "%60",
    "{": "%7B",
    "|": "%7C",
    "}": "%7D",
    "~": "%7E",
  };

  // Use the built-in String.prototype.split() and map() to replace unsafe characters
  return str
    .split("")
    .map((char) => {
      return unsafeChars[char] || char; // If character is unsafe, encode it, else keep it
    })
    .join("");
}
