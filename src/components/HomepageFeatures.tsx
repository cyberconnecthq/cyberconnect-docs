/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image?: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Self-Sovereign',
    description: (
      <>
        We return the ownership and utilities of social graph data back to users. Only users should have autonomy over how, where, and for what their data is used. 
      </>
    ),
  },
  {
    title: 'Blockchain Agnostic',
    description: (
      <>
        Our protocol is designed to be open. Not tied to any single blockchain, the protocol is created for a multi-blockchain ecosystem.
      </>
    ),
  },
  {
    title: 'Portable',
    description: (
      <>
        Interoperability is key to a truly open web. We empower everyone to travel between apps with their own social graph as part of their Web3 identity.
      </>
    ),
  },
  {
    title: 'Composable',
    description: (
        <>
          Tap into social graph data with one click. Build upon it with agility for quick iterations.
          Fast forward bootstrapping. Build experiences not walls.
        </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--left padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
