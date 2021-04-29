const Line = ({ className, symbol, title, text }) => {
  const textCopy = (event) => {
    event.preventDefault();
    navigator.clipboard.writeText(symbol); // copy things
  };
  return (
    <div className={className} onClick={textCopy}>
      <span>{symbol}</span>
      <span>{title}</span>
      <span className="hidden">{text}</span>
    </div>
  );
};

export default Line;
