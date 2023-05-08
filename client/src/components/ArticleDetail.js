import { useEffect, useState } from "react";
import { Container , Row , Col} from "react-bootstrap";
import { useParams } from "react-router-dom";

function ArticleDetail() {
  const [article, setArticle] = useState([]);
  const {articleId} = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/article/${articleId}`)
    .then( (response)=> response.json())
    .then((data) => {
        setArticle(data)
    })
  }, [])


  return(
    <Container fluid>
      <Row>
        <Col xs={12}>
          <h1 className="text-center mb-4">{article.name}</h1>
          <p>{article.body}</p>
        </Col>
      </Row>
    </Container>
  )
}

export default ArticleDetail;