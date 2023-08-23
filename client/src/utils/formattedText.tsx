export function formatText(text: string): JSX.Element {
  const formattedText = text
    .replace(/\\n/g, "<br />") // Replace \n with HTML line breaks
    .replace(/\\r/g, "&#13;") // Replace \r with carriage return
    .replace(/\\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;") // Replace \t with HTML spaces for indentation
    .replace(/\\v/g, "&#11;") // Replace \v with vertical tab
    .replace(/\\f/g, "&#12;") // Replace \f with form feed
    .replace(/\\\\/g, "&#92;") // Replace \\ with backslash
    .replace(/\\"/g, "&quot;") // Replace \" with double quote
    .replace(/\\'/g, "&#39;"); // Replace \' with single quote

  return <div dangerouslySetInnerHTML={{ __html: formattedText }} />;
}
