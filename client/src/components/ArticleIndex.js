import React , {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import ArticleCard from "./ArticleCard";

function ArticleIndex() {
  const [articles, setArticles] = useState([]);
  console.log(articles);

  
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/articles')
    .then( (response)=> response.json())
    .then((data) => {
          setArticles(data)
      })
  }, [])

  return(
    <Container>
      <Row>
        <h1 className="text-center">Articoli :</h1>
        <Col xs={12}>
        {articles.map((article) => {
            return (
              <div className="col-12 col-md-4 my-2" key={article.id}>                
                <ArticleCard article={article}/>
              </div>
            )
        })}
        </Col>
      </Row>
    </Container>
  )
}

export default ArticleIndex;