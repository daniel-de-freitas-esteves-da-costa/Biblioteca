import './CardLivro.css'

interface CardLivros
{
    titulo: string,
    autor: string,
    categoria: string
}


export default function CardLivros({ titulo, autor, categoria }: CardLivros) {
  return (
    <article className="book-card">
      <div className="book-cover"></div>
      <div className="book-info">
        <span className="book-category">{categoria}</span>
        <h3 className="book-title">{titulo}</h3>
        <p className="book-author">{autor}</p>
      </div>
    </article>
  );
}