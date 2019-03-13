import React from "react";

import styles from "./WikiPage.module.css";
import { ParsedApiPage } from "../ParsedApiPage";
import { getRandomWikiArticle } from "../../utils";
import { LoadingApi } from "../LoadingApi";
import { ButtonCutUp, cutRandomPieces } from "../ButtonCutUp";
import { PaperList } from "../PaperList";

import { shuffleArray } from "../../utils";

export class WikiPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      isLoaded: false,
      cutUps: []
    };
  }
  handleCutUpArray = text => {
    let cutUps = this.renderCutups(text);
    this.setState({ cutUps: cutUps });
  };

  renderCutups = text => {
    let cutUps = cutRandomPieces(text);
    return shuffleArray(cutUps);
  };

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
        <section>
          <section className={styles.contentApi}>
            <ParsedApiPage
              link={"https://en.wikipedia.org/wiki/" + article.title}
              title={article.title}
              brief={article.extract}
              imageUrl={image}
            />
          </section>

          <ButtonCutUp onClick={this.handleCutUpArray} text={article.text} />
          <PaperList cutUps={this.state.cutUps} />
        </section>
      );
    }
  }
}
