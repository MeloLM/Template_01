import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

function ArticleCard(props) {
  
  console.log(props);

  return(
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" />
      <Card.Body>
        <Card.Title>{props.article.name}</Card.Title>
        <Card.Text href="#">{props.article.brand}</Card.Text>
        <Card.Text className="text-truncate">
          {props.article.body}
        </Card.Text>
        <Link className="btn btn-primary" to={`/article-detail/${props.article.id}`}>Show more..</Link>
      </Card.Body>
    </Card>
  );
}

export default ArticleCard;