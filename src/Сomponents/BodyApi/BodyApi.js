import React from "react";
import styles from "./BodyApi.module.css";
import { ParsedApiPage } from "../ParsedApiPage";

import { getRandomWikiArticle } from "../../utils";

export class BodyApi extends React.Component {
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

    if (!this.state.isLoaded) {
      return (
        //Animation and improvement next time
        <main>
          <section className="contentApi">
            <ParsedApiPage brief="Choosing article..." />
          </section>
        </main>
      );
    } else {
      return (
        <main>
          <section className={styles.contentApi}>
            <ParsedApiPage
              link={"https://en.wikipedia.org/wiki/" + article.title}
              title={article.title}
              brief={article.extract}
              imageUrl={image}
            />
          </section>
        </main>
      );
    }
  }
}
