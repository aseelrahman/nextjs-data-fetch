import Link from "next/link";

const BookCard = ({book}) => {
    const {title, author, price} = book;
    return (
          <div className="card  bg-base-100 card-md shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          by {author}
        </p>
        <p>${price}</p>
        <div className="justify-end card-actions">
          <Link href={`/books/${book.id}`}><button className="btn btn-primary">Show Details</button></Link>
        </div>
      </div>
    </div>
    );
};

export default BookCard;