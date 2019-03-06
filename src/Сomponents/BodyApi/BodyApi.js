import React from 'react';
import './BodyApi.css';
import { ParsedApiPage } from '../ParsedApiPage';

import { getRandomWikiArticle } from '../../utils';

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
    this.setState({ article, isLoaded: true})
  }

  render() {
    const { article } = this.state;
    if (!this.state.isLoaded) {
      return ( <span> Fetching Data</span>)
    } else {
      return (
        <main >
          <section className="contentApi">
            <ParsedApiPage
              link=""
              title={article.title}
              brief={article.extract}
              imageUrl=""
            />
          </section>
        </main>
      );
      }
  }
}