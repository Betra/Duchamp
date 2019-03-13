import React from "react";
import styles from "./WikiPage.module.css";
import { ParsedApiPage } from "../ParsedApiPage";

import { getRandomWikiArticle } from "../../utils";
import { LoadingApi } from "../LoadingApi";

export class WikiPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      isLoaded: false
    };
  }

  async componentDidMount() {
    const article = await getRandomWikiArticle();
    this.setState({ article, isLoaded: true });
  }

  render() {
    const { article } = this.state;
    const image = article.hasImg ? article.original.source : "";
    if (!this.state.isLoaded) return <LoadingApi />;
    else {
      return (
        <section className={styles.contentApi}>
          <ParsedApiPage
            link={"https://en.wikipedia.org/wiki/" + article.title}
            title={article.title}
            brief={article.extract}
            imageUrl={image}
          />
        </section>
      );
    }
  }
}
