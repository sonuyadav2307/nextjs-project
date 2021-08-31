import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';

export default class Home extends Component {
  render() {
    let { title, allImages } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <h1>{title}</h1>
          <h1>This is cool</h1>
          <HomeContent />
          <ul>
            {allImages.map((each, k) => (
              <li key={k}>
                <h2>{each.name}</h2>
                <img src={each.image} alt="Cinque Terre" width="1000" height="300" />
                <p>{each.description}</p>
              </li>
            ))}
          </ul>
        </article>
      </>
    )
  }
}